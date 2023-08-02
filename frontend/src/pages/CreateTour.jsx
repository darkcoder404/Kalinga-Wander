import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/admincreatetour.css'
import {  useNavigate } from 'react-router-dom'

import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const CreateTour = () => {
   const [credentials, setCredentials] = useState({
      title: "",
      city: "",
      address: "",
      distance: "",
      photo:"", 
      desc: "",
      price: "",
      maxGroupSize:"",
        
  
   })

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials({ ...credentials, [e.target.id]: e.target.value })
   }

   const handleClick = async (e) => {
      e.preventDefault()

      try {
         let res = await fetch(`${BASE_URL}/tours/createtour`, {
            method:'POST',
            headers: {
               'content-type':'application/json'
            },
            
            credentials: "include",
            body: JSON.stringify(credentials)
         })
         res = await res.json()
         // console.log(res)

          if(!res.ok) alert(res.message)

         dispatch({type:'REGISTER_SUCCESS'})
         navigate('/admindashboard')
      } catch(err) {
         alert(err.message)
      }
   }

   return (
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <div className="login__container ">
                     <div className="login__form">
                        <div className="user">
                        </div>
                        <h2>Enter required details</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder='Tour Name' id='title' value={credentials.title} onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='City' id='city'value={credentials.city}  onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Address' id='address'value={credentials.address}  onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="number" placeholder='Distance' id='distance' value={credentials.distance}  onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Photo(URL#)' id='photo' value={credentials.photo}  onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Description' id='desc' value={credentials.desc}  onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="number" placeholder='Price' id='price'value={credentials.price}  onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="number" placeholder='Max Group Size' id='maxGroupSize' value={credentials.maxGroupSize}  onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn  auth__btn' type='submit'>Create Tour</Button>
                        </Form>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default CreateTour