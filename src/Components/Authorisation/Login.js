import React from 'react';
import style from './auth.module.css'
import PageWrapper from '../PageWrapper'
import {Form, Button, Container, Col, Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import {changeField} from '../../Store/actions'

function Login({changeValue, login, username, password}){
    const handleLogin =()=>{
        console.log(username,password)
    }
    return (
        <div>
            <PageWrapper>
            <Container>
                <Row>
                    <Col xs={12} >
                        <Form className={style.login}>
                            <Form.Group controlId="formGroupEmail" className={style.line}>
                                <Form.Control type="email" placeholder="Username" value={username} onChange={(e)=> changeValue('username', e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword" className={style.line}>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> changeValue('password', e.target.value)}/>
                            </Form.Group>
                            <Button variant="outline-success" onClick={handleLogin}>Log in</Button>{' '}
                        </Form>
                    </Col>
                </Row>
            </Container>
            </PageWrapper>
        </div>
    )
}

const mapStateToPtops =(state)=>({
    username: state.forms.login.username,
    password: state.forms.login.password
})

const mapDispatchToProps = (dispatch)=>({
    changeValue:(fieldName, value)=> dispatch(changeField('login', fieldName, value))
})

export default connect (mapStateToPtops, mapDispatchToProps)(Login)