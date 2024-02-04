# API v1 - Subject Endpoints

The are all the subject endpoints for the APIv1. You can go back [here](./README.md).

### Table of content

- **Subject**
  - [Create new subject - POST `/api/v1/subject/new`](#post-apiv1subjectnew)
  - [Update data of subject - POST `/api/v1/subject/update`](#post-apiv1subjectupdate)
  - [Delete existing subject - DELETE `/api/v1/subject/delete/:subjectId`](#delete-apiv1subjectdeletesubjectid)
  - [Get data of subject - GET `/api/v1/subject/get/:subjectId`](#get-apiv1subjectgetsubjectid)



## POST `/api/v1/subject/new`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Create a new subject. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/subject/new </td>
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
  "course": courseId, //send it as string
  "teacher": String,
  "subjectName": String,
  "teacherEmail": String,
  "links": [String] // Optional
}
```    
</td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Created <br> 
      <b>Summary:</b> The ObjectId of the created subject as plain text (without json).<br>
      <b>Content:</b> <code>&lt;subjectId&gt;</code>
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
  "course": "devcourseid632r894320", //send it as string
  "teacher": "Jonh Doe",
  "subjectName": "Software Development I",
  "teacherEmail": "jonh.doe@fakemail.com",
  "links": ["https://test.com", "http://example.com", "ftp://yes.youcandoit.com"] // Optional
};

// JS Fetch
const response = await fetch("/api/v1/subject/new", {
  method: "POST", headers, 
  body: JSON.stringify(requestBody)
});

// JS Axios
const response = await axios.post("/api/v1/subject/new", requestBody, { headers });
```



## POST `/api/v1/subject/update`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Update data of subject. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/subject/update </td>
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
      <b>Summary:</b> The data that you send here will overwrite the existing one in the task, the only one that isn't optional is the <code>subjectId</code> field.<br>

```JS
{
  "subjectId": subjectId // _id of task, send it as String
  "teacher": String,
  "subjectName": String,
  "teacherEmail": String,
  "links": [String] // This will overwrite the existing array
}
```    
</td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 204 No Content <br><!-- 
      <b>Content:</b> <code>{ "username": &lt;username&gt;, token: &lt;jwt&gt; }</code> -->
    </td>
  </tr>

 <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You don't have admin access to this course, or the subject doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "subjectId invalid, check your access to the course." }</code>
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
  "subjectId": "devcourseid632r894320", //send it as string
  "teacherEmail": "jonh.doe@fakemail.com",
  "links": ["https://test.com"] // The subject now only has 1 link, the other ones was overwrited
};

// JS Fetch
const response = await fetch("/api/v1/subject/update", {
  method: "POST", headers, 
  body: JSON.stringify(requestBody)
});

// JS Axios
const response = await axios.post("/api/v1/subject/update", requestBody, { headers });
```



## DELETE `/api/v1/subject/delete/:subjectId`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Delete a subject. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/subject/delete/:subjectId </td>
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
      <b>Summary:</b> You don't have admin access to this course, or the subject doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "subjectId invalid, check your access to the course." }</code>
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
const response = await fetch(`/api/v1/subject/delete/${subjectId}`, { method: "DELETE", headers });

// JS Axios
const response = await axios.delete(`/api/v1/subject/delete/${subjectId}`, { headers });
```



## GET `/api/v1/subject/get/:subjectId`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get data of subject. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/subject/get/:subjectId </td>
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
  "_id": subjectId, // String
  "course": courseId, // String
  "teacher": String,
  "subjectName": String,
  "teacherEmail": String,
  "links": [String] // Optional
}
```    
      
  </td>
  </tr>

 <tr>
    <td rowspan="3"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You don't have access to this course, or the subject doesn't exists. <br>
      <b>Content:</b> <code>{ "error": "subjectId invalid, check your access to the course." }</code>
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
const response = await fetch(`/api/v1/subject/get/${subjectId}`, { headers });

// JS Axios
const response = await axios.post(`/api/v1/subject/get/${subjectId}`, { headers });
```