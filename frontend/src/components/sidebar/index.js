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
            <Nav className="h-100 flex-column text-white text-center justify-content-center position-fixed" defaultActiveKey="/dashboard">
                <Nav.Item>
                    <Link to="/">
                        <img src={homeIcon} alt="home" />
                        <h6 className="fw-bold">SMART HOME</h6>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/dashboard">
                        <img src={dashboardIcon} alt="dashboard" />
                        <h6>Dashboard</h6>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link as="Link" to="/devices">
                        <img src={devicesIcon} alt="devices" />
                        <h6>Devices</h6>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link as="Link" to="/settings">
                        <img src={settingsIcon} alt="settings" />
                        <h6>Settings</h6>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link as="Link" to="/data">
                        <img src={dataIcon} alt="data" />
                        <h6>Data</h6>
                    </Link>
                </Nav.Item>
            </Nav >
        </>
    );
}

export default Sidebar;