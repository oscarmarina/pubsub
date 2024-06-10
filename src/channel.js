import { ReplaySubject } from 'rxjs';

/**
 * Define an interface for attaching and detaching Observer objects
 */
class ChannelBase extends ReplaySubject {
  /**
   * Construct an instance of ChannelBase.
   * @param { number } buffer specified initial buffer capacity of messages.
   */
  constructor(buffer) {
    super(buffer);
    /**
     * Alias for the `subscribe` method from `rxjs`.
     * Use this to subscribe to the channel.
     */
    this.on = super.subscribe;
  }
}

export default ChannelBase;
