import { React, useRef, useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcyg5mi",
        "template_vu6c2pf",
        ref.current,
        "J2S4jw0GYE7k-IFNv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col>
            <div className="newsletter__content">
              <h2>SUBSCRIBE NOW</h2>

              <form ref={ref} onSubmit={handleSubmit}>
                <div className="newsletter__input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="inputdef"
                  />
                  
                </div>
                <div className="newsletter__input" >
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="inputdef"
                  />
                 
                </div>
                <button type="submit" className="btn newsletter__btn">
                    Subcribe
                  </button>
                {success && (
                  <div className="my-3">Your are Subscribed Now. We'll get back to you soon.</div>
                )}
              </form>
              <p>
                Are you passionate about travel, adventure, and discovering new
                destinations? 🌍✈️ Don't miss out on the latest updates,
                exclusive travel tips, and special offers that will make your
                wanderlust heart skip a beat! Subscribe to our newsletter now
                and join our ever-growing community of adventure seekers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
