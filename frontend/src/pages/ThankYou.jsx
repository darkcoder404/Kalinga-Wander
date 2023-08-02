import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'

const ThankYou = () => {
   return (
      <section>
         <Container>
            <Row>
               <Col lg='12' className='pt-5 text-center'>
                  <div className="thank__you">
                     <span><i class='ri-checkbox-circle-line'></i></span>
                     <h2 className='mb-3 fw-semibold'>Thank You.</h2>
                     <h3 className='mb-4'>Your booking is confirmed. Further details will be sent to your mail id.</h3>

                     <Button className='btn primary__btn w-25'><Link to='/home'>Back To Home</Link></Button>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default ThankYou