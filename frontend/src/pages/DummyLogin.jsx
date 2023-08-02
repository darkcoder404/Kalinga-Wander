import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
// import { AuthContext } from "../context/AuthContext";
// import { BASE_URL } from "../utils/config";

const DummyLogin = () => {

  const navigate = useNavigate();

  
  const handleuser = (e) => {
    navigate('/loginuser');
  };
  const handleadmin = (e) => {
    navigate('/loginadmin')
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>LOGIN</h2>

                <div>
                  {" "}
                  <Button
                    className="btn secondary__btn auth__btn mb-10"
                    type="submit"
                    onClick={handleuser}
                  >
                    {" "}
                    User
                  </Button>
                  <br />
                  <br />

                  </div>
                  <div>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={handleadmin}
                  >
                    {" "}
                    Admin*
                  </Button>
                </div>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default DummyLogin