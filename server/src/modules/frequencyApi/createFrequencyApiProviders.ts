import { RedditApi } from './reddit.repository';

export default (frequencies, options?) => {
  return frequencies.map( frequency => (
    frequency === 'reddit' ? RedditApi
    : null
  ))
}