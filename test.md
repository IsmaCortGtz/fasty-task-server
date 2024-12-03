
  - [Create new user - POST `/api/v1/user/signup`](#post-apiv1usersignup)


<details>
<summary>
  <h2>POST <code>/api/v1/user/singup/</code></h2>
</summary>
<table>
  <tr>
    <td><b> Summary </b></td>
    <td> Create a new user. </td>
  </tr>

  <tr>
    <td><b> URL </b></td>
    <td> <code>/api/v1/user/signup/</code> </td>
  </tr>

  <tr>
    <td><b> Method </b></td>
    <td> <code>POST</code>  </td>
  </tr>

  <tr>
    <td><b> Request <br> Headers </b></td>
    <td><code>Content-Type: application/json</code></td>
  </tr>

  <tr>
    <td><b> Request <br> Body </b></td>
    <td><code>{ "username": String,  "password": String }</code></td>
  </tr>

  <tr>
    <td><b> Response <br> on success </b></td>
    <td>
      <b>Code:</b> 201 Created <br>
      <b>Content:</b> <code>{ "username": String, token: String }</code>
    </td>
  </tr>

  <tr>
    <td rowspan="4"><b> Response <br> on error </b></td>
    <td>
      <b>Code:</b> 409 Conflict <br>
      <b>Summary:</b> The given username already exists. You need to use another one. <br>
      <b>Content:</b> <code>{ "messgae": "Username already in use", "name": "UsernameInUse" }</code>
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
      <b>Summary:</b> The password doesn't meet the requirements, you can see them <a href="../Password%20requeriments.md">here</a>.
      <b>Content:</b> <code>{ "error": "password doesn't meet the requirements" }</code>
  </td></tr>

</table>
</details>