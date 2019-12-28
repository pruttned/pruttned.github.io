const ghpages = require('gh-pages');

ghpages.publish('public', {
    message: 'Deploy',
    branch: 'master'
}, err => {
    if (err) {
        console.error(err);
    }
});