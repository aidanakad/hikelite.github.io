import React from 'react';
import style from './guides.module.css'

export default function Filter(){
    return(
        <div className={style.sort}>
            <div>Products</div>
            <div className={style.order}>
                Order {" "}
                <select>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className={style.filter}>
                Filter{" "}
                <select name="" id="">
                    <option value="">English</option>
                    <option value="Russian">Russian</option>
                    <option value="French">French</option>
                    <option value="Italian">Italian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Arabi">Arabi</option>
                </select>
            </div>
        </div>
    )
}