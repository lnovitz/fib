This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## How to run the Dockerized app (preferred method; mandatory for Windows users)
1. Open the `terminal` (or `cmd`) app  and clone the repository
```
git clone https://github.com/lnovitz/fib.git
```

2. Build the docker image. (Note: if you're having trouble with this command, make sure you're adding a "." dot at the end!)
```
docker build -t fib .
```
3. Next, map the app to port 5001.
```
docker run -p 3000:3000 fib
```
Note: if you get yelled at by your terminal, use a different port like `3001:3000`.

To test if the app is running correctly, navigate to http://localhost:3000/


![alt text](https://file%2B.vscode-resource.vscode-cdn.net/Users/lnovitz/Desktop/Screenshot%202024-03-22%20at%2010.49.58%20PM.png?version%3D1711173260134)