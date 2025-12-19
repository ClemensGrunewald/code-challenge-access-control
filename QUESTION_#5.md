#### What is the console output?

```
(async () => {
  async function mockCall(_item: unknown) {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  async function process() {
    console.log('Start');

    items.forEach(async (item) => {
      await mockCall(item);
      console.log('Processed', item);
    });

    console.log('Done');
  }

  const items = [1, 2, 3];
  await process();
})()
```

