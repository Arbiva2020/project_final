import React from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import mailImg from "../../images/6a2b622b2030c6aeeec62c015dac1f5f.jpg";
import "./mailMe.css";

function MailMe(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
    <div>
      <Row>
        <Col xs={7}>
          <h3 id="mailMeh3">Thank you for choosing us!</h3>
          <h5 id="mailMeh5">We guarantee minimum updates necessary</h5>
          <Form onSubmit={handleSubmit(onSubmit)} id="keepMePosted">
            <Form.Row>
              <Col xs={3}>
                <Form.Control as="select" className="mr-sm-2" ref={register}>
                  <option value="0">Honorific</option>
                  <option value="1">Mr.</option>
                  <option value="2">Miss.</option>
                  <option value="3">Mrs.</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  placeholder="First Name"
                  input
                  type="text"
                  name="first Name"
                  ref={register({ required: true })}
                />
                {errors.Email && <span>This field is required</span>}
              </Col>
              <Col>
                <Form.Control
                  placeholder="Last Name"
                  input
                  type="text"
                  name="last Name"
                  ref={register({ required: true })}
                />
                {errors.Email && <span>This field is required</span>}
              </Col>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                input
                name="phone number"
                placeholder="05X-XXXXXXX"
                type="number"
                ref={register}
              />
              <Form.Label></Form.Label>
              <Form.Control
                input
                name="adress"
                ref={register({ required: true })}
                placeholder="Adress"
              />
              {errors.Email && <span>This field is required</span>}
            </Form.Group>

            <Form.Row>
              <Col xs={7}>
                <Form.Control
                  placeholder="City"
                  input
                  name="city"
                  ref={register({ required: true })}
                />
                {errors.Email && <span>This field is required</span>}
              </Col>
              <Col>
                <Form.Control
                  placeholder="State"
                  input
                  name="state"
                  ref={register({ required: true })}
                />
                {errors.Email && <span>This field is required</span>}
              </Col>
              <Col>
                <Form.Control
                  placeholder="Zip"
                  input
                  name="zip"
                  ref={register}
                />
              </Col>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="name@example.com"
                type="text"
                name="Email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.Email && <span>This field is required</span>}
            </Form.Group>

            <Button id="postedButt" type="submit">
              Keep me posted!
            </Button>
          </Form>
        </Col>

        <Col xs={5} id="mailMeimgcol">
          <Card className="mailMeCard">
            <Card.Img src={mailImg} alt="Card image" id="mailingImg" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default MailMe;
