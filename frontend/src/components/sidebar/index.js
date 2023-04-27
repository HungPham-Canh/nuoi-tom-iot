import './style.css'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
// Icons
import homeIcon from './home-icon.svg'
import dashboardIcon from './dashboard-icon.svg'
import devicesIcon from './devices-icon.svg'
import settingsIcon from './settings-icon.svg'
import dataIcon from './data-icon.svg'
import React from 'react';
function Sidebar() {
    return (
        <>
            <Nav className="h-100 flex-column text-white text-center justify-content-center " defaultActiveKey="/dashboard">
                <Nav.Item>
                    <img src={homeIcon} alt="home" />
                    <h6 className="fw-bold"><Link to="/">SMART HOME</Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={dashboardIcon} alt="dashboard" />
                    <h6><Link to="/dashboard">Dashboard</Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={devicesIcon} alt="devices" />
                    <h6><Link as="Link" to="/devices">Devices</Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={settingsIcon} alt="settings" />
                    <h6><Link as="Link" to="/settings">Settings</Link></h6>
                </Nav.Item>
                <Nav.Item>
                    <img src={dataIcon} alt="data" />
                    <h6><Link as="Link" to="/data">Data</Link></h6>
                </Nav.Item>
            </Nav >
        </>
    );
}

export default Sidebar;