import React from 'react';
// import Switch from "react-switch";

function Pond({ e }) {
    const { icon, name } = e;

    return (
        <button className="device rounded-4 mb-5 w-100-sm on">
            <div className="h-50 d-flex" >
                <div className="w-50 d-flex justify-content-center align-items-center" >{icon}</div>
                <div className="w-50 d-flex justify-content-center align-items-center">
                    <h5 className="fs-2">{name}</h5>
                </div>
            </div>
        </button >
    );
}

export default Pond;