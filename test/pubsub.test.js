import test from 'ava';
import pb from '../src/index.js';

test('pubsub instance', (t) => {
  t.is(true, pb instanceof Object);
});

test('publish to channel a value', (t) => {
  const result = pb.publish('channel-test', 2);
  t.is(2, pb.channels['channel-test']._buffer[0]);
  t.is(true, result);
});

test('publish to an existing channel', (t) => {
  const channel1 = pb.channels['channel-test'];
  t.not(undefined, channel1);
  pb.publish('channel-test', 4);
  const channel2 = pb.channels['channel-test'];
  t.is(true, channel1 === channel2);
});

test('publish to channel without name', (t) => {
  const result = pb.publish('', 2);
  t.is(false, result);
});

test('subsbribe to channel first time', (t) => {
  const channel = pb.channels['channel-test-first'];
  t.is(undefined, channel);
  pb.publish('channel-test-first', 22);
  const channel1 = pb.channels['channel-test-first'];
  t.not(undefined, channel1);
  t.is(22, pb.channels['channel-test-first']._buffer[0]);
});

test('subsbribe to an existing channel', (t) => {
  pb.subscribe('channel-test');
  const channel1 = pb.channels['channel-test'];
  t.not(undefined, channel1);

  pb.subscribe('channel-test');
  const channel2 = pb.channels['channel-test'];
  t.not(undefined, channel2);
  t.is(true, channel1 === channel2);
});

test('subsbribe to channel', (t) => {
  pb.subscribe('channel-test');
  const channel1 = pb.channels['channel-test'];
  t.not(undefined, channel1);
});
