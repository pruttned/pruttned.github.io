const ghpages = require('gh-pages');

ghpages.publish('public', {
    message: 'Deploy'
}, err => {
    if (err) {
        console.error(err);
    }
});