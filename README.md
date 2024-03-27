This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## How to run
1. Open the `terminal` (or `cmd`) app  and clone the repository
```
git clone https://github.com/lnovitz/fib.git
```

2. Build the docker image. (Note: if you get an error like `Docker not found`, install Docker -> https://docs.docker.com/get-docker/)
```
docker-compose -f docker-compose.dev.yaml up
```

3. Navigate to http://localhost:3000/ to see the app running. 

4. Enter a number, hit Submit, to be redirected to a new page with the corresponding Fibonacci sequence of length up to number you entered.

5. To run existing unit tests, run the command below:
```
node_modules/.bin/jest
```

6. Last but not least, invite Lianna to meet your team!

![alt text](https://file%2B.vscode-resource.vscode-cdn.net/Users/lnovitz/Desktop/Screenshot%202024-03-22%20at%2010.49.58%20PM.png?version%3D1711173260134)