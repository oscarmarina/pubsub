import ChannelBase from './channel.js'

class PubSub {

    constructor(params) {
        this.channels = [];
    }

    subscribe(channelName) {
        let channel = this.channels[channelName];
        if (channel == null) {
            this.channels[channelName] = channel = new ChannelBase(1);
        }
        return channel;
    }

    publish(channelName, value) {
        let channel = this.channels[channelName]
        if (channel) {
            channel.next(value);
        }
    }

};

export default PubSub;
