# Next.js 15 - Fetch API Error

This repository demonstrates a common error encountered when using the `fetch` API in Next.js 15 page components.  The issue arises when attempting to directly use `fetch` without placing it inside an `async` function.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`. You will see an error.

## Solution

The solution is to wrap the `fetch` call within an `async` function and use `await` to get the response.  This is demonstrated in the `aboutSolution.js` file. 