# API v1 - Course Endpoints

The are all the course endpoints for the APIv1. You can go back [here](./README.md).

### Table of content

- **Course**
  - [Create new course - POST `/api/v1/course/new`](#post-apiv1coursenew)
  - [Delete a course - DELETE `/api/v1/course/delete/:classcode`](#delete-apiv1coursedeleteclasscode)
  - [Change password of a course - POST `/api/v1/course/passwordChange`](#post-apiv1coursepasswordchange)
  - [Get tasks ID of a course - GET `/api/v1/course/tasks/:classcode`](#get-apiv1coursetasksclasscode)
  - [Get schedule ID of a course - GET `/api/v1/course/schedule/:classcode`](#get-apiv1coursescheduleclasscode)
  - [Get subjects ID of a course - GET `/api/v1/course/subjects/:classcode`](#get-apiv1coursesubjectsclasscode)



## POST `/api/v1/course/new`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Create a new course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/course/new </td>
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
      The password will be needed just for new admin users. <br>
      <code>{ "classcode": &lt;classcode&gt;,  "password": &lt;password&gt; }</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Created <br>
    </td>
  </tr>

  <tr>
    <td rowspan="6"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> The given course already exists. <br>
      <b>Content:</b> <code>{ "error": "classcode already exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give an classcode in the body request. <br>
      <b>Content:</b> <code>{ "error": "classcode needed" }</code>
  </td></tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give a password in the body request. <br>
      <b>Content:</b> <code>{ "error": "password needed" }</code>
  </td></tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request
      <span>

  **Summary:** The password doesn't meet the requirements, you can see them [here](../Password%20requeriments.md).

  </span>
      <b>Content:</b> <code>{ "error": "password doesn't meet the requirements" }</code>
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
> If you wanna try it out out you need to run the server in your machine and add http://localhost:\<PORT\> before the API URL, like this: http://localhost:\<PORT\>/api/v1/... 

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const requestBody = { classCode: "String", password: "String" };
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch("/api/v1/course/new", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers
});

// JS Axios
const response = await axios.post("/api/v1/course/new", requestBody, { headers });
```



## DELETE `/api/v1/course/delete/:classcode`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Delete a course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/course/delete/:classcode </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> DELETE </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Content-Type: application/json</code> <br>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
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
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You don't have admin acces for this course. <br>
      <b>Content:</b> <code>{ "error": "admins access needed" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request
      <span>

  **Summary:** The password doesn't meet the requirements, you can see them [here](../Password%20requeriments.md).

  </span>
      <b>Content:</b> <code>{ "error": "password doesn't meet the requirements" }</code>
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
> If you wanna try it out out you need to run the server in your machine and add http://localhost:\<PORT\> before the API URL, like this: http://localhost:\<PORT\>/api/v1/... 

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch("/api/v1/course/delete/example", { method: "DELETE", headers });

// JS Axios
const response = await axios.delete("/api/v1/course/delete/example", { headers });
```



## POST `/api/v1/course/passwordchange`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Change password of a course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/course/passwordchange </td>
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
      You need to send the three following fields. <br>
      <code>{ "classcode": &lt;classcode&gt;,  "oldOassword": &lt;password&gt;,  "newOassword": &lt;password&gt; }</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 204 No Content <br>
    </td>
  </tr>

  <tr>
    <td rowspan="6"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 404 Not Found <br>
      <b>Summary:</b> The given course or oldPassword don't exist. <br>
      <b>Content:</b> <code>{ "error": "classcode or password don't exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give a classcode in the body request. <br>
      <b>Content:</b> <code>{ "error": "classcode needed" }</code>
  </td></tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give a newPassword or oldPassword in the body request. <br>
      <b>Content:</b> <code>{ "error": "newPassword and oldPassword needed" }</code>
  </td></tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request
      <span>

  **Summary:** The newPassword doesn't meet the requirements, you can see them [here](../Password%20requeriments.md).

  </span>
      <b>Content:</b> <code>{ "error": "newPassword doesn't meet the requirements" }</code>
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
> If you wanna try it out out you need to run the server in your machine and add http://localhost:\<PORT\> before the API URL, like this: http://localhost:\<PORT\>/api/v1/... 

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const requestBody = { classCode: "String", oldPassword: "String", newPassword: "String" };
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch("/api/v1/course/passwordchange", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers
});

// JS Axios
const response = await axios.post("/api/v1/course/passwordchange", requestBody, { headers });
```



## GET `/api/v1/course/tasks/:classcode`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get tasks IDs for a course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/course/tasks/:classcode </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> GET </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Content-Type: application/json</code> <br>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>
      <b>Summary:</b> The response will include an array with every task ID of the course. <br>
      <b>Content:</b> <code>[ &lt;taskId&gt;, &lt;taskId&gt; ]</code>
    </td>
  </tr>

  <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 404 Not Found <br>
      <b>Summary:</b> The given course doesn't exist. <br>
      <b>Content:</b> <code>{ "error": "classcode don't exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You don't have access for this course. <br>
      <b>Content:</b> <code>{ "error": "Course access denied" }</code>
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
> If you wanna try it out out you need to run the server in your machine and add http://localhost:\<PORT\> before the API URL, like this: http://localhost:\<PORT\>/api/v1/... 

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch("/api/v1/course/tasks/example", { headers });

// JS Axios
const response = await axios.get("/api/v1/course/tasks/example", { headers });
```



## GET `/api/v1/course/schedule/:classcode`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get sessions IDs for a course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/course/schedule/:classcode </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> GET </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Content-Type: application/json</code> <br>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>
      <b>Summary:</b> The response will include a JSON with sessions Id of every day. <br>
      <b>Content:</b> <code>{ monday: [sessionId, sessionId], tuesday:[sessionId, sessionId], ... }</code>
    </td>
  </tr>

  <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 404 Not Found <br>
      <b>Summary:</b> The given course doesn't exist. <br>
      <b>Content:</b> <code>{ "error": "classcode don't exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You don't have access for this course. <br>
      <b>Content:</b> <code>{ "error": "Course access denied" }</code>
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
> If you wanna try it out out you need to run the server in your machine and add http://localhost:\<PORT\> before the API URL, like this: http://localhost:\<PORT\>/api/v1/... 

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch("/api/v1/course/schedule/example", { headers });

// JS Axios
const response = await axios.get("/api/v1/course/schedule/example", { headers });
```



## GET `/api/v1/course/subjects/:classcode`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get subjects IDs for a course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/course/subjects/:classcode </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> GET </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Content-Type: application/json</code> <br>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>
      <b>Summary:</b> The response will include an array with every subject ID of the course. <br>
      <b>Content:</b> <code>[ &lt;subjectId&gt;, &lt;subjectId&gt; ]</code>
    </td>
  </tr>

  <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 404 Not Found <br>
      <b>Summary:</b> The given course doesn't exist. <br>
      <b>Content:</b> <code>{ "error": "classcode don't exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You don't have access for this course. <br>
      <b>Content:</b> <code>{ "error": "Course access denied" }</code>
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
> If you wanna try it out out you need to run the server in your machine and add http://localhost:\<PORT\> before the API URL, like this: http://localhost:\<PORT\>/api/v1/... 

> [!NOTE]  
> Keep in mind the CORS policy if you wanna use it at other page.

```JS
// Request data
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` };

// JS Fetch
const response = await fetch("/api/v1/course/subjects/example", { headers });

// JS Axios
const response = await axios.get("/api/v1/course/subjects/example", { headers });
```