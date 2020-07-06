import React from 'react';
import {NavLink} from 'react-router-dom'  
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import style from './nav.module.css'

const navItems = [
    {id:1, link: '/', text: 'Home'},
    {id:4, link: '/login', text: 'Login'},
    {id:5, link: '/signin', text: 'Signin'},
    {id:6, link: '/about-us', text: 'About Us'}
]

export default function Navigation(){
    return(
        <Navbar collapseOnSelect expand= 'lg' variante="dark"  mr='auto' className={style.nav}>
        <Container fluid="md">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={style.navItems}> 
                
                  {
                    navItems.map((item) => (
                      <NavLink
                        key={item.id}
                        exact
                        to={item.link}
                        className={style.navLink}
                        activeClassName={style.activeLink}
                      >
                        {item.text}
                      </NavLink>
                      
                    ))
                  }
                  <NavLink to="/for-guide">
                        <Button variant="outline-success" className={style.btn}>Become a guide</Button>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}