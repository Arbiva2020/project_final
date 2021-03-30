import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Card, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import Hiring from "../../images/Hiring.jpg";
import "./weAreHiring.css";

function AlertAvailable() {

    

  return (
    <div>
        <Row>
        <Col xs={1}></Col>

      <Col xs={8}>
        <Row>
          <h2 style={{ display: "block" }}>We Are looking for you!</h2>
        </Row>
        <Row>
          <h3>To become a part of our team</h3>
        </Row>
        <Row style={{marging:"40px"}}>
          <Card style={{ width: "18rem", marging:"40px" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/contactUs">Apply for job</Card.Link>
              <Card.Link href="#">Send to a friend</Card.Link>
            </Card.Body>
          </Card>
        </Row>
      </Col>

      <Col xs={2}>
      <img src={Hiring} img class="swing" id="hiringImg" style={{width:"300px"}}/>
      </Col>
      </Row>
    </div>
  );
}
export default alertAvailable;
