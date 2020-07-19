import React, {useState, useEffect} from 'react';
// import style from './guides.module.css'
import PageWrapper from '../PageWrapper'
import {Container} from 'react-bootstrap'

export default function GuideInfo ({match:{params:{id}}}){
    const [guide, setGuide] = useState(null)
    const endpoint = 'http://localhost:1717'
    useEffect(()=>{
        fetch(`${endpoint}/guides/${id}`)
        .then(response=>{
            if(!response.ok) throw new Error ('guide not found')
            return response.json()
        })
        .then((info)=>{
            setGuide(info)
        })
    },[])

    return (
            <PageWrapper>
                <Container>
                    <div key={guide && guide.id}>
                        <span>{guide && guide.name}</span>
                        <span>{guide && guide.age}</span>
                        <span>{guide && guide.languages}</span>
                        <span>{guide && guide.transport}</span>
                        <span>{guide && guide.quantuty}</span>
                        <span>{guide && guide.about}</span>
                        <span>{guide && guide.available}</span>

                        <div key={guide && guide.tours.id}>
                            {guide && guide.tours.map(pack=>(
                                <div>
                                    <span>{pack.place}</span>
                                    <span>{pack.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </PageWrapper>
    )
}