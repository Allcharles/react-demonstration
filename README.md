# React Tutorial

Inside this repo you will find the example code from the [Brown Bag React Tutorial](https://trevipay.sharepoint.com/:f:/s/MultiService/Engineering/training/EkI_-LV0DdtDi7YRNCb0SzcB7HYiQ98b7pggG6D2VQr8WA?e=usFe4E).

## Tutorials

This repo contains tutorials for the following concepts:

- [Components and Props](./components-and-props/README.md)
- [Axios/useEffect](./axios/README.md)
- [Context/useContext](./context/README.md)
- [Reducer/useReducer](./reducer/README.md)
- [Routing](./react-router/README.md)
- [Styled Components](./styled-components/README.md)

## API

Some examples will rely on an API, this has been setup locally for you and uses [json-server](https://github.com/typicode/json-server). The server will automatically run in any examples which use it so no need to worry about configuration. The routes provided by the API are as follows:

- http://localhost:3001/posts
- http://localhost:3001/comments
- http://localhost:3001/albums
- http://localhost:3001/photos
- http://localhost:3001/users
- http://localhost:3001/todos

When creating requests, keep in mind the following:

- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to the databases json file
- Your request body JSON should be object enclosed, just like the GET output. (for example `{"name": "Foobar"}`)
- Id values are not mutable. Any `id` value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a `Content-Type: application/json` header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data.

For a more detailed overview of the capabilities of each route, check out the documentation made by json-server: https://github.com/typicode/json-server#routes
