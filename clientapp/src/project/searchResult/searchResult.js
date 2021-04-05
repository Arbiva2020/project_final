import React, { useState, useEffect } from "react";
import {
  Col,
  Card,
  Row,
  Button,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./searchResult.css";

function SearchResult(props) {
  const [productsArray, setProductsArray] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [errorMassage, setErrorMassage] = useState("");
  const [filterdisplay, setfilterDisplay] = useState([]);
  const { searchParam } = useParams();
  const devUrl = "http://localhost:3001/images/";

  useEffect(async () => {
    console.log(searchParam);
    try {
      // let keyword = "kids";
      const res = await axios(
        `http://localhost:3001/products/search/${searchParam}`
      );
      console.log(res.data);
      setProductsArray(res.data);
    } catch (error) {
      // console.log(error);
      setErrorMassage(error.Error);
    }
  }, []);

  return (
    <Row id="titleRow">
      <h1 id="searchTitle">Where you looking for this?</h1>
      <Col xs={2}></Col>
      <Col xs={8} className="flex">
        {productsArray.length !== 0
          ? productsArray.map((product, index) => (
              <div key={index}>
                <Card style={{ width: "18rem", height: "40rem" }} id="siteCard">
                  <Card.Img variant="top" src={`${devUrl}${product.img}`} />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Total price: {product.price}</ListGroupItem>
                    <ListGroupItem>duration: {product.days}</ListGroupItem>
                    <ListGroupItem>
                      Rating out of 5: {product.rating}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <LinkContainer to={`/productPage`}>
                      <Button
                        onClick={() => props.toProductPage(product.id)}
                        id="showSiteButt"
                        style={{
                          backgroundColor: "lightgray",
                          borderStyle: "solid",
                          borderColor: "black",
                          color: "black",
                        }}
                      >
                        Show product
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </div>
            ))
          : productsArray.map((product, index) => (
              <div key={index}>
                <Card style={{ width: "18rem", height: "40rem" }} id="siteCard">
                  <Card.Img
                    variant="top"
                    src={`${devUrl}/images/${product.img}`}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Total price: {product.price}</ListGroupItem>
                    <ListGroupItem>duration: {product.days}</ListGroupItem>
                    <ListGroupItem>
                      Rating out of 5: {product.rating}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <LinkContainer to={`/productPage`}>
                      <Button
                        onClick={() => props.toProductPage(product.id)}
                        id="showSiteButt"
                        style={{
                          backgroundColor: "lightgray",
                          borderStyle: "solid",
                          borderColor: "black",
                          color: "black",
                        }}
                      >
                        Show product
                      </Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </Col>
      <Col xs={2}></Col>
    </Row>
  );
}

export default SearchResult;
