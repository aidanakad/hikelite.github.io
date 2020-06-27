import React from 'react';
import {NavLink} from 'react-router-dom'  
import {Navbar, Nav, Container} from 'react-bootstrap'
import style from './nav.module.css'

const navItems = [
    {id:1, link: '/', text: 'Home'}
    {id:4, link: '/for-tourist', text: 'For Tourist'}
    {id:5, link: '/for-guide', tetx: 'For Guide'}
]

export default function Navigation(){
    return(
        <Navbar collapseOnSelect expand= 'lg' variante="dark"  mr='auto'>
        <Container fluid="md">
                <Navbar.Brand href="/">
            some logo
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav> 
                
                  {
                    navItems.map((item) => (
                      <NavLink
                        key={item.id}
                        exact
                        to={item.link}
                        className={style.navlink}
                        activeClassName={style.activeLink}
                      >
                        {item.text}
                      </NavLink>
                    ))
                  }
                
                  
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}