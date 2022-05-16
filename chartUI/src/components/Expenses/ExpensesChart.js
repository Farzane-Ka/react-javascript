import Chart from "../Chart/Chart";

const expensesChart = props => {
    const chartItems = [
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
    ];
    for (const expense of props.items) {
        const expenseMonth = expense.date.getMonth(); // 0 is for January
        chartItems[expenseMonth].value += expense.amount;
    }
    return <Chart items = {chartItems}/>
}

export default expensesChart;
