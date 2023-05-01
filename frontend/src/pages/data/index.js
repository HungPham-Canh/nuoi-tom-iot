import Chart from './Chart';
import Current from './Current';

function Data() {
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <Current type="temp"/>
                </div>
                <div className='col'>
                    <Current type="light"/>  
                </div>
            </div>

            <Chart type="temps"/>
            <Chart type="lights"/>
        </div>
        )
}

export default Data