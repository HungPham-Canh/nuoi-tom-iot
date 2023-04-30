import Chart from './Chart';
import Current from './Current';

function Data() {
    return (
        <div>
           <Current type="temp"/>
           <Current type="light"/>

            <Chart type="temps"/>
            <Chart type="lights"/>
        </div>
        )
}

export default Data