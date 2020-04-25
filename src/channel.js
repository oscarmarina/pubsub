import {ReplaySubject} from 'rxjs';

/**
 * Define an interface for attaching and detaching Observer objects
 */
class ChannelBase extends ReplaySubject {
  /**
   * Construct an instance of ChannelBase.
   * @param {int} buffer specified initial buffer capacity of messages.
   */
  constructor(buffer) {
    super(buffer);
    this.on = super.subscribe;
  }
}

export default ChannelBase;
