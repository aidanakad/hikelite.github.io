import React from 'react';
import {Form, Button} from 'react-bootstrap'
import style from './about.module.css'

export default function MyForm() {
  return (
    <Form>
        <h4>CONTACT US</h4>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Subject" />
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="success">Send message</Button>
    </Form>
  );
}