import { useState, useEffect } from "react"
import './data.css'
import getData from '../../utils/getData';

function Current(props) {
    const [data, setData] = useState({value: 'Loading...'})

    useEffect(() => {
        setTimeout(() => {
            getData(`http://localhost:8080/ponds/1/${props.type}`)
                .then(latest_data => {
                    //console.log("call api")
                    setData(latest_data)
                })
        }, 5000)
    })

    return (
        <div className='current-data'>
        <h5>Current {props.type}</h5>
        <h1>{(data)? data.value : 'No data'} {(props.type === 'temp') ? '°C' : '%'}</h1>
        </div>
    )
}

export default Current