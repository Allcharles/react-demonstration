# React Tutorial

If you wish to follow along with the tutorial powerpoint slides, begin with the initial-setup folder. Otherwise, to just inspect the final product, begin with the final-product folder.

## API

The API for this example uses [json-server](https://github.com/typicode/json-server), and can be customised by editing the example-data.json file. For the tutorial, the routes we will have access to are:

- http://localhost:3001/posts
- http://localhost:3001/comments
- http://localhost:3001/albums
- http://localhost:3001/photos
- http://localhost:3001/users
- http://localhost:3001/todos

When creating requests, keep in mind the following:

- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to db.json
- Your request body JSON should be object enclosed, just like the GET output. (for example `{"name": "Foobar"}`)
- Id values are not mutable. Any `id` value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a `Content-Type: application/json` header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data.

For a more detailed overview of the capabilities of each route, check out the documentation made by json-server: https://github.com/typicode/json-server#routes
