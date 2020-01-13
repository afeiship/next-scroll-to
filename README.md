# next-scroll-to
> Scroll to api.

## installation
```bash
npm install -S @feizheng/next-scroll-to
```

## usage
```js
import '@feizheng/next-scroll-to';

// top/bottom/number
nx.scrollTo({ el: document.querySelector('.abc'), to: 'top' });
nx.scrollTo({ el: document.querySelector('.abc'), to: 'bottom' });
nx.scrollTo({ el: document.querySelector('.abc'), to: 1000 });
```

## set `scroll-behavior: smooth;`
> Use css3 smooth-scroller.
