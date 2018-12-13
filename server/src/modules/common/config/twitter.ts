export const twitterConfig = {
  // token not needed for app only auth
  // access_token: process.env.TWITTER_BEARER_TOKEN,
  app_only_auth: true,
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET
}
