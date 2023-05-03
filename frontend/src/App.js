import "./App.css";
import { Route, Routes } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Devices from "./pages/devices";
import Settings from "./pages/settings";
import Data from "./pages/data";
// import Signup from "./pages/signup";

import React, { useState } from "react";
import LoginForm from "./pages/auth";
import Notification from "./components/Notification";
import AuthPage from "./pages/auth";

function App() {
  
  const [isLogIn, setIsLogIn] = useState(false);
  localStorage.setItem("isLogin", false);
  if (!isLogIn && !localStorage.getItem("username")) {
    return (
      <Container fluid className="px-0">
        <AuthPage setIsLogIn={setIsLogIn} />
      </Container>
    );
  }
  return (
    <Container fluid className="px-0">
      <Row className="min-vh-100">
        <Col lg="1">
          <Sidebar />
        </Col>
        <Col>
          <Row>
            <Header />
          </Row>
          <Row>
            <Col lg="9">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/devices" element={<Devices />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/data" element={<Data />}></Route>
              </Routes>
            </Col>
            <Col>
              <Notification />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
