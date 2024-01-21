# Documentation 📕

You can see the full documentation of the project. Check the table below.

## Table of Content

- [Password Requeriments](./Password%20requeriments.md)
- [Environment Vars](./Environment%20Vars.md)
- [APIv1 Schemas](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md)
  - [Grapgic Diagram](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#grapgic-diagram)
  - [DB Schemas](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-user)
    - [User](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-user)
    - [Class](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-class)
    - [Subject](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-subject)
    - [Task](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-task)
    - [Schedule](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-schedule)
    - [Session](./APIv1%20DB%20Schemas/APIv1%20DB%20Schemas.md#db-schema-session)
- [APIv1 Endpoints](./APIv1%20Endpoints/README.md)
  - [**User**](./APIv1%20Endpoints/User.md)
    - [Create new user - POST `/api/v1/user/signup`](./APIv1%20Endpoints/User.md#post-apiv1usersignup)
    - [Login with credentials - POST `/api/v1/user/login`](./APIv1%20Endpoints/User.md#post-apiv1userlogin)
    - [Join in new class - POST `/api/v1/user/join`](./APIv1%20Endpoints/User.md#post-apiv1userjoin)
    - [Leave a registered class - POST `/api/v1/user/leave`](./APIv1%20Endpoints/User.md#post-apiv1userleave)
    - [Get all info about user - GET `/api/v1/user/info`](./APIv1%20Endpoints/User.md#get-apiv1userinfo)
    - [Get just some info about user - GET `/api/v1/user/info/:keys`](./APIv1%20Endpoints/User.md#get-apiv1userinfokeys)
    - [Update info of user - POST `/api/v1/user/update`](./APIv1%20Endpoints/User.md#post-apiv1userupdate)
    - [Delete your user - DELETE `/api/v1/user/delete`](./APIv1%20Endpoints/User.md#delete-apiv1userdelete)
  - [**Class**](./APIv1%20Endpoints/Class.md)
    - [Create new class - POST `/api/v1/class/new`](./APIv1%20Endpoints/Class.md#post-apiv1classnew)