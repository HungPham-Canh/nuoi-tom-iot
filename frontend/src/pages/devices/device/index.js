import React, { useState } from 'react';
import Switch from "react-switch";
import { SERVER } from '../../../config/server';
import axios from "axios";

function Device({ e, pondNo }) {
    const [isOn, setIsOn] = useState(false);
    const { icon, name, id } = e;
    const device = ["light", "pump", "temp", "fan"];

    const handleClick = async () => {
        try {
            await axios.post(`${SERVER}/ponds/toggle/${device[id]}`, { pondNo, value: !isOn });
            setIsOn(!isOn);
        } catch (error) {
            console.log(error);
        }
    };

    const getClass = () => {
        const baseClsName = "device rounded-4 mb-5 w-100-sm ";
        let subClsName = null;

        switch (isOn) {
            case true:
                subClsName = "on";
                break;
            default:
                subClsName = "off";
        }

        return baseClsName + subClsName;
    }

    const getStateName = () => isOn ? "on" : "off";

    return (
        <div className={getClass()}>
            <div className="h-50 d-flex">
                <div className="w-50 d-flex justify-content-center align-items-center"><span className="fw-bolder fs-2">{getStateName()}</span></div>
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <Switch onChange={handleClick} checked={isOn} />
                </div>
            </div>
            <div className="h-50 d-flex">
                <div className="w-50 d-flex justify-content-center align-items-center">{icon}</div>
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <h5 className="fs-2">{name}</h5>
                </div>
            </div>
        </div >
    );
}

export default Device;