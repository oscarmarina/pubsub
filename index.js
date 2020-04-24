import ChannelBase from './src/channel.js'

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
        if (channelName) {
            let channel = this.channels[channelName]
            if (channel == null) {
                channel = this.subscribe(channelName);
            }
            channel.next(value);
        } else {
            console.error('You must define a name of a channel to publish a value')
        }

    }

};

export default PubSub;
