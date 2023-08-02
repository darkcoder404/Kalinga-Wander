import React from 'react'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'
import AdminTourCard from '../../shared/AdminTourCard'

const AllTour = () => {
   const {data: Tours, loading, error} = useFetch(`${BASE_URL}/tours`)
   
   // console.log(count)

   return (
      <>
         { loading && <h4>Loading.....</h4> }
         { error && <h4>{error}</h4> }
         {
            !loading && !error &&
            Tours?.map(tour => (
               <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}>
                  <AdminTourCard tour={tour} />
               </Col>
            ))
         }
      </>
   )
}

export default AllTour 