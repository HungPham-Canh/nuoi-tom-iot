import { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './data.css'
import getData from '../../utils/getData';
import {FEED_TEMP, AIO_USERNAME, FEED_DO} from '../../config/mqtt'
import {ADA_SERVER} from '../../config/server'  


// function CustomXAxisTick({ x, y, payload, formatTime }) {
//     console.log(payload)
//     return (
//       <text x={x} y={y} dy={16} fill="grey" textAnchor="middle">
//         {formatTime(payload.value)}
//       </text>
//     );
//   }
  
//   function formatTime(date) {
//     // logic to format the time
//     return `${date.toLocaleTimeString()}`;
//   }
  


export default function Chart(props) {

    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
 
    const isoStartTime = startOfToday.toISOString();
    const isoEndTime = endOfToday.toISOString();
    
    
    const [data, setData] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getData(`${ADA_SERVER}/api/v2/${AIO_USERNAME}/feeds/${(props.type === "temps")? FEED_TEMP : FEED_DO}/data?start_time=${isoStartTime}&end_time=${isoEndTime}`)
                .then(datas => {
                    // console.log("call api")
                    let newDatas = datas.map(data => {
                        const time = new Date(data.created_at)
                        return {...data, created_at: time}
                    })
                    newDatas = newDatas.sort((a, b) => a.created_at - b.created_at)
                    newDatas = newDatas.map(data => {
                        const time = data.created_at.toLocaleTimeString()
                        return {...data, created_at: time}
                    })
                    // console.log(datas)
                    setData(newDatas)
                })
        }, 5000)
    })

    return (
        <div className='time-data'>
            <h5>Daily {(props.type === 'temps')? 'Tempurature' : 'Dissolved oxygen'} History</h5>
            <div className='mb-3'></div>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>
                <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="true"/>
                    {/* <XAxis dataKey="created_at" tick={<CustomXAxisTick formatTime={formatTime}></CustomXAxisTick>}/> */}
                    <XAxis dataKey="created_at" />
                    <YAxis type="number" tick={{fill: "black"}} domain={(props.type === "temps")? [0, 50] : [0, 10]}/>
                    <Tooltip />
                    {/* <Legend /> */}
                    {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
                    <Line  dataKey="value" stroke={(props.type==="temps")? "green" : "blue"} activeDot={{r: 6}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
