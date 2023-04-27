<<<<<<< HEAD
import './style.css';
import DateStartIcon from './date-start.svg'
import DateEndIcon from './date-end.svg'
import IntervalIcon from './interval.svg'
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const data = [
    {
        time: "12AM",
        hm: 20
    },
    {
        time: "1AM",
        hm: 30
    },
    {
        time: "2AM",
        hm: 10
    },
    {
        time: "3AM",
        hm: 45
    },
    {
        time: "4AM",
        hm: 60
    },
    {
        time: "5AM",
        hm: 55
    },
    {
        time: "6AM",
        hm: 85
    },
    {
        time: "7AM",
        hm: 30
    },
    {
        time: "8AM",
        hm: 85
    },
    {
        time: "9AM",
        hm: 30
    }, {
        time: "10AM",
        hm: 10
    },
    {
        time: "11AM",
        hm: 45
    },
    {
        time: "12PM",
        hm: 60
    },
    {
        time: "1PM",
        hm: 55
    },
    {
        time: "2PM",
        hm: 85
    },
    {
        time: "3PM",
        hm: 30
    },
    {
        time: "4PM",
        hm: 85
    },
    {
        time: "5PM",
        hm: 30
    },
    {
        time: "6PM",
        hm: 60
    },
    {
        time: "7PM",
        hm: 55
    },
    {
        time: "8PM",
        hm: 85
    },
    {
        time: "9PM",
        hm: 30
    },
    {
        time: "10PM",
        hm: 85
    },
    {
        time: "11PM",
        hm: 30
    },
];

function Data() {
    return (
        <>
            <ResponsiveContainer height="70%">
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 20, bottom: 10, left: 10 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="hm"
                        stroke="#1F78B4"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer >
            <div class="d-flex" id="filter-group">
                <div><h6>Bộ lọc</h6></div>
                <div class="input-group">
                    <div class="input-group-text"><img src={DateStartIcon} alt="Date start" /></div>
                    {/* <span>Ngày bắt đầu</span> */}
                    <input type="date" name="startDate" id="startDate" />
                </div>
                <div class="d-flex align-items-start">
                    <img src={DateEndIcon} alt="Date end" />
                    <span>Ngày kết thúc</span>
                </div>
                <div class="d-flex align-items-start">
                    <img src={IntervalIcon} alt="Date end" />
                    <span>Đơn vị thời gian</span>
                </div>
                <button class="btn">Áp dụng</button>
            </div>
        </>
    );
=======
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import '../../styles/data.css'
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

const renderLineChart = (
    <div className='time-temp'>
        <h5>Daily temp</h5>
        <div class="mb-4"></div>
        <ResponsiveContainer style={{marginLeft: 0}} width="100%" aspect={3}>
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="1" horizontal="" vertical="true"/>
                <XAxis dataKey="name" tick={{fill: "black"}}/>
                <YAxis tick={{fill: "black"}}/>
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
                <Line  dataKey="uv" stroke="#82ca9d" activeDot={{r: 6}}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
 
);

function Data() {
    return (
        <div>
            <div className='current-temp'>
                <h5>Current temp</h5>
                <h1>36 °C</h1>
            </div>
            {renderLineChart}
        </div>
        )
>>>>>>> e969f11e956bb85aa81db9854a3d11960451427f
}

export default Data