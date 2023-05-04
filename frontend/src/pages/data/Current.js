import { useState, useEffect } from "react"
import './data.css'
import getData from '../../utils/getData';
import GaugeChart from 'react-gauge-chart'

function Current(props) {
    const [data, setData] = useState("")

    // console.log(data)

    useEffect(() => {
        setInterval(() => {
            getData(`http://localhost:8080/ponds/1/${props.type}`)
                .then(latest_data => {
                    setData(latest_data.value)
                })
        }, 5000)
    }, [data])

    return (
        <div className='current-data'>
            <h5>{(props.type === "temp") ? "Tempurature" : "Dissolved Oxygen"}</h5>
            {
                (data === "")? (<h2>Loading...</h2>) :
                (
                (props.type === "temp") ? 
                (
                    <GaugeChart id={props.type} style={{width: "100%"}}
                        arcsLength={[0.52, 0.12, 0.36]}
                        colors={['red', 'green', 'red']}
                        percent={data / 50}
                        arcPadding={0.01}
                        textColor="black"
                        formatTextValue={(value) => (value * 0.5).toString() + ' °C'}
                    />
                ) :
                (
                    <GaugeChart id={props.type} style={{width: "100%"}}
                        arcsLength={[0.45, 0.25, 0.3]}
                        colors={['red', 'green', 'red']}
                        percent={data / 10}
                        arcPadding={0.01}
                        textColor="black"
                        formatTextValue={(value) => (value * 0.1).toString() + ' mg/l'}
                    />
                )
                )
            }
            
            {/* <h1>{(data)? data.value : 'No data'} {(props.type === 'temp') ? '°C' : '%'}</h1> */}
        </div>
    )
}

export default Current