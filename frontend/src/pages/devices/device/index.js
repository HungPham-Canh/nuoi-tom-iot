import React, { useEffect, useState } from 'react';
import Switch from "react-switch";
import { SERVER, ADA_SERVER } from '../../../config/server';
import axios from "axios";
import getData from '../../../utils/getData';

function Device({ e, pondNo }) {
    const [isOn, setIsOn] = useState(false);
    const {type, icon, name} = e;
    // const device = ["light", "pump", "temp", "fan"];
    console.log(type)

    useEffect(() => {
        setInterval(() => {
            getData(`${ADA_SERVER}/api/v2/CurtisDo/feeds/dadn.se${type}/data`)
                .then(datas => {
                    const currentData = datas[0]
                    setIsOn((currentData.value === "1")? true: false)
                })
                .catch(err => console.log("Error", type))
        }, 3000)
    })

    const handleClick = async () => {
        try {
            await axios.post(`${SERVER}/ponds/1/${type}/toggle`, { pondNo, value: !isOn }).then(res => {
                // console.log(res)
                // if (res.data !== "") {
                //     throw Error(res.data)
                // }

                // res.data is error message
                if (res.data) {
                    throw new Error(res.data)
                }
            });
            setIsOn(!isOn);
        } catch (error) {
            console.error(error);
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