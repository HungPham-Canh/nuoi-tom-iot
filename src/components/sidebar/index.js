import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Nav from 'react-bootstrap/Nav'
import homeIcon from './home-icon.svg'
import dashboardIcon from './dashboard-icon.svg'
import devicesIcon from './devices-icon.svg'
import settingsIcon from './settings-icon.svg'
import dataIcon from './data-icon.svg'

function Sidebar() {
    return (
        <>
            <Nav className="flex-column text-center justify-content-center" defaultActiveKey="/dashboard">
                <Nav.Item>
                    <img src={homeIcon} alt="home" />
                    <h6 className="fw-bold"><Nav.Link href="/home">SMART HOME</Nav.Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={dashboardIcon} alt="dashboard" />
                    <h6><Nav.Link href="/dashboard">Dashboard</Nav.Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={devicesIcon} alt="devices" />
                    <h6><Nav.Link href="/devices">Devices</Nav.Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={settingsIcon} alt="settings" />
                    <h6><Nav.Link href="/settings">Settings</Nav.Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={dataIcon} alt="data" />
                    <h6><Nav.Link href="/data">Data</Nav.Link></h6>
                </Nav.Item>
            </Nav >
        </>
    );
}

export default Sidebar;