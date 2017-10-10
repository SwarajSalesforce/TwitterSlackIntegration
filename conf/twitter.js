let Twitter = require('twit');

const CONSUMER_KEY = 'PZuIOJhdGxYM4FEdFuuvgKkHe';
const CONSUMER_SECRET = 'X1eQSrHjTDWL4hhN6tAF4fHZmGFB6aFL8FxFr62fgstOhwA4sZ';
const ACCESS_TOKEN = '85584838-cMiKxCGbwLBFQWEZSpYKtugrw6jRDgt5dH0XAOTGw';
const ACCESS_SECRET = 'n9WUh2cltIFNoX34dsbvVwkqE75WvACEj1pyA73C7GnoN';

if (!CONSUMER_KEY) { missing("CONSUMER_KEY"); }
if (!CONSUMER_SECRET) { missing("CONSUMER_SECRET"); }
if (!ACCESS_TOKEN) { missing("ACCESS_TOKEN"); }
if (!ACCESS_SECRET) { missing("ACCESS_SECRET"); }

let twitter = new Twitter({

    consumer_key : CONSUMER_KEY,
    consumer_secret : CONSUMER_SECRET,
    access_token : ACCESS_TOKEN,
    access_token_secret : ACCESS_SECRET,
    
});

module.exports = twitter;
