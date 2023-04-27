import React, { useState } from 'react';
import Switch from "react-switch";

function Device({ e }) {
    const [isOn, setIsOn] = useState(false);
    const { icon, name } = e;

    const handleClick = async () => {
        setIsOn(!isOn);

        // try {
        //     await axios.post('/api/toggle', { isOn: !isOn });
        // } catch (error) {
        //     console.log(error);
        // }
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