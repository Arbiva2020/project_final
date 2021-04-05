import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  NavDropdown,
  Card,
} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import cardImage from "../../images/thenorthwest.jpg";
import "./productPage.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductCarousel from "./ProductCarousel";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
// import { useParams } from "react-router-dom";

function ProductPage(props) {
  const devUrl = "http://localhost:3001/images/";
  // let { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState({});
  console.log(props.product);
  let stars = [];
  // let product = props.product;
  for (let i = 0; i < product.rating; i++) {
    stars.push(
      <FontAwesomeIcon key={i} style={{ color: "yellow" }} icon={faStar} />
    );
  }
  let starsP = (
    <p>
      {stars.map((star) => (
        <>{star}</>
      ))}
    </p>
  );

  useEffect(() => {
    const getData = async () => {
      const products = await axios.get(
        `http://localhost:3001/products/products/${props.product}`
      );
      console.log(products.data);
      setProduct(products.data[0]);
    };
    getData();
  }, []);

  return (
    <Container className="page">
      <Row id="rowA">
        <Col>
          <Card className="bg-dark text-white" id="photoCard">
            <Card.Img src={`${devUrl}${product.img}`} alt="Card image" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row id="rowC">
        <Col lg="auto">
          <Card style={{ width: "40rem" }} id="siteCard">
            <Card.Body>
              <Card.Title id="cardTitle">
                <p className="font-weight-bold">{product.name}</p>
              </Card.Title>
              <Card.Text>
                <p className="font-weight-bold">Description:</p>{" "}
                {product.description}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">Number of days:</p>{" "}
                {product.days}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">Price per person:</p>{" "}
                {product.price}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">See & do:</p>{" "}
                {product.attractions}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">Rating (scaled 1-5):</p>{" "}
                {product.rating} <div>{starsP}</div>
              </Card.Text>
              <LinkContainer to="/reviewsAndRatings">
                <Card.Link>Read reviews</Card.Link>
              </LinkContainer>
              <LinkContainer to="/addReview">
                <Card.Link>Add review & rate</Card.Link>
              </LinkContainer>
            </Card.Body>
            <Button variant="secondary" size="lg" id="buttBook" href="/orderPage">
            BOOK NOW!
          </Button>
          </Card>
        </Col>

        <Col md="auto" id="imgCol" style={{ marginTop: "20px" }}>
          <div>
            <ProductCarousel product={product} />
          </div>

          <div >
            <Jumbotron id="shineJumbo"
              
              style={{
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: "black",
                margin: "20px",
                width: "100%",
                alignContent: "center",
              }}
            >
              <h1 style={{fontWeight:"bolder", color:"black"}}>50% OFF!!!</h1>
              <p style={{fontWeight:"bolder", color:"black"}}>
                On all camping gear and apparel for first timers! code: 2334
              </p>
              <p>
                <Button variant="primary">Go to store</Button>
              </p>
            </Jumbotron>
          </div>
        </Col>
      </Row>

      <Row id="rowD">
        <Col>
          <Button variant="secondary" size="md" id="buttBack" href="/">
            Back to homepage
          </Button>
        </Col>

        <Col>
          <NavDropdown style={{}} title="Select area" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Golan</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Galil</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Jerusalem</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Central Israel</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">South</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Eilat and Haarava
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Col>

        <Col>
          <Button variant="secondary" size="md" id="buttNextTrip">
            Load next
          </Button>
        </Col>
      </Row>
      <Row id="rowE">
        <Col>
          
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
