import Chart from './Chart';

function Data() {
    return (
        <div>
            <div className='current-temp'>
                <h5>Current temp</h5>
                <h1>36 °C</h1>
            </div>
            <Chart />
        </div>
        )
}

export default Data