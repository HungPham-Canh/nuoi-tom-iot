// import React, { useState } from 'react';

// function RegisterForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target
//     const formData = new FormData(form)
//     // Handle form submission logic here, such as sending data to a server
//     fetch(`${SERVER}/user/signup`, {
//       method: 'POST',
//       body: formData
//     })
//     .then((response) => response.json())
//     .then(data => {
//       if(data.msg === "Register success") {
//         // localStorage.setItem("isLogin", true);
//         // localStorage.setItem("username", data.account["username"]);
//         setIsLogIn(true);
//       }
//       else setError(data.msg);
//     })
//     .catch((error) => setError("Cannot login" + error));
//   };

//   return (
//     <div className="container mt-5 pt-5">
//       <form id="login" onSubmit={handleSubmit}>
//         <div className="logo">
//           <img
//             src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Bach-Khoa-HCMUT.png"
//             alt="logo"
//           />
//         </div>
//         <div className="form-input">
//           <input
//             type="text"
//             id="username"
//             placeholder="Username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div className="form-input">
//           <input
//             type="text"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className="form-input">
//           <input
//             type="password"
//             placeholder="Nhập mật khẩu"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <p style={{ color: "red" }}>{error}</p>
//         <button type="submit">Đăng ký</button>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;
