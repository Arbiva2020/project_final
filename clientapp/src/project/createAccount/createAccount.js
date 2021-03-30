import React from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import waterfall from "../../images/waterfall.jpg";
import "./createAccount.css";
import axios from "axios";

function CreateAccount(props) {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => axios.post('http://localhost:3001/createAccount', data);
  console.log(watch("example"));

  return (
    <div>
      <Row>
        <Col xs={7}>
            <h3 id="welcomeHeadline" style={{margin:"20px"}}>Thank you for joining our community!</h3>
            <div id="divCreate">
          <Form onSubmit={handleSubmit(onSubmit)} id="createForm">
            <Row style={{margin:"0px"}}>
            <Col>
            <div id="nameDiv">
              <Form.Control placeholder="First Name" id="nameInputB" name="First name" ref={register}/>
              <Form.Control placeholder="Last Name" id="nameInputC" name="Last name" ref={register}/>
              </div>
            </Col>
           </Row>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                <h6>Email:</h6>
              </Form.Label>
              <Col xs={7}>
                <Form.Control plaintext defaultValue="email@example.com" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                {errors.Email && <span>This field is required</span>}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                {/* Password */}
              </Form.Label>
              <Col xs={7}>
                <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true })}/>
                {errors.Email && <span>This field is required</span>}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                {/* Confirm password */}
              </Form.Label>
              <Col xs={7}>
                <Form.Control type="password" placeholder="confirm password" name="confirm password" ref={register({ required: true })}/>
                {errors.Email && <span>This field is required</span>}
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="inlineFormCheck"
              label="Remember me"
              ref={register}
            />
            <Button type="submit" className="mb-2" id="createButt">
              Create account
            </Button>
          </Form>
          </div>
        </Col>

        <Col xs={5}>
          <img src={waterfall} id="waterfallImg" class="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}
export default CreateAccount;
