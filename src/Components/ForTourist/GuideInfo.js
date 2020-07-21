import React, {useState, useEffect} from 'react';
import PageWrapper from '../PageWrapper'
import {Container} from 'react-bootstrap'
import style from './guide.module.css'
import placeholder from '../../img/placeholder.jpg'
import Whats from '../AboutUs/icons/Whats'
import Telegram from '../AboutUs/icons/Telegram'
import Insta from '../AboutUs/icons/Insta'

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
                <div className={style.page}>
                    <Container>
                        <div key={guide && guide.id} className={style.guide}>
                            <div className={style.photo}>
                                <img src={guide && guide.img || placeholder} alt="avatar" className={style.avatar}/>
                                <div className={style.right}>
                                    <span>Name: {guide && guide.name}</span>
                                    <span>Price per day: {guide && guide.price}</span>
                                </div>
                            </div>
                            <div className={style.info}>
                                
                                <p> <span>Age:</span>  {guide && guide.age}</p>
                                {/* <p>Languages: {guide && guide.languages}</p> */}
                                <p><span>Transport:</span> {guide && guide.transport}</p>
                                <p><span>Number:</span> {guide && guide.quantity}</p>
                                <p><span>About:</span> {guide && guide.about}</p>
                                <p><span>Availability:</span> {guide && guide.available}</p>
                                <div className={style.contact}>
                                    <span><Whats style={{marginRight:"10px"}}/>{guide && guide.contacts.whatsapp}</span>
                                    <span><Telegram style={{marginRight:"10px"}}/>  {guide && guide.contacts.telegram}</span>
                                    <span><Insta style={{width:"20px", height:"20px", marginRight:"10px"}}/>{guide && guide.contacts.instagram}</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </PageWrapper>
    )
}