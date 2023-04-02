import './App.css'
// import { Route, Routes } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Sidebar from './components/sidebar'

function App() {
  return (
    <Container fluid className="px-0 vh-100">
      <Sidebar />
    </Container>
  );
}

export default App
