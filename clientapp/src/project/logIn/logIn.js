import React from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Col, Form, Row, Nav } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import deer from "../../images/3733725672.jpg";
import "./logIn.css";
import axios from 'axios';
// import storeProvider from "./storeProvider";


function LogIn(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div>
      <Row>
        <Col xs={7} id="logInCol">
          <p>
        <h3 id="h3login">Log In:</h3>
      </p>
          <Form onSubmit={handleSubmit(onSubmit)} id="logInForm">
            <Form.Group controlId="formBasicEmail" style={{ margin: "20px" }}>
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="Email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {errors.Email && <span>This field is required</span>}

            <Form.Group
              controlId="formBasicPassword"
              style={{ margin: "20px" }}
            >
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: true })}
              />
            </Form.Group>
            {errors.Email && <span>This field is required</span>}
            <Row>
              <Nav.Link
                id="navForgot"
                style={{ color: "gray", margin: "20px" }}
                href="/forgotPass"
              >
                forgot password?
              </Nav.Link>
              <Nav.Link
                href="/createAccount"
                style={{ color: "gray", margin: "20px" }}
              >
                Create New Account
              </Nav.Link>
            </Row>
            <Form.Group
              controlId="formBasicCheckbox"
              style={{ margin: "20px" }}
            >
              <Form.Check type="checkbox" label="Remember me" name="log in" ref={register} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ margin: "20px" }}>
              Log in
            </Button>
            <div></div>
          </Form>
        </Col>

        <Col xs={5} id="deerImgCol">
          <img src={deer} id="deerLog" />
        </Col>
      </Row>
    </div>
  );
}
export default LogIn;
