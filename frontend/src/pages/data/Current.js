import { useState, useEffect } from "react"
import './data.css'
import getData from '../../utils/getData';
import GaugeChart from 'react-gauge-chart'

function Current(props) {
    const [data, setData] = useState({value: ""})

    // console.log(data)

    useEffect(() => {
        setTimeout(() => {
            getData(`http://localhost:8080/ponds/1/${props.type}`)
                .then(latest_data => {
                    setData(latest_data)
                })
        }, 5000)
    }, [data.value])

    return (
        <div className='current-data'>
            <h5>{(props.type === "temp") ? "Tempurature" : "Light"}</h5>
            {
                (data.value === "")? (<h2>Loading...</h2>) :
                (
                (props.type === "temp") ? 
                (
                    <GaugeChart id={props.type} style={{width: "100%"}}
                        arcsLength={[0.52, 0.12, 0.36]}
                        // colors={['#5BE12C', '#F5CD19', '#EA4228']}
                        percent={data.value / 50}
                        arcPadding={0.01}
                        textColor="black"
                        formatTextValue={(value) => (value * 0.5).toString() + ' °C'}
                    />
                ) :
                (
                    <GaugeChart id={props.type} style={{width: "100%"}}
                        nrOfLevels={1}
                        colors={["blue"]}
                        percent={data.value / 100}
                        textColor="black"
                    />
                )
                )
            }
            
            {/* <h1>{(data)? data.value : 'No data'} {(props.type === 'temp') ? '°C' : '%'}</h1> */}
        </div>
    )
}

export default Current