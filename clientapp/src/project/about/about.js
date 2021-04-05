import React, { useState, useEffect } from "react";
import {Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./about.css";
import { render } from "react-dom";
import AboutImg from "../../images/Explore-Israel-Header.jpg";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
// import { LinkContainer } from 'react-router-bootstrap';

const places = [
  "Eilat",
  "Jerusalem",
  "galil",
  "Arava",
  "Golan hights",
  "sea of Galilee",
  "Tel-Aviv",
];

// const [productsArray, setProductsArray] = useState([]);
//   const [errorMassage, setErrorMassage] = useState("");
//   const devUrl = "http://localhost:3001";
//   // const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState(
//     places.reduce(
//       (options, option) => ({
//         ...options,
//         [option]: false,
//       }),
//        []
//     )
//   );

  // useEffect(async () => {
  //   try {
  //     const res = await axios("http://localhost:3001/products");
  //     console.log(res.data);
  //     setProductsArray(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMassage(error.Error);
  //   }
  // }, []);

  // const handleChange = (e) => {
  //   const { name } = e.target;
  //   setSelectedProducts({ ...selectedProducts, [name]: !selectedProducts[name] });
  // };

//   const relevantProducts = productsArray.filter(({ name }) =>
//   selectedProducts
//     .map((selectedName) => selectedName.toUpperCase())
//     .includes(name.toUpperCase())
// );

function About(props) {
return(
<div>
  <Row id="imgRow">
<Card id ="card">
    <Card.Img variant="top"  id="cardImg" src={AboutImg} style={{borderStyle:"solid", borderColor:"black", borderWidth:"3px"}} />
    <Card.Body>
      <Card.Text>
       "...a good land and a large, unto a land flowing with milk and honey" (Exodus 3:8)
      </Card.Text>
    </Card.Body>
  </Card>
</Row>
<Col ></Col>
<Col xs={10} style={{marginLeft:"120px"}}>
 <Row>
 <Card id="aboutInfo">
  <Card.Body>
    <h2 id="headLine" style={{color:"darkblue"}}>"Travel Israel" - one stop shop for turism and travelling:</h2>
    <p id="aboutText">We are a part of the Travel Israel Group, a NASDAQ listed company since 2003 with over 100 employees and over 20,000 members, 
    
    making it one of the leading travel agencies in Israel, deallind only with in-state turism.

    With more than 200 hotels/Room & breakfast all over the country, we've built an extensive on-line service, 
    
    to give our customers a fantastic choice of accommodation. 
    
    When you combine this with our 24/7 English, Arabic and Hebrew customer service and various other travel products, 
    
    you can trust us to take care of your next trip.

    This website is operated by Web.Israel, an Israeli entity. </p>

    <p>
      This site is ment to serve everyone!
      Families, hikers, extreme lovers - all can find routes, items and services to serve them right!
      We have made our best to bring you top rated trips, recommendations and ecessories that can make 
      your experiance the best you ever had.
    </p>
<LinkContainer to="/Store" style={{fontWeight:"bolder", color:"blue", fontSize:"150%"}}>
    <p>Don't leave without checking our special sales!</p>
</LinkContainer>
    </Card.Body>
  <Col xs={1}></Col>  
</Card>

 </Row>
 </Col>
{/* <Row id="aboutButt">
<Button variant="secondary" id="return" href="/">Go to homepage</Button>
<NavDropdown style={{}} title="Select area" id="nav-dropdown"  >
            <NavDropdown.Item eventKey="4.1">Golan hights</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Galil</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Jerusalem</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Tel Aviv</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Sea of galilee</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Eilat
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>

</Row> */}
</div>
);
}
export default About;