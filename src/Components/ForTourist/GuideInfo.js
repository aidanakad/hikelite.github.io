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
    const endpoint = 'https://blooming-cove-23901.herokuapp.com/'
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
                                
                                <div> <span>Age:</span> <p>{guide && guide.age}</p> </div>
                                <div><span>Transport:</span> <p>{guide && guide.transport}</p> </div>
                                     
                                <div>
                                <span>Languages:</span>
                                    {guide&&guide.languages.map(l=>(
                                          <p> {l} </p>  
                                        ))}
                                </div>
                                <div><span>Number:</span> <p>{guide && guide.quantity}</p> </div>
                                <div><span>About:</span>  <p>{guide && guide.about}</p> </div>
                                <div><span>Availability:</span> <p>{guide && guide.available}</p> </div>
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