#### Look at this code. Which lines will throw a TypeScript error, and which will throw a Runtime error?

```
const config = { port: 8080 };
const deepConfig = { port: 8080 } as const;

config.port = 3000;       // Line A
deepConfig.port = 3000;   // Line B

const arr: readonly number[] = [1, 2, 3];
arr.push(4);              // Line C
arr[0] = 9;               // Line D
```

