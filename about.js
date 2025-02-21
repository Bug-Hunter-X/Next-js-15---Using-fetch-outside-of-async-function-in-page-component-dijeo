```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because `fetch` is used outside of an async function.
  const data = fetch('/api/data');

  return (
    <div>
      <h1>About Page</h1>
      <p>Data: {JSON.stringify(data)}</p> 
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  res.status(200).json({ text: 'Data from API' });
}
```