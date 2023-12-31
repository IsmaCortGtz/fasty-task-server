# API v1 - Class Endpoints

The are all the class endpoints for the APIv1. You can go back [here](./README.md).

### Table of content

- **Class**
  - [Create new class - POST `/api/v1/class/new`](#post-apiv1classnew)



## POST `/api/v1/class/new`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Create a new class. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/class/new </td>
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
      <code>{ "classCode": &lt;classCode&gt;,  "password": &lt;password&gt; }</code>
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
      <b>Summary:</b> The given class already exists. <br>
      <b>Content:</b> <code>{ "error": "classCode already exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give an classCode in the body request. <br>
      <b>Content:</b> <code>{ "error": "classCode needed" }</code>
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
const response = await fetch("/api/v1/class/new", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers
});


// JS Axios
const response = await axios.post("/api/v1/class/new", requestBody, { headers });
```