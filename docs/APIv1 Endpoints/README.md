# API v1 - Endpoints

The are all the endpoints for the APIv1.

### Table of content

- [**User**](./User.md)
  - [Create new user - POST `/api/v1/user/signup`](./User.md#post-apiv1usersignup)
  - [Login with credentials - POST `/api/v1/user/login`](./User.md#post-apiv1userlogin)
  - [Join in new class - POST `/api/v1/user/join`](./User.md#post-apiv1userjoin)
  - [Leave a registered class - POST `/api/v1/user/leave`](./User.md#post-apiv1userleave)
  - [Get all info about user - GET `/api/v1/user/info`](./User.md#get-apiv1userinfo)
  - [Get just some info about user - GET `/api/v1/user/info/:keys`](./User.md#get-apiv1userinfokeys)
  - [Update info of user - POST `/api/v1/user/update`](./User.md#post-apiv1userupdate)
  - [Delete your user - DELETE `/api/v1/user/delete`](./User.md#delete-apiv1userdelete)

- [**Course**](./Course.md)
  - [Create new course - POST `/api/v1/course/new`](./Course.md#post-apiv1coursenew)
  - [Delete a course - DELETE `/api/v1/course/delete/:classcode`](./Course.md#delete-apiv1coursedeleteclasscode)
  - [Change password of a course - POST `/api/v1/course/passwordChange`](./Course.md#post-apiv1coursepasswordchange)
  - [Get tasks ID of a course - GET `/api/v1/course/tasks/:classcode`](./Course.md#get-apiv1coursetasksclasscode)
  - [Get schedule ID of a course - GET `/api/v1/course/schedule/:classcode`](./Course.md#get-apiv1coursescheduleclasscode)
  - [Get subjects ID of a course - GET `/api/v1/course/subjects/:classcode`](./Course.md#get-apiv1coursesubjectsclasscode)