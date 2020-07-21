import React from 'react';
import style from './about.module.css'
import PageWrapper from '../PageWrapper'
import {Container, Row, Col} from 'react-bootstrap'
import Form from './Form'
import Insta from './icons/Insta'
import Facebook from './icons/Facebook'

export default function AboutUs (){
    return (
        <div>
            <PageWrapper>
                <div className={style.background}>
                    <Container className={style.box}>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className={style.text}>
                                    <div style={{marginBottom:'23px'}}>
                                        <h4>WHO WE ARE</h4>
                                        <h6>We are people just like you, who are the NatureLovers. Hiking is not work for us, this is part of our live. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, accusamus.</h6>
                                    </div>
                                    <div style={{marginBottom:'23px'}}>
                                        <h4>WHAT WE OFFER</h4>
                                        <h6>Through this platform, you are able to choose a guide, according to your preference, without impositions. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
                                    </div>
                                    <div style={{marginBottom:'23px'}}s>
                                        <h4>WHY WE EXCIST</h4>
                                        <h6>Why? This is the essential question which every entrepreneur should ask himself first of all. And our answer is that we would like to simplify your trip and show best trails in Kyrgyzstan.</h6>
                                        
                                    </div>
                                    <h3>WHEN HIKING IS A LIFESTYLE</h3>
                                </div>
                            </Col>
                            <Col  xs={12} md={6}><Form/></Col>
                            <Col xs={12} md={12}>
                                <div className={style.follow}>
                                    <h4>FOLLOW US</h4>
                                    <a href="https://github.com/aidanakad" target="_blank" rel="noopener noreferrer" className={style.btn}>
                                        <Insta className={style.insta}/>
                                    </a>
                                    <a href="https://www.facebook.com/aydana.kadyrova.7/" target="_blank" rel="noopener noreferrer" className={style.btnF}>
                                        <Facebook className={style.facebook}/>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </PageWrapper>
        </div>
    )
}