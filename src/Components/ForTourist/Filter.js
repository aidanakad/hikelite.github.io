import React  from 'react';
import style from './guides.module.css'

export default function Filter({ onChange }){

    const handleFilter=(e)=>{
        onChange(e.target.value)
}
    return(
        <div className={style.sort}>
            <div className={style.order}>
                Order {" "}
                <select>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className={style.filter}>
                Filter{" "}
                <select onChange={handleFilter} >
                <option value="">All</option>
                    <option value="English">english</option>
                    <option value="Russian">russian</option>
                    <option value="French">french</option>
                    <option value="Italian">italian</option>
                    <option value="Chinese">chinese</option>
                    <option value="Turkish">turkish</option>
                    <option value="Arabi">arabic</option>
                </select>
            </div>
        </div>
    )
}