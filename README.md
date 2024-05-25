## React Blog

A simple Blog site powerd by React. This is the frontend, while the backend is: restful-node-multi-user (https://github.com/nbagonoc/RESTful-node-blog)

## Features:
- Registration
- Login
- Create blog post
- View yours, and others blog post
- Update your blog post
- Delete your blog post

## How to run locally:

- Download dependencies:
```
npm install
```

- Serve by running:
```
npm run dev
npm run test
```

## How to run via docker:

- Download dependencies:
```
docker build -t react-blog .
docker run -d -p 8080:8080 react-blog
```