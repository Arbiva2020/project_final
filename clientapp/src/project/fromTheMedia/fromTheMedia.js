import React, { useState } from "react";
import { Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import JerusalemMedia from "../../images/Jerusalem_Southern_Walls_1.jpg";
import "./fromTheMedia.css";

// const[showHoverContent, setShowHoverContent] = useState(false);

// function changeBackground(e) {
//   e.target.style.background = 'red';
// }

function FromTheMedia(props) {
  return (
    <div id="mediaDiv">
      <Card>
        <Card.Img id="jerusalemMediaImg" variant="top" src={JerusalemMedia} />
        <Card.Body id="mediaCardBody">
          <Card.Text>
            <h3 id="fromMediah3">From the media:</h3>
          </Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <Card
          className="press"
          border="secondary"
          style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
        >
          <Card.Body>
            <Card.Title>NO.1 travel site!</Card.Title>
            <Card.Text>
              "True proffesionals. Each and every detail was taken into account.
              We had the time of our lives"
            </Card.Text>
          </Card.Body>
          <Card.Footer>Afula Times</Card.Footer>
        </Card>

        <Card
          className="press"
          border="secondary"
          style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
        >
          <Card.Body>
            <Card.Title>The best vaccation we ever had!</Card.Title>
            <Card.Text>
              "No doubt you are dealling with people how know the job!"
            </Card.Text>
          </Card.Body>
          <Card.Footer>Beer-Sheva tribune</Card.Footer>
        </Card>

        <Card
          className="press"
          border="secondary"
          style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
        >
          <Card.Body>
            <Card.Title>the time of our lives!</Card.Title>
            <Card.Text>
              "Looking for proffesionals? This is the website for you."
            </Card.Text>
          </Card.Body>
          <Card.Footer>Yediot Dimona</Card.Footer>
        </Card>

        <Card
          className="press"
          border="secondary"
          style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
        >
          <Card.Body>
            <Card.Title>NO.1 travel site!</Card.Title>
            <Card.Text>
              "All was perfect. traveling, hiking - and an amazing gear orderd from
              the website, that was just great!"
            </Card.Text>
          </Card.Body>
          <Card.Footer>Mizpe Express</Card.Footer>
        </Card>

        <Card
          className="press"
          border="secondary"
          style={{ width: "18rem", marginLeft: "10px", marginRight: "10px" }}
        >
          <Card.Body>
            <Card.Title>Lokking for the best offer?</Card.Title>
            <Card.Text>
              ""travel Israel" is just the site for you"
            </Card.Text>
          </Card.Body>
          <Card.Footer>Maariv Arad</Card.Footer>
        </Card>
      </Row>
      <br />
    </div>
  );
}
export default FromTheMedia;
