import React from "react";
import "../styles/home.css";
import { Container, Row, Col, CardSubtitle } from "reactstrap";
import heroImg from "../assets/images/hero-img01.mp4";
// import heroImg02 from '../assets/images/hero-img02.mp4'
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "./../shared/subtitle";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className=" hero__video-box  mt-4">
                <video src={heroImg} alt="" controls />
              </div>
            </Col>

            <Col lg="6">
              <div className="hero__content">
                <h1>
                  From historical cities to natural splendours, come see the
                  best of<span className="hightlight"> Odisha</span>
                </h1>
                <p>
                  Odisha is a home to the finest architectural heritage, serene
                  ghats, spectacular landscapes and the largest brackish water
                  lake.
                  <br /> "Unveil the Mystical Treasures of Odisha: A Land of
                  Ancient Wonders and Modern Marvels."
                </p>
              </div>
            </Col>
            <Col lg="3">
              <div className=" hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            {/* <Col lg='3'>
               <div className=" hero__video-box mt-4">
                     <video src={heroImg02} alt="" controls muted />
                  </div>
               </Col> */}
          </Row>
        </Container>
      </section>
      {/* ============================================================== */}

      {/* ==================== HERO SECTION START ====================== */}

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-2">
              <Subtitle subtitle={"Explore our featured tours"} />
              {/* <h2 className='featured__tour-title'>[Our featured tours]</h2> */}
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========== FEATURED TOUR SECTION END =========== */}
      {/* ========== GALLERY SECTION START ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">Excellence Unveiled</h5>
              <h2 className="services__title">
                {" "}
                Unmatched Services Tailored Just for You.
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
    </>
  );
};

export default Home;
