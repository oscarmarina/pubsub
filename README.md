# @sergicontre/pubsub

[![npm (scoped)](https://img.shields.io/npm/v/@sergicontre/pubsub.svg)](https://www.npmjs.com/package/@sergicontre/pubsub)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@sergicontre/pubsub.svg)](https://www.npmjs.com/package/@sergicontre/pubsub)

A tiny Publish-Subcribe pattern to define a one-to-many dependency between objects so that when one object change state, all its dependents are notified and updated automatically.

## Install

```
$ npm install @sergicontre/pubsub
```

## Usage

```js
import PubSub from '@sergicontre/pubsub'
```

### publish
```js
PubSub.publish('channel-name',value)
```

### subscribe
```js
//Return Observable
let subscriber = PubSub.subscribe('channel-test').on(value => {
    console.log(`value: ${value}`);
})
```

### unsubscribe

```js
//Return Observable
let subscriber = PubSub.subscribe('channel-test').on(value => {
    console.log(`value: ${value}`);
})

subscriber.unsubscribe();

```