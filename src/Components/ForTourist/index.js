import React from 'react';
import style from './guides.module.css'
import PageWrapper from '../PageWrapper'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import placeholder from '../../img/placeholder.jpg'

export default function Guides (){
    const endpoint = 'http://localhost:1717'
    const [list, setList]= useState([])

    useEffect(()=>{
        fetch(`${endpoint}/guides`)
        .then(response=>{
            if(!response.ok) throw new Error ('error receiving data')
            return response.json()
        })
        .then((data)=>{
            setList(data)
        })
    },[])

    return (
        <div>
            <PageWrapper>
                <Container>
                    <h2>Choose a guide and start your adventure</h2>
                    {list.map(guide =>(
                        <div key={guide.id} className={style.guides}>
                            <NavLink to={`/guides/${guide.id}`}>
                                <button>
                                    <img src={guide.img || placeholder}  alt="avatar" className={style.avatar}/>
                                </button>
                            </NavLink>
                            <div>
                                <span>{guide.name}</span>
                                <span>{guide.age}</span>
                                <span>{guide.languages}</span>
                            </div>
                        </div>
                    ))}
                </Container>
            </PageWrapper>
        </div>
    )
}