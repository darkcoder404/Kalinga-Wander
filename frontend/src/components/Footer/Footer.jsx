import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const Footer = () => {
   const year = new Date().getFullYear()

   return (
      <footer className='footer'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="logo">
                     <img src={logo} alt="" />
                     
                  </div>
               </Col>
               <Col lg='6'>
               <p>Stay Connected, Explore More - Follow Us on the Journey.</p>
                     <div className="social__link d-flex align-items-center gap-4">
                        <span>
                           <Link to='#'>
                              <i class='ri-youtube-line'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='#'>
                              <i class='ri-github-fill'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='#'>
                              <i class='ri-facebook-circle-line'></i>
                           </Link>
                        </span>
                        <span>
                           <Link to='#'>
                              <i class='ri-instagram-line'></i>
                           </Link>
                        </span>
                     </div>
                     <p>&copy; Copyright 2023 KalingaWander
</p>
               </Col>

 
                  
                 

   
            </Row>
         </Container>
      </footer>
   )
}

export default Footer