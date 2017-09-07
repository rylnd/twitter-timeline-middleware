var Twitter = require('twitter');

var twitterTimelineMiddleware = function(options) {
  var twitterClient = new Twitter({
    consumer_key: options.consumerKey,
    consumer_secret: options.consumerSecret,
    access_token_key: options.accessTokenKey,
    access_token_secret: options.accessTokenSecret
  });

  return function(req, res, next) {
    var params = { screen_name: req.params.screen_name };

    twitterClient.get('statuses/user_timeline', params, function(error, tweets) {
      if (error) return next(error);
      res.send({ data: tweets });
    });
  };
};

module.exports = twitterTimelineMiddleware;
