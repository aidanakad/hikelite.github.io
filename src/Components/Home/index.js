import React, {useEffect, useState} from 'react';
import style from './home.module.css'
import PageWrapper from '../PageWrapper'
import {Container, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import placeholder from '../../img/jeep.jpg'

export default function Home (){
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('http://localhost:1717/guides')
        .then(response=>{
            if(!response.ok) throw new Error('error receiving data')
            return response.json()
        }) 
        .then((data)=>{
            setList(data)
        }) 
    },[])

    return (
        <PageWrapper>
            <Container>
                <h1>Choose a guide and start to explore Kyrgyzstan</h1>
                {list.map(guide=>(
                    <div key={guide.id}>
                        <NavLink to={`/${guide.id}`}>
                            <button><img src={placeholder} alt="avatar" className={style.image}/></button>
                        </NavLink>
                        
                        <div>
                            <span>name: {guide.name}</span>
                        </div>
                    </div>
                ))}
            </Container>
        </PageWrapper>
    )
}