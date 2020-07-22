import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import style from './about.module.css'

export default function MyForm() {
const API = 'https://blooming-cove-23901.herokuapp.com'
const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
  
const [result, setResult] = useState(null);

const sendEmail = event => {
    event.preventDefault();
    fetch(`${API}/about-us`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state),
    })
    .then(response=>{
        if(!response.ok) throw new Error ('Cannot send the message')
        return response.json()
    })
    .then(response => {
        setResult(response.data);
        })
    .catch(()=>{
        setResult({
            success: false,
            message:'Something went wrong. Try again'
        })
    })

}

const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>{result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      
    <form >
        <h4>CONTACT US</h4>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name"  value={state.name} onChange={onInputChange} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="email" placeholder="name@example.com" value={state.email}  onChange={onInputChange}/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" placeholder="Subject" value={state.subject} onChange={onInputChange}/>
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows="3" value={state.message} onChange={onInputChange}/>
        </Form.Group>
        <Button variant="success" type="submit" onSubmit={sendEmail}>Send message</Button>
    </form>
      </div>
  )
}
    