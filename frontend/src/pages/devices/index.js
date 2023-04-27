import React, { useState } from 'react';
import axios from 'axios';

function Devices() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = async () => {
        setIsOn(!isOn);
        try {
            await axios.post('/api/toggle', { isOn: !isOn });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>
        </div>
    );
}

export default Devices