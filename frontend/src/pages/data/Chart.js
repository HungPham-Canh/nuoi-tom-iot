import { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './data.css'

export default function Chart() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/ponds/1/temps')
            .then(res => res.json())
            .then(temps => {console.log(temps)})
    }, [data])

    return (
        <div className='time-temp'>
        
        </div>
    )
}
