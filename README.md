# didactic-barnacle
Same Node.js backend

### Adding dependencie
 - Get inside the repo `cd didactic-barnacle`
 - Run `npm i` to install all the dependencies


## Running in Development mode
Use command `npm run dev` to get into the development mode
This mode uses `nodemon` for file watch and server restart

## Running in the production/staging mode
Use command `npm start` to run the project in production/staging mode


## Sample Requests
#### Sample login request
 - Content type of the body must be JSON.
 - Body object must have 2 fields `username` and `password` passed to login request, length of each values must be greater than 8.

```
curl --location --request POST 'http://localhost:5007/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{"username": "enterAnyUsername", "password":"enterAnyPassword"}'
```

#### Sample JSON Patch request
 - Content type of the body must be JSON.
 - Body object must have 2 objects `document` and `patch` passed to JSONPatch request.

```
curl --location --request POST 'http://localhost:5007/api/jsonpatch/apply' \
--header 'Content-Type: application/json' \
--header 'auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNkc2RmZnh6IiwiaWF0IjoxNjE4MzA4MDcyfQ.HHZvPv9bRXisTx7cykzRvl3xv2CYzo1obS8rkcOlEXo' \
--data-raw '{
    "document": {
        "baz": "qux",
        "foo": "bar"
    },
    "patch": [
        { "op": "replace", "path": "/baz", "value": "boo" },
        { "op": "add", "path": "/hello", "value": ["world"] },
        { "op": "remove", "path": "/foo" }
    ]
}'
```

#### Sample image resize request

- Content type of the body must be JSON.
- Body object must have `url` field having valid url.

```
curl --location --request POST 'http://localhost:5007/api/image/resize' \
--header 'Content-Type: application/json' \
--header 'auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNkc2RmZnh6IiwiaWF0IjoxNjE4MzExNTU0fQ.s1MrgS2P-SpDPwXaX490xogi3Xkg-AM1s9ZDSJsYhf0' \
--data-raw '{
    "url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png"
}'
```