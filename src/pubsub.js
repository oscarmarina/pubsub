/**
 * @typedef {import('rxjs').Observable} Observable
 */
import ChannelBase from './channel.js';

/**
 * Base class for PubSub
 */
class PubSub {
  /**
   * Construct an instance of PubSub.
   */
  constructor() {
    if (!PubSub.instance) {
      /**
       * Array to store channels.
       * @type {Array}
       */
      this.channels = [];
      PubSub.instance = this;
    }

    return PubSub.instance;
  }
  /**
   * Subscribes to listen messages from a channel.
   * Every returned channel should be stored if you need to unsubscribe
   * @function
   * @alias subscribe
   * @param {string} channelName The name of channel to listen
   * @return {Observable|undefined} - The RxJS Observable object.
   */
  subscribe(channelName) {
    if (this.channels && channelName) {
      let channel;
      channel = this.channels[channelName];
      if (typeof channel === 'undefined') {
        this.channels[channelName] = channel = new ChannelBase(1);
      }
      return channel;
    }
  }
  /**
   * Publishes a message to channel, passing the data to it's subscribers
   * @function
   * @alias publish
   * @param { string } channelName The name of channel where publish
   * @param { Object } message The message to publish
   * @return { boolean }
   */
  publish(channelName, message) {
    if (channelName && this.channels) {
      let channel = this.channels[channelName];
      if (typeof channel === 'undefined') {
        channel = this.subscribe(channelName);
      }
      channel.next(message);
      return true;
    } else {
      console.error('You must define a name of a channel to publish a message');
      return false;
    }
  }
}

/**
 * Static porperty to store the instance of PubSub
 * @type {PubSub|undefined}
 */
PubSub.instance = undefined;

export default PubSub;
