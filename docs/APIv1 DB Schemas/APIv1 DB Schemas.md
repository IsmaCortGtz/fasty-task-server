# API v1 - DB Schemas

There are all of the DB Schemas from this API version. You can go back [here](../README.md).

### Table of content

- [Graphic Diagram](#graphic-diagram)
- [DB Schemas](#db-schema-user)
  - [User](#db-schema-user)
  - [Course](#db-schema-course)
  - [Subject](#db-schema-subject)
  - [Task](#db-schema-task)
  - [Session](#db-schema-session)



## Graphic Diagram

You can see a the logical schema of the DB in the image below. 

![Diagram](./APIv1%20DB%20-%20Logical%20Schema.png)



## DB Schema: `User`

### Important

- The fields `_id` and `__v` are assigned by MongoDB, the client can't change it.
- the `config` field is reserved for the client. Use an unique id for each front-end. `{ "official-client": {...} }`
- Any `ObjectId` with a different key than `_id` represents a relation with other document.

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "username": String,
 "password": String,
 "tasksCompleted": [ObjectID],
 "courses": [{ "_id": ObjectID, "isAdmin": Boolean }],
 "config": { <client>: {}, <client>: {}, ... }, // Any JSON, the server wont validate a format, you can put anything you need.
}
```




## DB Schema: `Course`

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "classcode": String,
 "password": String
}
```



## DB Schema: `Subject`

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "course": ObjectID,
 "name": String,
 "teacherName": String,
 "teacherEmail": String,
 "links": [String]
}
```



## DB Schema: `Task`

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "subject": ObjectID,
 "open": Date,
 "close": Date,
 "name": String,
 "description": String,
 "links": [String]
}
```



## DB Schema: `Session`

### Important

- The `starts` and `ends` fields only needs the time value, the day part of the date will be ignored.

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "subject": ObjectID,
 "starts": Date,
 "ends": Date,
 "classroom": String,
 "links": [String]
}
```