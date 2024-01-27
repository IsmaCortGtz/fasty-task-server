# API v1 - User Endpoints

The are all the user endpoints for the APIv1. You can go back [here](./README.md).

### Table of content

- **User**
  - [Create new user - POST `/api/v1/user/signup`](#post-apiv1usersignup)
  - [Login with credentials - POST `/api/v1/user/login`](#post-apiv1userlogin)
  - [Join in new class - POST `/api/v1/user/join`](#post-apiv1userjoin)
  - [Leave a registered class - POST `/api/v1/user/leave`](#post-apiv1userleave)
  - [Get all info about user - GET `/api/v1/user/info`](#get-apiv1userinfo)
  - [Get just some info about user - GET `/api/v1/user/info/:keys`](#get-apiv1userinfokeys)
  - [Update info of user - POST `/api/v1/user/update`](#post-apiv1userupdate)
  - [Delete your user - DELETE `/api/v1/user/delete`](#delete-apiv1userdelete)



## POST `/api/v1/user/signup`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Create a new user. </td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/signup </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> POST </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td><code>Content-Type: application/json</code></td>
  </tr>

  <tr>
    <td><b> Request <br> Body </b></td>
    <td><code>{ "username": &lt;username&gt;,  "password": &lt;password&gt; }</code></td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Created <br>
      <b>Content:</b> <code>{ "username": &lt;username&gt;, token: &lt;jwt&gt; }</code>
    </td>
  </tr>

  <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> The given username already exists. <br>
      <b>Content:</b> <code>{ "error": "Username already exists" }</code>
    </td>
  </tr>

  <tr><td>
      <b>Code:</b> 400 Bad Request <br>
      <b>Summary:</b> You didn't give an username in the body request. <br>
      <b>Content:</b> <code>{ "error": "username needed" }</code>
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
const requestBody = { username: "String", password: "String" };


// JS Fetch
const response = await fetch("/api/v1/user/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
});


// JS Axios
const response = await axios.post("/api/v1/user/signup", requestBody, { 
  headers: { "Content-Type": "application/json" } 
});
```



## POST `/api/v1/user/login`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Login with credentials. </td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/login </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> POST </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td><code>Content-Type: application/json</code></td>
  </tr>

  <tr>
    <td><b> Request <br> Body </b></td>
    <td><code>{ "username": &lt;username&gt;,  "password": &lt;password&gt; }</code></td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>
      <b>Content:</b> <code>{ "username": &lt;username&gt;, token: &lt;jwt&gt; }</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 401 Unauthorized <br>
      <b>Summary:</b> You didn't give the correct credentials in the body request. <br>
      <b>Content:</b> <code>{ "error": "Invalid username or password" }</code>
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
const requestBody = { username: "String", password: "String" };


// JS Fetch
const response = await fetch("/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
});


// JS Axios
const response = await axios.post("/api/v1/user/login", requestBody, { 
  headers: { "Content-Type": "application/json" } 
});
```



## POST `/api/v1/user/join`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Join to a new course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/join </td>
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
    <td rowspan="2"><b> Request <br> Body </b></td>
    <td>
      For normal acces to the course use this. <br>
      <code>{ "classcode": &lt;classcode&gt; }</code>
    </td>
  </tr>

  <tr>
    <td>
      For admin acces to the course use this. If you have normal acces to the course you can send this requet with the course password and succesfully get admin acces. <br>
      <code>{ "classcode": &lt;classcode&gt;, password: &lt;classPassword&gt; }</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      On working...
    </td>
  </tr>

  <tr>
    <td rowspan="3"><b> Response <br> on error </b></td>
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

  <tr>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You are already registered in the course with same acces. <br>
      <b>Content:</b> <code>{ "error": "already registered" }</code>
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
const requestBody = { classCode: "String" };
const adminRequestBody = { classCode: "String", password: "String" };


// JS Fetch
const response = await fetch("/api/v1/user/join", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` },
    body: JSON.stringify(requestBody)
});


// JS Axios
const response = await axios.post("/api/v1/user/join", requestBody, { 
  headers: { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` } 
});
```



## POST `/api/v1/user/leave`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Leave of a registered course. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/leave </td>
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
      The classcode of the course you want to leave. <br>
      <code>{ "classcode": &lt;classcode&gt; }</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      On working...
    </td>
  </tr>

  <tr>
    <td rowspan="3"><b> Response <br> on error </b></td>
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

  <tr>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> You aren't in this course. <br>
      <b>Content:</b> <code>{ "error": "not registered" }</code>
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
const requestBody = { classCode: "String" };
const adminRequestBody = { classCode: "String", password: "String" };


// JS Fetch
const response = await fetch("/api/v1/user/join", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` },
    body: JSON.stringify(requestBody)
});


// JS Axios
const response = await axios.post("/api/v1/user/join", requestBody, { 
  headers: { "Content-Type": "application/json", "Authorization": `Bearer ${JWT_TOKEN}` } 
});
```



## GET `/api/v1/user/info`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get all of the user information <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/info </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> GET </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>
      <b>Content:</b>
      <pre lang="json"><code>{ 
  "username": &lt;username&gt;, 
  "classes": [&lt;classCode&gt;, &lt;classCode&gt;], 
  "config": { &lt;client&gt;: {...}, &lt;client&gt;: {...} }, 
  "tasksCompleted": [&lt;taskID&gt;, &lt;taskID&gt;] 
}</code></pre>
    </td>
  </tr>

  <tr>
    <td rowspan="2"><b> Response <br> on error </b></td>
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
// JS Fetch
const response = await fetch("/api/v1/user/info", {
    headers: { "Authorization": `Bearer ${JWT_TOKEN}` }
});


// JS Axios
const response = await axios.get("/api/v1/user/info", { 
  headers: { "Authorization": `Bearer ${JWT_TOKEN}` } 
});
```



## GET `/api/v1/user/info/:keys`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Get just some information about the user, with the keys needed separeted by <code>,</code>. With <code>config</code> you can add a <code>.</code> to get a specific client: <code>config.official-web</code>. If you don't give a client the server will send the whole available. <i>(Authenticated user needed)</i></td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/info/:keys </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> GET </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td>
      <code>Authorization: Bearer &lt;JWT&gt;</code>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 200 OK <br>
      <b>Content:</b> Depending what do you request. <i>(See usage example for more information).</i>. If a key isn't available the server won't send the key.
      <pre lang="json"><code>{ 
  "username": &lt;username&gt;
}</code></pre>
<pre lang="json"><code>{
  "config": {...}, 
  "tasksCompleted": [&lt;taskID&gt;, &lt;taskID&gt;] 
}</code></pre>
    </td>
  </tr>

  <tr>
    <td rowspan="2"><b> Response <br> on error </b></td>
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
const availableKeys = [
  "username",
  "classes",
  "config",
  "tasksCompleted"
]

// JS Fetch to get username
const response = await fetch("/api/v1/user/info/config", {
    headers: { "Authorization": `Bearer ${JWT_TOKEN}` }
});
/*
{
  "username": <username>
}
*/

// JS Fetch to get username and config
const response = await fetch("/api/v1/user/info/username,config.official-web", {
    headers: { "Authorization": `Bearer ${JWT_TOKEN}` }
});
/*
{
  "username": <username>,
  "config": {...}
}
*/

// JS Fetch to get the whole information (same effect than "/api/v1/user/info")
const response = await fetch("/api/v1/user/info/username,classes,config,tasksCompleted", {
    headers: { "Authorization": `Bearer ${JWT_TOKEN}` }
});
/*
{ 
  "username": <username>, 
  "classes": [<classCode>, <classCode>], 
  "config": {...}, 
  "tasksCompleted": [<taskID>, <taskID>] 
}
*/
```



## POST `/api/v1/user/update`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Update some user information. </td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/update </td>
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
      Send a JSON with the keys about anything you wanna update. <br>
      Available keys are: <code>username</code>, <code>config</code>, and <code>newPassword</code>, <code>oldPassword</code>. <br><br>
      <b>Note:</b> You only need to send the new values. But, in config you will need to send the complete object inside the client because it will overwrite anything here. You can delete the config object sending <code>null</code>. The class and tasks keys can be updated wiht speifics endpoints.  <br><br>
      <b>Note:</b> If you wanna change your password you need to send <code>newPassword</code>, <code>oldPassword</code>. And them need to be different. <br><br>
      <pre lang="json"><code>{ 
  "username": &lt;username&gt;, 
  "config": { &lt;client&gt;: {...} }, 
  "newPassword": &lt;newPassword&gt;, 
  "oldPassword": &lt;oldPassword&gt;, 
}</code></pre>
    </td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Completed <br>
    </td>
  </tr>

  <tr>
    <td rowspan="2"><b> Response <br> on error </b></td>
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
const requestBody = { 
  username: "String",
  newPassword: "String",
  oldPassword: "String2",
};


// JS Fetch
const response = await fetch("/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody)
});


// JS Axios
const response = await axios.post("/api/v1/user/login", requestBody, { 
  headers: { "Content-Type": "application/json" } 
});
```



## DELETE `/api/v1/user/delete`

<table><thead></thead>

  <tr>
    <td><b> Summary </b></td>
    <td> Delete user permanently. </td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> /api/v1/user/delete </td>
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
    <td><b> Note </b></td>
    <td>If the <code>JWT</code> of the <code>Authorization</code> header is valid the server will delete the user without any other confirmation, be sure about a confirmation in your client.</td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Completed <br>
    </td>
  </tr>

  <tr>
    <td rowspan="2"><b> Response <br> on error </b></td>
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
// JS Fetch
const response = await fetch("/api/v1/user/delete", {
    method: "DELETE",
    headers: { "Authorization": `Bearer ${JWT_TOKEN}` }
});


// JS Axios
const response = await axios.delete("/api/v1/user/delete", { 
  headers: { "Authorization": `Bearer ${JWT_TOKEN}` } 
});
```