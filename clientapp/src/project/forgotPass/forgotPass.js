import React from "react";
import { useForm } from "react-hook-form";
import {Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import PasswordImg from "../../images/password2312.jpg";
import "./forgotPass.css";


function ForgotPass(props) {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

return(
<div>
 <p><h3 id="createh3">Create new password:</h3></p>
 <Row>
 <Col xs={7} id="newPassCol">
 <Form onSubmit={handleSubmit(onSubmit)} name="forgot form" id="forgotPassForm">
  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="email@example.com" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
      {errors.Email && <span>This field is required</span>}
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" name="new password" placeholder="New password" ref={register({ required: true })}/>
      {errors.Email && <span>This field is required</span>}
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" name="confirm password" placeholder="Confirm password" ref={register({ required: true })}/>
      {errors.Email && <span>This field is required</span>}
    </Col>
  </Form.Group>
  <Form.Check id="newCheck"
              type="checkbox"
              className="mb-2 mr-sm-2"
              label="Remember me"
              name="remmember"
              ref={register}
            />
</Form>
<Button id="newPassBtn" type="submit">Confirm</Button>
</Col>

<Col xs={5}>
          <img src={PasswordImg} id="passImg" class="img-fluid" />
        </Col>
        </Row>
</div>
);
}
export default ForgotPass;