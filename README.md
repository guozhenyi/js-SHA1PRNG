# js-sha1prng

A lib for compatible with sun.security.provider.SecureRandom.

## Installation

npm:
```shell
$ npm install --save sha1prng
```

or yarn:
```shell
$ yarn add sha1prng
```

## Usage

```javascript
const hash = require('sha1prng');

const secretKey = 'xxxxxxxxxxxxxxxx';
const hashKey = hash.sha1prng(secretKey);

console.log('Buffer:', hashKey);
console.log('Hex:', hashKey.toString('hex'));
```

