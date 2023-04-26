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
}

export default Data