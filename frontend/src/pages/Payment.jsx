import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
   const navigate= useNavigate();
   const initPayment = (data) => {
		const options = {
			key: "rzp_test_qZIS4npUR145s2",
			amount: data.amount,
			currency: data.currency,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = `${BASE_URL}/payment/verify`;
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
               navigate('/thank-you')
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = `${BASE_URL}/payment/orders`;
			const { data } = await axios.post(orderUrl, { amount: location.state.totalAmount });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};


    const location = useLocation();
    return (
        <section>
           <Container>
              <Row>
                 <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                       {/* <span><i class='ri-checkbox-circle-line'></i></span> */}
                       <h2 className='mb-3 fw-bold'>Final Amount To Be Paid: </h2>
                       <h3 className='mb-4'>${location.state.totalAmount}</h3>
  
                       <Button className='btn primary__btn w-25' onClick={handlePayment}>Pay Now</Button>
                    </div>
                 </Col>
              </Row>
           </Container>
        </section>
     )
}

export default Payment
