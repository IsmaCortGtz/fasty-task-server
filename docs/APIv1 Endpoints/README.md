# API v1 - Endpoints

The are all the endpoints for the APIv1. You can go back [here](../README.md).

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

- [**Subject**](./Subject.md)
  - [Create new subject - POST `/api/v1/subject/new`](./Subject.md#post-apiv1subjectnew)
  - [Update data of subject - POST `/api/v1/subject/update`](./Subject.md#post-apiv1subjectupdate)
  - [Delete existing subject - DELETE `/api/v1/subject/delete/:subjectId`](./Subject.md#delete-apiv1subjectdeletesubjectid)
  - [Get data of subject - GET `/api/v1/subject/get/:subjectId`](./Subject.md#get-apiv1subjectgetsubjectid)

- [**Task**](./Task.md)
  - [Create a new task - POST `/api/v1/task/new`](./Task.md#post-apiv1tasknew)
  - [Update data of task - POST `/api/v1/task/update`](./Task.md#post-apiv1taskupdate)
  - [Delete existing task - DELETE `/api/v1/task/delete/:taskId`](./Task.md#delete-apiv1taskdeletetaskid)
  - [Get data of task - GET `/api/v1/task/get/:taskId`](./Task.md#get-apiv1taskgettaskid)

- [**Session**](./Session.md)
  - [Create a new session - POST `/api/v1/session/new`](./Session.md#post-apiv1sessionnew)
  - [Update data of session - POST `/api/v1/session/update`](./Session.md#post-apiv1sessionupdate)
  - [Delete existing session - DELETE `/api/v1/session/delete/:sessionId`](./Session.md#delete-apiv1sessiondeletesessionid)
  - [Get data of session - GET `/api/v1/task/session/:sessionId`](./Session.md#get-apiv1sessiongetsessionid)