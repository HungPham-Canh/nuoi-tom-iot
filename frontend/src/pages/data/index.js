import Chart from './Chart';
import Current from './Current';

function Data() {
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <Current type="temp"/>
                </div>
                {/* <div className='col-6'>
                    <Current type="light"/>  
                </div> */}
            </div>

            <Chart type="temps"/>
            <Chart type="lights"/>
        </div>
        )
}

export default Data