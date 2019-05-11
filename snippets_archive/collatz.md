### collatz

Applies the Collatz algorithm.

If `n` is even, return `n/2`. Otherwise, return `3n+1`.

```js
const collatz = n => (n % 2 === 0 ? n / 2 : 3 * n + 1);
```

```js
collatz(8); // 4
```
