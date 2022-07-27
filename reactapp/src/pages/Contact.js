import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./ContactInfo"
import './Contact.css';

export default function ContactUs() {
  

  return (
      <Container>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>

            {/* description below (Get in touch) */}
            <p>{contactConfig.description}</p>
          </Col>
          <br/>

          {/* name, email, message, send */}
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="button ac_btn" type="submit" onClick={()=>{ alert('Message Sent!'); }}> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}