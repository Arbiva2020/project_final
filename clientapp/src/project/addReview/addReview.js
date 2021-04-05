import React from "react";
import { useForm } from "react-hook-form";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import Yarkon from "../../images/yarkonPark.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./addReview.css";

function AddReview(props) {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

  return (
    <div>
      <Row>
        <Col xs={7}>
          <p>
            <h3 id="addReviweTitle">Share thoughts of your own!</h3> 
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Form.Control placeholder="First name" name="FirstName" ref={register}/>
                {errors.FirstName && <span>This field is required</span>}
              </Col>
              <Col>
                <Form.Control placeholder="Last name" name="LastName" ref={register}/>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
              {errors.Email && <span>This field is required</span>}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label></Form.Label>
              <Form.Control rows={3} placeholder="Add review" as="textarea"  name="add review" ref={register}/>
            </Form.Group>
         

          <h5 id="rateReview">Select rating:</h5>
          <span style={{ margin: "7px" }}>
            <input
              type="radio"
              id="one"
              name="drone"
              ref={register}
            />
            <label for="huey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>

          <span style={{ margin: "7px" }}>
            <input type="radio" id="two" name="drone" ref={register}/>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>

          <span style={{ margin: "7px" }}>
            <input type="radio" id="three" name="drone" ref={register}/>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>

          <span style={{ margin: "7px" }}>
            <input type="radio" id="four" name="drone" ref={register}/>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>

          <span style={{ margin: "7px" }}>
            <input type="radio" id="five" name="drone" ref={register}/>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>
         
          
            <Button type="submit"
              style={{
                backgroundColor: "gray",
                borderStyle: "solid",
                borderColor: "black",
                margin: "20px"
              }}
            >
              Add review
            </Button>
          </Form>
        </Col>

        <Col xs={5} id="imgColAddRev">
          <div>
          <img src={Yarkon} id="yarkonImg" class="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default AddReview;
