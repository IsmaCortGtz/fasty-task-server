# Environment Vars

`fasty-task-server` needs some env vars to work. You can define it using your machine env vars or using a dependencie like `dotenv`. You shoulnd't use `dotenv` if you aren't in a dev env.

#### Table of content

- [Variables](#variables)
  - [PORT](#port)
  - [JWT Secret](#jwt-secret)
  - [JWT Expire](#jwt-expire)
  - [MongoDB URI](#mongodb-uri)
  - [Bcrypt Saltround](#bcrypt-saltround)
  - [Frontend Deploy](#frontend-deploy)
  - [Frontend Redirect](#frontend-redirect)
- [Full Example](#full-example)


## Variables

### PORT

The `PORT` var define in wich PORT express should run. If this var is not defined `fasty-task-server` will use the port `8080`.

#### Example

```env
PORT=5050
```


### JWT Secret

The `JWT_SECRET` var define the secret wich the jwt will be generated. You shouldn't use a simple secret.

#### Example

```env
JWT_SECRET="hciojsdjcjdkscsnkjnkjdsjlvmlmvkldklckjposdjiwj94ui"
```



### JWT Expire

The `JWT_EXPIRE` var define the time in seconds that the JWT will expire.

#### Example

```env
JWT_EXPIRE=8640000
```



### MongoDB URI

The `MONGODB_URI` var define the URI to connect with MongoDB. I test it just with the oficcial MongiDB service.

#### Example

```env
MONGODB_URI="mongodb+srv://<user>:....mongodb.net/<dbname>?retryWrites=true&w=majority"
```



### Bcrypt Saltround

The `BCRYPT_SALTROUND` var define the integer that will be passed to bcrypt to generate a hash's password.

#### Example

```env
BCRYPT_SALTROUND=10
```



### Frontend Deploy

The `MY_FRONTEND_DEPLOY` var define the URL which frontend are deployed, this is optional. When this env var is defined the server will redirect any request out of `/api` to this page following the url example `backend.com/login?afterAuth=test` -> `frontend.net/login?afterAuth=test`.

If this env var is not defined the server will render the `index.html` file inside `public` folder. Remember that public folder is served as static content under `/`.

And obviously, the server will allow cors for this URL.

#### Example

```env
MY_FRONTEND_DEPLOY="https://username.github.io"
```



### Frontend Redirect

When this (`MY_FRONTEND_DEPLOY_REDIRECT`) var is configures with will overwrite the `MY_FRONTEND_DEPLOY` var when redirects requests out of `/api`.

If this env var is not defined the server will use `MY_FRONTEND_DEPLOY` var or render the `index.html` file inside `public` folder. Remember that public folder is served as static content under `/`.

This var is very usefull when your client is over GH-Pages and yoiu need to set cors over `https://username.github.io` but you need redirect requests to `https://username.github.io/repo/`.

#### Example

```env
MY_FRONTEND_DEPLOY_REDIRECT="https://username.github.io/repo/"
```



## Full example

```env
PORT=5050
JWT_SECRET="hciojsdjcjdkscsnkjnkjdsjlvmlmvkldklckjposdjiwj94ui"
JWT_EXPIRE=8640000
MONGODB_URI="mongodb+srv://<user>:....mongodb.net/<dbname>?retryWrites=true&w=majority"
BCRYPT_SALTROUND=10
MY_FRONTEND_DEPLOY="https://username.github.io"
MY_FRONTEND_DEPLOY_REDIRECT="https://username.github.io/repo/"
```