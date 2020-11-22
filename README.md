# next-scroll-to
> Scroll to api.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-scroll-to
```

## usage
```js
import '@jswork/next-scroll-to';

// top/bottom/number
nx.scrollTo({ el: document.querySelector('.abc'), to: 'top' });
nx.scrollTo({ el: document.querySelector('.abc'), to: 'bottom' });
nx.scrollTo({ el: document.querySelector('.abc'), to: 1000 });
```

## set `scroll-behavior: smooth;`
> Use css3 smooth-scroller.


## license
Code released under [the MIT license](https://github.com/afeiship/next-scroll-to/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-scroll-to
[version-url]: https://npmjs.org/package/@jswork/next-scroll-to

[license-image]: https://img.shields.io/npm/l/@jswork/next-scroll-to
[license-url]: https://github.com/afeiship/next-scroll-to/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-scroll-to
[size-url]: https://github.com/afeiship/next-scroll-to/blob/master/dist/next-scroll-to.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-scroll-to
[download-url]: https://www.npmjs.com/package/@jswork/next-scroll-to
