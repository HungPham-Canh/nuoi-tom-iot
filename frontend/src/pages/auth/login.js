import React, { useState } from "react";
import "../../styles/Login.css";
import {SERVER} from '../../config/server'

const LoginForm = ({ setLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // const form = e.target
    // // console.log(form)
    // const formData = new FormData(form)


    // console.log(formData)

    fetch(`${SERVER}/user/signin?email=${username}&password=${password}`)
    .then((response) => response.json())
    .then(data => {
      if(data.msg === "Login success") {
        localStorage.setItem("isLogin", true);
        localStorage.setItem("username", data.account["username"]);
        setLogin(true);
      }
      else setError(data.msg);
    })
    .catch((error) => setError("Cannot login" + error));
  };
  return (
    <div className="container mt-5 pt-5">
      <form id="login" onSubmit={handleSubmit}>
        <div className="logo">
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Bach-Khoa-HCMUT.png"
            alt="logo"
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit">Đăng nhập</button>
        {/* <div className="form-input">
          <p>Tài khoản</p>
          <p>Username: admin</p>
          <p>Password: admin</p>
        </div> */}
      </form>
    </div>
    
  );
};

export default LoginForm;
