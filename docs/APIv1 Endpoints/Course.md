# API v1 - Course Endpoints

The are all the course endpoints for the APIv1. You can go back [here](./README.md).

### Table of content

- **Class**
  - [Create new course - POST `/api/v1/course/new`](#post-apiv1coursenew)
  - [Delete a course - DELETE `/api/v1/course/delete`]()
  - [Change password of a course - POST `/api/v1/course/passwordChange`]()
  - [Get tasks of a course - GET `/api/v1/course/tasks`]()
  - [Get schedule of a course - GET `/api/v1/course/schedule`]()
  - [Get subjects of a course - GET `/api/v1/course/subjects`]()



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