import React from 'react';
import style from './guides.module.css'
import PageWrapper from '../PageWrapper'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import placeholder from '../../img/placeholder.jpg'
import Filter from './Filter'

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
                <div className={style.page}>
                    <Container className={style.container}>
                        <Row>
                            <Col xs={12} md={12}><h2>Choose a guide and start your adventure</h2></Col>
                            <Col xs={12} md={12}><Filter/></Col>
                                {list.map(guide =>(
                                    <div key={guide.id} className={style.wrapper}>
                                        <div className={style.link}>
                                            <NavLink to={`/guides/${guide.id}`}>
                                                <button>
                                                    <img src={guide.img || placeholder}  alt="avatar" className={style.avatar}/>
                                                </button>
                                            </NavLink>
                                        </div>
                                        <div className={style.intro}>
                                            <span>{guide.name}</span>
                                            <span>price: {guide.price}</span>
                                            
                                        </div>
                                    </div>
                                ))}
                                
                        </Row>
                    </Container>
                </div>  
            </PageWrapper>
        </div>
    )
}