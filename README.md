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

Then configure the middleware:

```javascript
var TwitterTimelineMiddleware = require('twitter-timeline-middleware');
var twitterCredentials = {
  consumerKey: 'abcdefg',
  consumerSecret: 'hijklmn',
  accessTokenKey: 'opqrst',
  accessTokenSecret: 'uvwxyz'
};
var twitterTimelineMiddleware = TwitterTimelineMiddleware(twitterCredentials);
```

And finally, use it in your application:

```javascript
// in an express server
app.get('/timeline/:screen_name', twitterTimelineMiddleware);

// in a browsersync server
var browserSyncOptions = {
  middleware: [{
    route: '/timeline/:screen_name',
    handle: twitterTimelineMiddleware)
  }]
};
```

### Response

```jsx
{
  "data": <TwitterServerResponse>
}
```
