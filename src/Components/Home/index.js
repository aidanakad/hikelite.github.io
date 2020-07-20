import React from 'react';
import style from './home.module.css'
import PageWrapper from '../PageWrapper'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function Home (){
    return (
        <div>
            <PageWrapper>
            <div className={style.bg}>
                <Container>
                    <Row>
                        <Col>
                            <div className={style.info}>
                                <h1 style={{marginBottom:'18px'}}>HIKE WITH US LITE</h1>
                                <h1 style={{marginBottom:'18px'}}>Start to explore marvelous Kyrgyzstan</h1>
                                <h4 style={{marginBottom:'18px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam!</h4>
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis voluptate eaque facilis consectetur aspernatur.</h3>
                                <NavLink to='/guides'>
                                    <Button variant="success">Find a guide</Button>
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </PageWrapper>
        </div>
    )
}