---
path: "/blog/dont-let-your-rxjs-observables-die"
date: "2021-10-10"
title: "Don’t let your RxJS observables die"
featuredImage: featured.jpg
featuredImageBy: "Sarah Kilian"
featuredImageByUrl: "https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
featuredImageSite: "Unsplash"
featuredImageSiteUrl: "https://unsplash.com/s/photos/error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
---

RxJS is a powerful library for reactive programming. We use it in Angular all the time, from simple reactions to HTTP client responses to full-blown state management solutions. But sometimes, it is easy to miss some details and create a code that can break at the worst possible moment. 
Therefore, we will dive into a few scenarios that you should remember when dealing with errors in RxJS observable executions.
<!-- end -->

## Keep it alive

Let’s start with an example right away.

```js
of(1, 2, 3, 4, 5)
  .pipe(
    tap(v => {
      if (v === 3) {
        throw new Error('some error');
      }
    })
  )
  .subscribe({
    next: console.log.bind(null, 'next:'),
    error: (err: Error) => console.log('error:', err.message),
  });
```

We have an observable that emits numbers from 1 to 5, and if the number is 3, we throw an error.

We can see the following output.

```sh
next: 1
next: 2
error: some error
```

Numbers 4 and 5 were not processed at all.

This might be surprising at the beginning, but if we check the RxJS [observable documentation](https://rxjs.dev/guide/observable#executing-observables), we can find a clear definition of the observable contract as:

>In an Observable Execution, zero to infinite Next notifications may be delivered. If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.

In our case, the execution has delivered an error for the third item, and thus it can not deliver any other notifications.

Let’s move into something more complex - we have routing in our application, and we want to build an Angular component that displays the current URL.

```js
this.router.events
  .pipe(
    filter(event => event instanceof NavigationEnd),
    tap((e: NavigationEnd) => this.thisCanThrowAnError(e.url))
  )
  .subscribe({
    next: e => this.currentPath = e.url,
    error: this.notifyError.bind(this),
  });
```

Here we subscribe to router events and use the tap operator to call a function that can potentially throw an error. If an error occurs, we show a notification. But as we already know, we will lose the subscription if an error is thrown. If we navigate to another route afterward, the displayed path won’t be updated anymore, and we would have to call the subscribe again.

So, how to handle this problem? One option would be to catch the exception right inside of the tap handler. You can imagine this would be a hassle because we would have to do it for each operator that can throw an error. Instead, we would like to handle it in one central place.

Luckily, RxJS has us covered, and we can use the [catchError](https://rxjs.dev/api/operators/catchError) operator. The catchError operator catches an error and enables us to handle it in some way. The vital thing to remember is that the catchError operator expects a new observable that will replace the old failed one. In our case, we would like to continue with the observable we already had, so all we have to do is return the observable sent to our handler after we display the error notification.

```js
currentPath$ = this.router.events
    .pipe(
    filter(event => event instanceof NavigationEnd),
    tap((e: NavigationEnd) => this.thisCanThrowAnError(e.url)),
    map(e => e.url),
    catchError((err, failedObservable) => {
      this.notifyError(err);
      return failedObservable;
    })
  );
```

As a side note, we are not handling the error inside of the observer anymore. Therefore we can leverage the Async pipe provided by Angular and remove the explicit subscribe.

One thing to remember, when an error occurs, the currentPath$ will not emit any value to the Async pipe for the URL that caused the error. Therefore we won’t see any update to the current path. The reason is that we are resubscribing to router events, and the last event has already been emitted and processed. We can prepend a fallback value to the observable returned from the catchError operator to solve this issue.

```js
currentPath$ = this.router.events
  .pipe(
    filter(event => event instanceof NavigationEnd),
    tap((e: NavigationEnd) => this.thisCanThrowAnError(e.url)),
    map(e => e.url),
    catchError((err, failedObservable) => {
      this.notifyError(err);
      return failedObservable.pipe(startWith('failed to retrieve'));
    })
  );
```

We will, in this case, display the message “failed to retrieve” instead of the old URL.

## 

## Break the loop

So far, so good, but we still have some caveats to explore.

Let’s return to our first example with the simple “of” observable and apply the same fix.

```js
of(1, 2, 3, 4, 5)
  .pipe(
    tap(v => {
      if (v === 3) {
        throw new Error('some error');
      }
    }),
    catchError((err, failedObservable) => failedObservable)
  )
  .subscribe();
```

Do you see the problem? The catchError operator will resubscribe to the returned observable, and therefore the observable will emit all of its items again. We will fail on item 3 again, and we will also process the previous items multiple times.

In a more real-world case, this problem would occur if we use any kind of replay. Let’s rewrite the simple example using ReplySubject.

```js
const subject = new ReplaySubject(1);
subject
  .pipe(
    tap(v => {
      if (v === 3) {
        throw new Error('some error');
      }
    }),
    catchError((err, failedObservable) => failedObservable)
  )
  .subscribe();

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
```

In this case, ‘3’ will be emitted again after the resubscribe in the catchError operator. The error in the tap operator will be therefore thrown again, resulting in an infinite loop. How could we skip the failing item? The first idea could be to simply skip the failing item when returning the new observable from the catchError.  
Something like this.

```js
failedObservable.pipe(skip(1))
```

This will not work because failedObservable already contains the tap operator where the error occurs. We have added the skip operator after it, so it is too late. We can overcome this problem by moving the handling above the tap operator.

```js
let lastValue;
const subject = new ReplaySubject(1);
subject
  .pipe(
    filter(v => v !== lastValue),
    tap(v => {
      lastValue = v;
      if (v === 3) {
        throw new Error('some error');
      }
    }),
    catchError((err, failedObservable) => failedObservable),
  )
  .subscribe();

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
```

This way, we successfully skipped the failing item. But let’s face it, it looks somehow ugly. We need another variable, and the RxJS pipeline is not neatly self-contained anymore.

Let’s try to go a step back.

Until now, we have been trying to keep the failing observable alive by retrying it. But what if we accept that it will become unsubscribed instead? We will prepare for it by creating another observable that we can sacrifice in the case of an error.

```js
const subject = new ReplaySubject(1);
subject
  .pipe(
    mergeMap(v =>
      of(v).pipe(
        tap(v => {
          if (v === 3) {
            throw new Error('some error');
          }
        }),
        catchError(() => EMPTY)
      )
    )
  )
  .subscribe();

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
```

In this case, we create another observable from the current value and flatten it using the mergeMap operator. We catch the error for item 3 inside the mergeMap operator as a part of the inner observable. We will cause the inner observable to complete by returning the EMPTY observable, but the important thing is that it will not end the outer observable.

## Service calls

We could also apply this pattern to our example with the router.

```js
currentPath$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    switchMap(event =>
      of(event).pipe(
        tap((e: NavigationEnd) => this.thisCanThrowAnError(e.url)),
        map(e => e.url),
        catchError(err => {
          this.notifyError(err);
          return of('failed to retrieve');
        })
      )
    )
  );
```

Note that because we are not using any reply, it doesn’t make much sense to use the inner observable in this case. Still, it brings us closer to a real-world example - a back-end API call to retrieve some information as a reaction to an observable emission. 

Let’s say that instead of getting some information from the activated route, we would like to call an API based on the current path. Such a call can fail anytime, e.g., because the API server is currently unavailable. Therefore we need to prepare for that case.

```js
currentPath$ = this.router.events
  .pipe(
    filter(event => event instanceof NavigationEnd),
    switchMap((e: NavigationEnd) =>
      this.someApiCallThatMightFail(e.url).pipe(
        catchError(err => {
          this.notifyError(err);
          return of('failed to retrieve');
        })
      )
    )
  );
```
We catch the potential error inside the switchMap operator, and thus we ensure that the error will not take down the whole observable execution.

## Conclusion

We have looked into some cases that we should remember when dealing with a code that could throw an error in our observable execution. 
Remember to catch errors correctly if you wish to keep the execution alive, and also beware of loops if you rethrow those errors.

You can find the example code with the router events [here](https://stackblitz.com/edit/angular-rxjs-error-recovery):

https://stackblitz.com/edit/angular-rxjs-error-recovery