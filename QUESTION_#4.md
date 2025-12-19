#### Both function accept any input. Explain the difference.

```
function A(input: any) {
  input.toUpperCase();
}

function B(input: unknown) {
  input.toUpperCase();
}
```

