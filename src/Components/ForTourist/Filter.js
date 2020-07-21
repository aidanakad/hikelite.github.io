import React , {useState, useEffect} from 'react';
import style from './guides.module.css'

export default function Filter(){
    const endpoint = 'http://localhost:1717'
    const [lang, setFilter]= useState(null)
    const[sort, setSort] = useState(null)

    useEffect(()=>{
        fetch(`${endpoint}/guides`)
        .then(response=>{
            if(!response.ok) throw new Error ('error receiving data')
            return response.json()
        })
    },[]) 

    const handleFilter=(e)=>{
        console.log(e.target.value)
    }

    const handleSort=(e)=>{
        console.log(e.target.value)
    }

    return(
        <div className={style.sort}>
            <div className={style.order}>
                Order {" "}
                <select onChange={handleSort}>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className={style.filter}>
                Filter{" "}
                <select onChange={handleFilter}>
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