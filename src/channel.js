import { ReplaySubject } from 'rxjs';

class ChannelBase extends ReplaySubject {
    constructor(buffer) {
        super(buffer);
        this.on = super.subscribe;
    }
};

export default ChannelBase;
