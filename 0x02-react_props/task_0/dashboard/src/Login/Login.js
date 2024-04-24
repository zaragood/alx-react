/** @format */

import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <label for='email'>Email: </label>
        <input type='tex' id='email' name='email'></input>
        <label for='password'>Password: </label>
        <input type='text' id='password' name='password'></input>
        <button>OK</button>
      </form>
    </>
  );
}

export default Login;