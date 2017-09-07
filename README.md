# twitter-timeline-middleware

## What is it?
A quick and easy way to generate an endpoint that serves twitter timeline data for a given user.

## How do I use it?
First, you'll need Twitter developer credentials. These can be generated
[here](https://apps.twitter.com/). This library only requires READ permissions,
so adjust your app's permissions accordingly.

Next, you'll need to install the package:

```javascript
npm install twitter-timeline-middleware
```

And then configure and use the middleware in your app:

```javascript
var twitterTimeline = require('twitter-timeline-middleware');
var twitterCredentials = {
  consumerKey: 'abcdefg',
  consumerSecret: 'hijklmn',
  accessTokenKey: 'opqrst',
  accessTokenSecret: 'uvwxyz'
};

app.use('/timeline/:screen_name', twitterTimeline(twitterCredentials));
```

### Response

```json
{
  "data": <Twitter Server Response>
}
```
