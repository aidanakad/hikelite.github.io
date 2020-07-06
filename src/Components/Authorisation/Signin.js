import React from 'react';
import style from './auth.module.css'
import PageWrapper from '../PageWrapper'
import {Form, Button, Container, Col, Row} from 'react-bootstrap'

export default function Signin (){
    return (
        <PageWrapper>
            <Container>
                <Row>
                    <Col xs={12} >
                        <Form className={style.login}>
                            <Form.Group controlId="formGroupEmail" className={style.line}>
                                <Form.Control type="email" placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail" className={style.line}>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword" className={style.line}>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword" className={style.line}>
                                <Form.Control type="password" placeholder="Repeat password" />
                            </Form.Group>
                            <Button variant="outline-success">Create</Button>{' '}
                        </Form>
                    </Col>
                </Row>
               
            </Container>
        </PageWrapper>
    )
}