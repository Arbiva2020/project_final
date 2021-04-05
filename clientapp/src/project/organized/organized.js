import React from "react";
import { Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import family from "../../images/family.jpg";
import single from "../../images/single.jpg";
import extreme from "../../images/extreme.jpg";
import "./organized.css";

function OrganizedTrips(props) {
    const devUrl = "http://localhost:3001/images/";
  return (
    <div>
      <p>
        <h1 id="organizedTitle">Organized Trips:</h1>
      </p>
      <Row>
      <Col xs={4}><Card style={{ width: '18rem', margin:"20px", marginLeft:"50px" }}>
  <Card.Img variant="top" src={family} />
  <Card.Body>
    <Card.Title>Family trips</Card.Title>
    <Card.Text>
      Looking for some good time with your spouse and kids? you got to the right place!
      Here we offer you a huge veriaty of options, just call and get ready to pack!
      <br/> 1-700-700-fun
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>

      <Col xs={4}><Card style={{ width: '18rem', margin:"20px", marginLeft:"50px"  }}>
  <Card.Img variant="top" src={single} />
  <Card.Body>
    <Card.Title>Single package</Card.Title>
    <Card.Text>
      Who says you can't travel or hike alone? Of course you can! <br/>and while you are at it - 
      mayby you'll find the love of your life...  <br/> For more details, cal: <br/> 1-700-700-fun
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>

      <Col xs={4}><Card style={{ width: '18rem', margin:"20px", marginLeft:"50px"  }}>
  <Card.Img variant="top" src={extreme} />
  <Card.Body>
    <Card.Title>Going to extreme</Card.Title>
    <Card.Text>
      On "Travel Israel" we love taking thiungs to extreme. <br/> Join us to 
      a hole other level of pure fun and adrenaline! <br/> for 21 and above <br/> call:
      1-700-700-fun
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
</Row>
    </div>
  );
}
export default OrganizedTrips;
