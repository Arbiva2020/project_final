import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Col, Row, Img, Button, Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./contactUs.css";
import callImg from "../../images/s-l400.jpg";

function ContactUs(props) {
  let [form, setForm] = useState(Form);
  function updateForm() {
    let name = document.getElementById("nameInput").value;
    setForm(name);
  }

  const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = "template_vtx6pr9";
    const serviceID = "final_project";
    sendFeedback(serviceID, templateId, {
      from_name: data.name,
      message: data.comment,
      reply_to: data.email,
    });
    r.target.reset();
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <div>
      <Row>
        <Col xs={7}>
          <h2 id="h2contact">Let's talk.</h2>
          <h1 id="h1contact">You first.</h1>
          <Form onSubmit={handleSubmit(onSubmit)} id="contact">
            <Form.Row>
              <Col xs={3}>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  custom
                  ref={register}
                  id="inlineFormCustomSelect"
                >
                  <option name="Honorific" ref={register}>
                    Honorific...
                  </option>
                  <option value="Mr.">Mr.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="Mrs.">Mrs.</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control
                  placeholder="First Name"
                  id="nameInput"
                  name="firstName"
                  ref={register}
                />
                {errors.Email && <span>This field is required</span>}
              </Col>
              <Col>
                <Form.Control
                  placeholder="Last Name"
                  name="LastName"
                  ref={register}
                />
                {errors.Email && <span>This field is required</span>}
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="05X-XXXXXXX"
                input
                name="phone number"
                type="number"
                ref={register}
              />
              <Form.Label></Form.Label>
              <Form.Control placeholder="Adress" name="Adress" ref={register} />
            </Form.Group>

            <Form.Row>
              <Col xs={7}>
                <Form.Control placeholder="City" name="City" ref={register} />
              </Col>
              <Col>
                <Form.Control placeholder="State" name="State" ref={register} />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" name="Zip" ref={register} />
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="name@example.com"
                type="text"
                name="Email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.Email && <span>This field is required</span>}
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What can we do for U?</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="What can we do for U?"
                name="textextra"
                ref={register}
              />
            </Form.Group>

            <Button type="submit" id="contactButt">
              Submit
            </Button>
          </Form>
        </Col>

        <Col xs={5}>
          <Card className="callUsCard">
            <Card.Img src={callImg} alt="Card image" id="callUsImg" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ContactUs;

// {"thank you for contacting us!"}
