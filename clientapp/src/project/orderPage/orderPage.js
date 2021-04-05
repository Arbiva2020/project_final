import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Col, NavDropdown, Row, Form } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./orderPage.css";

function OrderPage(props) {
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
    const templateId = "template_lpt54ou";
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
      <p>
        <h1 id="headlineOrder">Tank you for choosing to travel with us!</h1>
      </p>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control as="select">
                  <option name="Honorific" ref={register}>
                    Honorific...
                  </option>
                  <option value="Mr.">Mr.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="Mrs.">Mrs.</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control ref={register} placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control ref={register} placeholder="Last Name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control ref={register} placeholder="Phone Number" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Control placeholder="Adress" ref={register} />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  ref={register}
                >
                  <option>Adults</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  ref={register}
                >
                  <option>Children</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5 and up</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <h6 style={{ fontWeight: "bold" }}>Services required:</h6>
            </Form.Row>
            <Form.Row>
              <Form.Check
                style={{ margin: "20px" }}
                label="Car rental"
                ref={register}
              />
              <Form.Check
                style={{ margin: "20px" }}
                label="Travel insurance"
                ref={register}
              />
              <Form.Check
                style={{ margin: "20px" }}
                label="Accessability services"
                ref={register}
              />
              <Form.Check
                style={{ margin: "20px" }}
                label="Baby crib"
                ref={register}
              />
              <Form.Check
                style={{ margin: "20px" }}
                label="Kosher restrictions"
                ref={register}
              />
            </Form.Row>

            <Form.Row style={{ margin: "20px" }}>
              <h6 style={{ fontWeight: "bold", textAlign: "left" }}>
                Available offers by date:
              </h6>
            </Form.Row>
            <Form.Row style={{ lineHeight: "10px" }}>
              <label for="start" style={{ margin: "20px", padding: "0px" }}>
                Arrival date:
              </label>
              <input type="date" id="start" name="trip-start" ref={register} />

              <label for="end" style={{ margin: "20px", padding: "0px" }}>
                Departure date:
              </label>
              <input type="date" id="start" name="trip-start" ref={register} />
            </Form.Row>

            <Form.Group style={{ margin: "30px" }}>
              <Form.Check
                type="checkbox"
                label="I agree to recive updates"
                style={{ alignItems: "left" }}
                ref={register}
              />
            </Form.Group>

            <Button
              type="submit"
              style={{
                margin: "20px",
                backgroundColor: "gray",
                color: "black",
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px",
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </div>
  );
}
export default OrderPage;
