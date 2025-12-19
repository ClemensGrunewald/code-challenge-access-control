
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



#### How do I fix this bug so that original remains unchanged?

```
const original = [{ id: 1 }, { id: 2 }];
const copy = original; 
copy[0].id = 999;
console.log(original[0].id);
```

 

#### Convert these two arrays into a typed Record (Dictionary) where ids are drinks and sizes are values. You can assume same length.

```
const drinks = ['Ice Tea', 'Coca Cola', 'Pineapple Juice', 'Water']
const sizes = [0.5, 0.5, 1, 0.33]
```



#### Both function accept any input. Explain the difference.

```
function A(input: any) {
  input.toUpperCase();
}

function B(input: unknown) {
  input.toUpperCase();
}
```
 


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



#### I have a function that accepts a User. Why does Call A work, but Call B fails?

```
interface User {
  id: string;
}

function logUser(u: User) {
  console.log(u.id);
}

const admin = { id: '1', role: 'admin' };
logUser(admin); // Call A: Works.
logUser({ id: '2', role: 'admin' }); // Call B: Error!
```



#### The counter starts at 0. What does it show after 5 seconds?

```
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log('Ticking...');
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <div>{count}</div>;
}
```
