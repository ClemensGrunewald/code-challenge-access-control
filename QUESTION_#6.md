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

