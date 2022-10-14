import "./ExpensesFilter.css"

const ExpensesFilter = (props) => {

    const years = ['2022', '2021', '2020', '2019'];

    const onSelect = (event) => {
        const selected = event.target.value;
        props.onSelectFilter(selected)
    };

    return (
        <div>
            <label>Filter by year</label>
            <select value={props.selected} onChange={onSelect}>
                {years.map(year => <option key={year}>{year}</option>)}
            </select>
        </div>
    );
}

export default ExpensesFilter;