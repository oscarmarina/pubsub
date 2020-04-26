import test from 'ava';
import PubSub from '../src/pubsub'

test('pubsub instance', t => {
	const pb = new PubSub();
	t.is(true, pb instanceof Object);
})

test('publish to channel a value', t => {
	const pb = new PubSub();
	let result = pb.publish("channel-test", 2);
	t.is(2,pb.channels["channel-test"]._events[0]);
	t.is(true, result);
})

test('subsbribe to channel first time', t => {
	const pb = new PubSub();
	let channel = pb.channels['channel-test'];
	t.is(undefined, channel);
	pb.publish("channel-test",22);
	let channel1 = pb.channels['channel-test'];
	t.not(undefined, channel1);
	t.is(22,pb.channels["channel-test"]._events[0]);
})

test('publish to channel without name', t => {
	const pb = new PubSub();
	let result = pb.publish("", 2);
	t.is(false,result)
})

test('subsbribe to channel', t => {
	const pb = new PubSub();
	let channel = pb.channels['channel-test'];
	t.is(undefined, channel);
	pb.subscribe("channel-test");
	let channel1 = pb.channels['channel-test'];
	t.not(undefined, channel1);
})



