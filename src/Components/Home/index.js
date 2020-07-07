import React from 'react';
import style from './home.module.css'
import PageWrapper from '../PageWrapper'
import {Container, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default function Home (){
    return (
        <PageWrapper>
            <div className={style.bg}>
                <Container className={style.main}>
                    <h1>Explore Kyrgyzstan together with "Brand"</h1>
                    <h4>Kyrgyzstan is a Central Asian country of incredible natural beauty and proud nomadic traditions. 90% of the country covered by mountains and
                        about 2000 lakes.</h4>
                    <h3>Start to explore, choose a guide and pack your bag.</h3>
                    <NavLink to ="/guides">
                        <Button variant="success">Find a guid</Button>
                    </NavLink>
                </Container>
            </div>
        </PageWrapper>
    )
}