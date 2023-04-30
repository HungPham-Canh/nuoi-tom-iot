import React, { useState } from "react";
import "../styles/Login.css";
const LoginForm = ({ setIsLogIn }) => {
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
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("username", "admin");

      setIsLogIn(true);
    } else {
      setError("Invalid username or password");
    }
  };
  return (
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
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-input">
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <p style={{ color: "red" }}>{error}</p>
      <button type="submit">Đăng nhập</button>
      <div className="form-input">
        <p>Tài khoản</p>
        <p>Username: admin</p>
        <p>Password: admin</p>
      </div>
    </form>
  );
};

export default LoginForm;
