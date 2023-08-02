import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import sdimg from "../assets/images/sd.jpg";
import somimg from "../assets/images/som.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <section>
      <Container>
        <h2 className=" note hightlight mb-5 fw-semibold ">
          "Crafting Digital Masterpieces: Meet Our Web Development Team!"
        </h2>
        <Row>
          <Col lg="5">
            <div class="grid-child purple  container mx-auto ">
              <div className="card">
                <img className="card-img-top " src={sdimg} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Subham Dikshit</h4>
                  <p className="card-text">subhamdikshit007@gmail.com</p>
                  <a
                    href="https://www.linkedin.com/in/subham-dikshit-b96552253"
                    target="blank"
                    class="btn btn-lg primary__btn"
                  >
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="2"> </Col>

          <Col lg="5">
            <div class="grid-child green  container mx-auto">
              <div className="card">
                <img className="card-img-top" src={somimg} alt="Card image" />
                <div className="card-body">
                  <h4 className="card-title">Soumyajeet Muni</h4>
                  <p className="card-text">soumyajeetmuni@gmail.com</p>
                  <a
                    href="https://www.linkedin.com/in/soumyajeet-muni-8952a7232/"
                    target="blank"
                    class="btn btn-lg primary__btn"
                  >
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <p className=" note  mb-5 mt-5 ">
          <br />
          Kalinga Wander is a web application developed as part of a project,
          aimed at promoting tourism in the captivating region of Odisha.
          Whether you're a seasoned traveler or an enthusiastic explorer, this
          app is your ultimate companion to unlock the hidden gems and wonders
          of this extraordinary destination. With , embark on a seamless journey
          to explore the region's diverse landscapes, rich cultural heritage,
          and breathtaking attractions. Discover an array of carefully curated
          tour packages that cater to all interests, from thrilling outdoor
          adventures to immersive cultural experiences.
          <br /> <br /> <strong>Key Features:</strong> <br /> 🗺️ Explore Curated
          Tour Packages: Browse through a thoughtfully curated selection of tour
          packages, each designed to showcase the best of Odisha, ensuring an
          unforgettable travel experience. <br />
          🌟 Personalized Recommendations: Let be your travel advisor! Based on
          your preferences and interests, the app provides personalized tour
          recommendations, tailored just for you. <br />
          🏨 Hassle-Free Bookings: Say goodbye to the traditional booking
          process! With , booking your dream tour package is just a tap away,
          ensuring a seamless and secure transaction.
          <br /> 📸 Visualize Your Adventure: Get a sneak peek of your upcoming
          adventure with stunning images and captivating videos of each tour
          package, inspiring your wanderlust like never before. <br />
          🗣️ Stay Informed: Stay up-to-date with the latest travel news, special
          offers, and exclusive deals, delivered directly to your app through
          timely notifications. <br /> <br /> Whether you're an adventurer,
          history enthusiast, or simply seeking serenity, promises to make your
          travel dreams a reality. Let the exploration begin! 🌏✨{" "}
        </p>
      </Container>
    </section>
  );
};

export default About;
