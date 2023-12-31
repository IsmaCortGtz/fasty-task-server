<h1 align="center">
  <img src="./fasty-task-server.svg" alt="Fasty-Task Server" width="200">
  <br>
  Fasty-Task Server
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://github.com/standard/semistandard"><img src="https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg" alt="js-semistandard-style"></a>
  <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3"></a>
</p>

The backend for `fasty-task`. This backend only deploys an `API`, you will need to connect it to a `MongoDB` database using environment vars.

> [!CAUTION]
> The current version isn't stable and doesn't have implemented the full features documented yet.


## Documentation 📕

You can see the documentation in the [_docs_](./docs/) folder. Check the table below too.

### Table of Content

- [Password Requeriments](./docs/Password%20requeriments.md)
- [Environment Vars](./docs/Environment%20Vars.md.md)
- [APIv1 Schemas](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md)
  - [Grapgic Diagram](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#grapgic-diagram)
  - [DB Schemas](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-user)
    - [User](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-user)
    - [Class](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-class)
    - [Subject](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-subject)
    - [Task](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-task)
    - [Schedule](./docs/APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-schedule)
- [APIv1 Endpoints](./docs/APIv1%20Endpoints/README.md)
  - [**User**](./docs/APIv1%20Endpoints/User.md)
    - [Create new user - POST `/api/v1/user/signup`](./docs/APIv1%20Endpoints/User.md#post-apiv1usersignup)
    - [Login with credentials - POST `/api/v1/user/login`](./docs/APIv1%20Endpoints/User.md#post-apiv1userlogin)
    - [Join in new class - POST `/api/v1/user/join`](./docs/APIv1%20Endpoints/User.md#post-apiv1userjoin)
    - [Leave a registered class - POST `/api/v1/user/leave`](./docs/APIv1%20Endpoints/User.md#post-apiv1userleave)
    - [Get all info about user - GET `/api/v1/user/info`](./docs/APIv1%20Endpoints/User.md#get-apiv1userinfo)
    - [Get just some info about user - GET `/api/v1/user/info/:keys`](./docs/APIv1%20Endpoints/User.md#get-apiv1userinfokeys)
    - [Update info of user - POST `/api/v1/user/update`](./docs/APIv1%20Endpoints/User.md#post-apiv1userupdate)
    - [Delete your user - DELETE `/api/v1/user/delete`](./docs/APIv1%20Endpoints/User.md#delete-apiv1userdelete)
  - [**Class**](./docs/APIv1%20Endpoints/Class.md)
    - [Create new class - POST `/api/v1/class/new`](./docs/APIv1%20Endpoints/Class.md#post-apiv1classnew)



## License 🚨

This proyect is under the [**GPL v3**](https://www.gnu.org/licenses/gpl-3.0) license.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)