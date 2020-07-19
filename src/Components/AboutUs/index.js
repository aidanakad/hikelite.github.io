import React from 'react';
import style from './about.module.css'
import PageWrapper from '../PageWrapper'
import {Container} from 'react-bootstrap'
import Form from './Form'

export default function AboutUs (){
    return (
        <div>
            <PageWrapper>
                <Container>
                    <div>
                        <h4>WHO WE ARE</h4>
                        <h6>We are people just like you, who are the NatureLovers. Hiking is not work for us, this is part of our live</h6>
                    </div>
                    <div>
                        <h4>WHAT WE OFFER</h4>
                        <h6>through this platform, you are able to choose a guide, according to your preference, without impositions. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                    </div>
                    <div>
                        <h4>WHY</h4>
                        <h6>Why? This is the essential question which every entrepreneur should ask himself first of all. And our answer is that we would like to simplify your trip and show best trails in Kyrgyzstan.</h6>
                        <h3>HIKE WITH US LITE</h3>
                    </div>
                    <Form/>
                </Container>
            </PageWrapper>
        </div>
    )
}