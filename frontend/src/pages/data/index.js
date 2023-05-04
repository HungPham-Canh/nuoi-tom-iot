import Chart from './Chart';
import Current from './Current';

function Data() {
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <Current type="temp"/>
                </div>
                <div className='col-6'>
                    <Current type="do"/>  
                </div>
            </div>

            <Chart type="temps"/>
            <Chart type="dos"/>
        </div>
        )
}

export default Data