import ChannelBase from './channel.js';

/**
 * Base class for PubSub
 */
class PubSub {
  /**
   * Construct an instance of PubSub.
   */
  constructor() {
    this.channels = [];
  }
  /**
   * Subscribes to listen messages from a channel.
   * Every returned channel should be stored if you need to unsubscribe
   * @function
   * @alias subscribe
   * @param { String } channelName The name of channel to listen
   * @return { Observable }
   */
  subscribe(channelName) {
    let channel = this.channels[channelName];
    if (typeof channel === 'undefined') {
      this.channels[channelName] = channel = new ChannelBase(1);
    }
    return channel;
  }
  /**
   * Publishes a message to channel, passing the data to it's subscribers
   * @function
   * @alias publish
   * @param { String } channelName The name of channel where publish
   * @param { Object } message The message to publish
   */
  publish(channelName, message) {
    if (channelName) {
      let channel = this.channels[channelName];
      if (typeof channel === 'undefined') {
        channel = this.subscribe(channelName);
      }
      channel.next(message);
      return true
    } else {
      console.error('You must define a name of a channel to publish a message');
      return false
    }
  }
}

export default PubSub;
