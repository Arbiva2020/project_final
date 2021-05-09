import React, { useState, useEffect } from "react";
import {Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./accessibleTrips.css";

const places = [
    "Eilat",
    "Jerusalem",
    "galil",
    "Arava",
    "Golan hights",
    "sea of Galilee",
    "Tel-Aviv",
  ];

function AccessibleTrips(props) {
    const [productsArray, setProductsArray] = useState([]);
    const [errorMassage, setErrorMassage] = useState("");
    const [trueProducts, setTrueProducts] = useState("");
    // const [definedTrue, setDefinedTrue] = useState("");
    const devUrl = "http://localhost:3001";
    const [definedTrue, setDefinedTrue] = useState(
      places.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        []
      )
    );
  
    useEffect(async () => {
      try {
        const res = await axios("http://localhost:3001/products");
        console.log(res.data);
        setProductsArray(res.data);
      } catch (error) {
        console.log(error);
        setErrorMassage(error.Error);
      }
    }, []);
  
    const handleTrueChange = (e) => {
      const { accessability } = e.target;
      setDefinedTrue({ ...definedTrue, [accessability]: !definedTrue[accessability] });
    };
  
    const handleClick = (e) => {
        e.preventDefault();
        setTrueProducts(
          Object.keys(definedTrues).filter((definedTrue) => definedTrues[definedTrue])
        );
      };
    
      const relevantProducts = productsArray.filter(({ accessability }) =>
        checkedProducts
          .map((definedTrue) => definedTrue.toUpperCase())
          .includes(accessability.toUpperCase())
      );
      
return(
<div>
 <p><h1>Accessible Trips:</h1></p>
 <Col xs={8} className="flex">
          {trueProducts.length !== 0
            ? relevantProducts.map((product, index) => (
                <div key={index}>
                  <Card
                    style={{ width: "18rem", height: "40rem" }}
                    id="siteCard"
                  >
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
                      <ListGroupItem>
                        Total price: {product.price}
                      </ListGroupItem>
                      <ListGroupItem>duration: {product.days}</ListGroupItem>
                      <ListGroupItem>
                        Rating out of 5: {product.rating}
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <LinkContainer to={`/productPage`}>
                        <Button
                          onClick={() => {
                            props.toProductPage(props.product.id);
                            
                              // {updateView();};
                            
                          }}
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
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          color: "gray",
                        }}
                      />
                      <a>{views}</a>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : productsArray.map((product, index) => (
                <div key={index}>
                  <Card
                    style={{ width: "18rem", height: "40rem" }}
                    id="siteCard"
                  >
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
                      <ListGroupItem>
                        Total price: {product.price}
                      </ListGroupItem>
                      <ListGroupItem>duration: {product.days}</ListGroupItem>
                      <ListGroupItem>
                        Rating out of 5: {product.rating}
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <LinkContainer to={`/productPage`}>
                        <Button
                          onClick={() => {
                            props.toProductPage(product.id);
                            
                            // {updateView();}; 
                            
                          }}
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
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          color: "gray",
                        }}
                      />
                      <a>{views}</a>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </Col>

</div>
);
}
export default AccessibleTrips;