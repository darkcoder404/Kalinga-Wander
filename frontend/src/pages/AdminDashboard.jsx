import React from "react";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
// import { useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Collapse, Button } from "reactstrap";
import Subtitle from "./../shared/subtitle";
import "../styles/admindash.css";
//  import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import AllTour from "../components/Featured-tours/AllTour";
import { useNavigate } from "react-router-dom";
// import TourCard from '../shared/TourCard';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [userd, setUserd] = React.useState(false);
  const navigate = useNavigate();
  const { data: count } = useFetch(`${BASE_URL}/tours/search/getTourCount`);
  const {
    data: bookingdata,
    loading,
    error,
  } = useFetch(`${BASE_URL}/booking/getAllBooking`);
  const { data: bookingcount } = useFetch(
    `${BASE_URL}/booking/getAllBookingCount`
  );
  const { data: userdata } = useFetch(`${BASE_URL}/users/getAllUser`);
  //  console.log(bookingdata);
  const handleclick = () => {
    navigate("/admindashboard/createtour");
  };

  return (
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <h1>DASHBOARD</h1>
                <div>
                  <div>
                    {" "}
                    <br />
                    <h3 className="featured__tour-title">
                      Tour Count: {count}
                    </h3>
                    <h3 className="featured__tour-title">
                      Booking Count: {bookingcount}
                    </h3>
                    <br />
                  </div>
                </div>
                <button
                  className="btna btn-lg primary__btn"
                  onClick={handleclick}
                >
                  Create Tour
                </button>

                <button
                  className="btna btn-lg primary__btn"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  All Bookings
                </button>
                <Collapse isOpen={isOpen}>
                  <div>
                    {" "}
                    {loading && <h4>Loading.....</h4>}
                    {error && <h4>{error}</h4>}
                    {!loading &&
                      !error &&
                      bookingdata?.map((tour) => (
                        <Col
                          lg="3"
                          md="4"
                          sm="6"
                          classNameName="mb-4"
                          key={tour._id}
                        > 
                        <br />
                        <br />
                          <div>User Name : {tour.fullName}</div>
                          <div>Tour Name : {tour.tourName}</div>
                          <div>Guest size : {tour.guestSize}</div>
                          <div>Phone Number : {tour.phone}</div>
                          <div>Boooking date : {tour.bookAt}</div>
                          <br />
                        </Col>
                      ))}
                  </div>
                </Collapse>

                <button
                  className="btna btn-lg primary__btn"
                  onClick={() => {
                    setUserd(!userd);
                  }}
                >
                  All Users
                </button>
                <Collapse isOpen={userd}>
                  <div>
                    {userdata?.map((tour) => (
                      <Col
                        lg="3"
                        md="4"
                        sm="6"
                        classNameName="mb-4"
                        key={tour._id}
                      >
                        <br />
                        <br />
                        <div>User Name :  {tour.username}</div>
                        <div>Email :  {tour.email}</div>
                        <div>Role :  {tour.role}</div>
                        <div>Registration date :  {tour.createdAt}</div>
                      </Col>
                    ))}
                  </div>
                </Collapse>
              </Col>
              <AllTour />
            </Row>
          </Container>
        </section>
  );
};

export default AdminDashboard;
