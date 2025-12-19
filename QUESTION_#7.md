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

