# API v1 - Task Endpoints

The are all the tasks endpoints for the APIv1. You can go back [here](./README.md).

### Table of content

- **Task**
  - [Create a new task - POST `/api/v1/task/new`](#post-apiv1tasknew)
  - [Update data of task - POST `/api/v1/task/update`](#post-apiv1taskupdate)
  - [Delete existing task - DELETE `/api/v1/task/delete/:taskId`](#delete-apiv1taskdeletetaskid)
  - [Get data of task - GET `/api/v1/task/get/:taskId`](#get-apiv1taskgettaskid)



## POST `/api/v1/task/new`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Create a new task. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/task/new </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> POST </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Content-Type: application/json</code> <br>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Request <br> Body </b></td>
<td>

```JS
{
 "subject": subjectId, //send it as string
 "course": courseId, //send it as string
 "deadline": Date,
 "openDate": Date,
 "taskName": String,
 "taskDescription": String,
 "links": [String]  // Optional
}
```    
</td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Created <br> 
      <b>Summary:</b> The ObjectId of the created task as plain text (without json).<br>
      <b>Content:</b> <code>&lt;taskId&gt;</code>
    </td>
  </tr>

 <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You don't have admin access to this course, or the course doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "course invalid, check your access" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give the correct params (only links are optional) in the body request. <br>
      <b>Content:</b> <code>{ "error": "params missing or invalid" }</code>
  </td></tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You didn't give the correct credentials in the <code>Authorization</code> header. <br>
      <b>Content:</b> <code>{ "error": "token missing or invalid" }</code>
    </td>
  </tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> Your JWT is expired. <br>
      <b>Content:</b> <code>{ "error": "token expired" }</code>
    </td>
  </tr>

</table>

### Usage Examples

> [!CAUTION]
> This example only will works if you execute the following JS in the browser console at the back-end page.

> [!WARNING]
> If you wanna try it out out you need to run the server in your machine and add [http://localhost:<PORT\>/api/v1/...](#) before the API URL, like this: [http://localhost:<PORT\>/api/v1/...](#)

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };
const requestBody = {
 "subject": "devsubjectid632r894320", //send it as string
 "course": "devcourseid632r894320", //send it as string
 "deadline": new Date(),
 "openDate": new Date(),
 "taskName": "Writing Quiz",
 "taskDescription": "Do a litle history about your life",
 "links": ["https://www.youtube.com"]  // Optional
};

// JS Fetch
const response = await fetch("/api/v1/task/new", {
  method: "POST", headers, 
  body: JSON.stringify(requestBody)
});

// JS Axios
const response = await axios.post("/api/v1/task/new", requestBody, { headers });
```



## POST `/api/v1/task/update`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Update data of task. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/task/update </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> POST </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Content-Type: application/json</code> <br>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Request <br> Body </b></td>
<td>
      <b>Summary:</b> The data that you send here will overwrite the existing one in the task, the only one that isn't optional is the <code>taskId</code> field.<br>

```JS
{
 "taskId": taskId, //send it as string
 "deadline": Date,
 "openDate": Date,
 "taskName": String,
 "taskDescription": String,
 "links": [String]  // Optional
}
```    
</td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 204 No Content <br>
    </td>
  </tr>

 <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You don't have admin access to this course, or the task doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "taskId invalid, check your access to the course." }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give any param to update, or some of them are invalid <br>
      <b>Content:</b> <code>{ "error": "params missing or invalid" }</code>
  </td></tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You didn't give the correct credentials in the <code>Authorization</code> header. <br>
      <b>Content:</b> <code>{ "error": "token missing or invalid" }</code>
    </td>
  </tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> Your JWT is expired. <br>
      <b>Content:</b> <code>{ "error": "token expired" }</code>
    </td>
  </tr>

</table>

### Usage Examples

> [!CAUTION]
> This example only will works if you execute the following JS in the browser console at the back-end page.

> [!WARNING]
> If you wanna try it out out you need to run the server in your machine and add [http://localhost:<PORT\>/api/v1/...](#) before the API URL, like this: [http://localhost:<PORT\>/api/v1/...](#)

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };
const requestBody = {
  "taskId": "devtaskid632r894320", //send it as string
  "taskName": "Final Exam",
  "links": ["https://test.com"] // The subject now only has 1 link, the other ones was overwrited
};

// JS Fetch
const response = await fetch("/api/v1/task/update", {
  method: "POST", headers, 
  body: JSON.stringify(requestBody)
});

// JS Axios
const response = await axios.post("/api/v1/task/update", requestBody, { headers });
```



## DELETE `/api/v1/task/delete/:taskId`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Delete a task. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/task/delete/:taskId </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> DELETE </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td><b>Code:</b> 204 No Content </td>
  </tr>

 <tr>
    <td rowspan="3"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You don't have admin access to this course, or the task doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "taskId invalid, check your access to the course." }</code>
    </td>
  </tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You didn't give the correct credentials in the <code>Authorization</code> header. <br>
      <b>Content:</b> <code>{ "error": "token missing or invalid" }</code>
    </td>
  </tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> Your JWT is expired. <br>
      <b>Content:</b> <code>{ "error": "token expired" }</code>
    </td>
  </tr>

</table>

### Usage Examples

> [!CAUTION]
> This example only will works if you execute the following JS in the browser console at the back-end page.

> [!WARNING]
> If you wanna try it out out you need to run the server in your machine and add [http://localhost:<PORT\>/api/v1/...](#) before the API URL, like this: [http://localhost:<PORT\>/api/v1/...](#)

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch(`/api/v1/task/delete/${taskId}`, { method: "DELETE", headers });

// JS Axios
const response = await axios.delete(`/api/v1/task/delete/${taskId}`, { headers });
```



## GET `/api/v1/task/get/:taskId`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get data of task. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/task/get/:taskId </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> GET </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td><code>Authorization: Bearer &lt;JWT&gt;</code></td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>

```JS
{
 "_id": ObjectID, // Assigned by MongoDB
 "subject": ObjectID,
 "course": ObjectID,
 "deadline": Date,
 "openDate": Date,
 "taskName": String,
 "taskDescription": String,
 "links": [String]
}
```    
      
  </td>
  </tr>

 <tr>
    <td rowspan="3"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You don't have access to this course, or the task doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "taskId invalid, check your access to the course." }</code>
    </td>
  </tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You didn't give the correct credentials in the <code>Authorization</code> header. <br>
      <b>Content:</b> <code>{ "error": "token missing or invalid" }</code>
    </td>
  </tr>

  <tr>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> Your JWT is expired. <br>
      <b>Content:</b> <code>{ "error": "token expired" }</code>
    </td>
  </tr>

</table>

### Usage Examples

> [!CAUTION]
> This example only will works if you execute the following JS in the browser console at the back-end page.

> [!WARNING]
> If you wanna try it out out you need to run the server in your machine and add [http://localhost:<PORT\>/api/v1/...](#) before the API URL, like this: [http://localhost:<PORT\>/api/v1/...](#)

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch(`/api/v1/task/get/${subjectId}`, { headers });

// JS Axios
const response = await axios.post(`/api/v1/task/get/${subjectId}`, { headers });
```