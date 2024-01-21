# API v1 - DB Schemas

The are all the DB Schemas of this API version. You can go back [here](../README.md).

### Table of content

- [Grapgic Diagram](#grapgic-diagram)
- [DB Schemas](#db-schema-user)
  - [User](#db-schema-user)
  - [Class](#db-schema-class)
  - [Subject](#db-schema-subject)
  - [Task](#db-schema-task)
  - [Schedule](#db-schema-schedule)
  - [Session](#db-schema-session)



## Graphic Diagram

You can see a graphic representation [here](.) or in the image below.

![Diagram]()



## DB Schema: `User`

### Important

- The fields `_id` and `__v` are assigned by MongoDB, the client can't change it.
- the `config` field is reserved for the client. Use an unique id for each front-end. `{ "official-web": {...} }`
- Any `ObjectId` with a different key than `_id` represents a relation with other document.

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "username": String,
 "password": String,
 "studentClass": [ObjectID],
 "adminClass": [ObjectID],
 "tasksCompleted": [ObjectID],
 "config": { <client>: {} }, // Any JSON, the server wont validate a format, you can put anything you need.
}
```




## DB Schema: `Class`

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "classCode": String,
 "password": String,
 "shcedule": ObjectID,
 "students": [ObjectID],
 "admins": [ObjectID],
 "subjects": [ObjectID],
 "tasks": [ObjectID],
 "sessions": [ObjectID]
}
```



## DB Schema: `Subject`

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "classID": ObjectID,
 "teacher": String,
 "subject": String
}
```



## DB Schema: `Task`

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "classID": ObjectID,
 "subject": ObjectID,
 "deadline": Date,
 "openDate": Date,
 "taskName": String,
 "taskDescription": String,
 "links": [String]
}
```



## DB Schema: `Schedule`

### Important

- The `startTime` and `endTime` fields only needs the time value, the day part of the date will be ignored.

### Struct

```javascript
{
  "_id": ObjectID, // Assigned by MongoDB
  "classID": ObjectID,
  "monday": [ObjectID],  // Session Id
  "tuesday": [ObjectID],
  "wednesday": [ObjectID],
  "thursday": [ObjectID],
  "friday": [ObjectID],
  "saturday": [ObjectID],
  "sunday": [ObjectID]
}
```



## DB Schema: `Session`

### Important

- The `starts` and `ends` fields only needs the time value, the day part of the date will be ignored.

### Struct

```javascript
{
 "_id": ObjectID, // Assigned by MongoDB
 "classID": ObjectID,
 "subject": ObjectID,
 "starts": Date,
 "ends": Date,
 "classroom": String,
 "links": [String]
}
```