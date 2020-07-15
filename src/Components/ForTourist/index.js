import React , {useEffect, useState} from 'react';
import style from './tourist.module.css'
import PageWrapper from '../PageWrapper'
import {Container} from 'react-bootstrap'

export default function ForTourist ({match:{params: {id}}}){
    

    // const id = parseInt(id)
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:1717/${id}`)
        .then(response=>{
            if(!response.ok) throw new Error('guide not found')
            return response.json()
        }) 
        .then((data)=>{
            setList(data)
        }) 
    },[])
    return (
        <PageWrapper>
            <Container>
                {list.guide.map(g=>(
                    <div>
                        <span>{g.name}</span>
                        <span>{g.age}</span>
                    </div>
                ))}
            </Container>
            
        </PageWrapper>
    )
}