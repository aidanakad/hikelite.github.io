import React from 'react';
import {NavLink} from 'react-router-dom'  
import {Navbar, Nav, Container} from 'react-bootstrap'
import style from './nav.module.css'

const navItems = [
    {id:1, link: '/', text: 'Home'},
    {id:4, link: '/guides', text: 'Guides'},
    {id:6, link: '/about-us', text: 'About Us'}
]

export default function Navigation(){
    return(
        <Navbar collapseOnSelect expand= 'lg' variante="dark"  mr='auto' className={style.nav}>
        <Container fluid="md">
              <div className={style.brand}>
                <Navbar.Brand href='/' ><span className={style.txt}>HIKE</span><span>^</span><span className={style.txt}>LITE</span> </Navbar.Brand>
              </div>
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
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}