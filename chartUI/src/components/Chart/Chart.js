import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
    const arrayValues = props.items.map(itemObject => itemObject.value);
    const maxValue = Math.max(...arrayValues);
    return(
        <div className="chart">
            {props.items.map((item) =>
                <ChartBar key={item.label} value ={item.value} maxValue={maxValue} label={item.label}/>)}
        </div>
    );
}
export default Chart;
