import { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './data.css'
import '../../utils/getData'
import getData from '../../utils/getData';

export default function Chart() {

    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getData("http://localhost:8080/ponds/1/temps")
                .then(temps => {
                    console.log("call api")
                    setData(temps)
                })
        }, 5000)
    })

    return (
        <div className='time-temp'>
            <h5>Tempurature Chart</h5>
            <div className='mb-3'></div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="1" horizontal="" vertical="true"/>
                    <XAxis dataKey="createdAt" tick={false}/>
                    <YAxis tick={{fill: "black"}}/>
                    <Tooltip />
                    {/* <Legend /> */}
                    {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
                    <Line  dataKey="value" stroke="#82ca9d" activeDot={{r: 6}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
