import './App.css'
import { Route, Routes } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Sidebar from './components/sidebar'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Devices from './pages/devices'
import Settings from './pages/settings'
import Data from './pages/data'

function App() {
  return (
    <Container fluid className="px-0">
      <Row className="min-vh-100">
        <Col lg="1">
          <Sidebar />
        </Col>
        <Col className="d-flex flex-column">
          <Row>
            <h1>Header</h1>
          </Row>
          <Row className="flex-grow-1">
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
              <h1>Notifications</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App
