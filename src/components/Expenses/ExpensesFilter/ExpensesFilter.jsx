import React from 'react'
import './ExpensesFilter.css'

export default function ExpensesFilter(props) {
    
    const onFilterYear = (e) => {
        props.onFilterYear(e.target.value)
    }
return (
    <div className='expenses-filter'>
        <label>Filter By Year</label>
        <div className="expenses-filter__dropdown">
            <select onChange={onFilterYear} value={props.selected}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    </div>
)
}
