import React from "react";
import {Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./about.css";
import AboutImg from "../../images/Explore-Israel-Header.jpg";
// import { LinkContainer } from 'react-router-bootstrap';

function About(props) {
return(
<div>
  <Row id="imgRow">
<Card id ="card">
    <Card.Img variant="top"  id="cardImg" src={AboutImg} />
    <Card.Body>
      <Card.Text>
       "...a good land and a large, unto a land flowing with milk and honey" (Exodus 3:8)
      </Card.Text>
    </Card.Body>
  </Card>
</Row>

 <Row>
 <Card id="aboutInfo">
  <Card.Body>
    <h2 id="headLine">About Travel Israel:</h2>
    <p id="aboutText">We are a part of the Travel Israel Group, a NASDAQ listed company since 2003 with over 100 employees and over 20,000 members, 
    
    making it one of the leading travel agencies in Israel, deallind only with in-state turism.

    With more than 200 hotels/Room & breakfast all over the country, we've built an extensive on-line service, 
    
    to give our customers a fantastic choice of accommodation. 
    
    When you combine this with our 24/7 English, Arabic and Hebrew customer service and various other travel products, 
    
    you can trust us to take care of your next trip.

    This website is operated by Web.Israel, an Israeli entity. </p>
    
    </Card.Body>
</Card>
 </Row>
<Row id="aboutButt">
<Button variant="secondary" id="return" href="/">Return to homepage </Button>{' '}
          <NavDropdown style={{}} title="Select area" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Golan</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Galil</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Jerusalem</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Central Israel</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">South</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Eilat and Haarava
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
<Button variant="secondary" id="contactUsButt" href="/contactUs">Contact us</Button>{' '}
</Row>
</div>
);
}
export default About;