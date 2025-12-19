#### How do I fix this bug so that original remains unchanged?

```
const original = [{ id: 1 }, { id: 2 }];
const copy = original; 
copy[0].id = 999;
console.log(original[0].id);
```

