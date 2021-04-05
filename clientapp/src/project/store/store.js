import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
  Col,
  Nav,
  NavDropdown,
  Dropdown,
  CardImg,
} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { LinkContainer } from "react-router-bootstrap";
import tentImg from "../../images/3466701071.jpg";
import columbia from "../../images/columbia.jpg";
import marmot from "../../images/marmot.jpg";
import tatanka from "../../images/tatanka.jpg";
import thenorthface from "../../images/thenorthface.jpg";
import jackwolfskin from "../../images/jackwolfskin.jpg";
import levis from "../../images/levis.jpg";
import nike from "../../images/nike.jpg";
import hikingImg from "../../images/CampingHiking.jpg";
import manInForest from "../../images/manInForest.jpg";
import manInForest2 from "../../images/manInForest2.jpg";
import coupleClothing from "../../images/coupleClothing.jpg";
import "./store.css";
import axios from "axios";
// import { useContext } from 'react';
// import { StoreProviderContext } from './StoreProvider-context'

function Store(props) {
  const [itemsArray, setItemsArray] = useState([]);
  const [showHoverContent, setShowHoverContent] = useState(false);
  console.log(itemsArray);
  const [errorMassage, setErrorMassage] = useState("");
  const devUrl = "http://localhost:3001";
  let { filter } = useParams();

  useEffect(() => {
    const sortedItems = async () => {
      const items = filter
        ? await axios.get(`http://localhost:3001/items/${filter}`)
        : await axios.get(`http://localhost:3001/items`);
      console.log(items.data);
      setItemsArray(items.data);
    };
    sortedItems();
  }, []);

  return (
    <div>
      <Row>
        <Nav
          id="headNavStore"
          className="justify-content"
          activeKey="/home"
          style={{ width: "100%" }}
        >
          <Nav.Item className="itemStore">
            <Nav.Link href="/store/All" style={{ color: "black" }}>
              All products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link href="/store/hiking" style={{ color: "black" }}>
              Hiking
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link href="/store/camping" style={{ color: "black" }}>
              Camping
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/store/sale" className="itemStore">
            <Nav.Link style={{ color: "black" }}> SALE! </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Filter by" id="storeNav">
            <NavDropdown.Item href="/store/Men's apparel">
              Men's apparel
            </NavDropdown.Item>
            <NavDropdown.Item href="/store/Women's apparel">
              Women's apparel
            </NavDropdown.Item>
            <NavDropdown.Item href="/store/Tents">Tents</NavDropdown.Item>
            <NavDropdown.Item href="/store/Knives">Knifes</NavDropdown.Item>
            <NavDropdown.Item href="/store/Leasure">Leasure</NavDropdown.Item>
            <NavDropdown.Item href="/store/Shoes">Shoes</NavDropdown.Item>
            <NavDropdown.Item
              href="/store/All"
              style={{ textWidth: "bold", color: "gray" }}
            >
              All products
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Row>

      <Row>
        <Card className="bg-dark text-white" style={{ width: "100%" }}>
          <Card.Img
            src={hikingImg}
            style={{
              height: "20rem",
              objectFit: "cover",
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "black",
            }}
            alt="Card image"
          />
        </Card>
      </Row>

      <h3 id="productsHeadline">Our products:</h3>

      <Row>
        <Col xs={2}>
          <Card className="apparel">
            <Card.Img src={columbia} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={marmot} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={tatanka} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={thenorthface} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={jackwolfskin} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={levis} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={nike} alt="Card image" />
          </Card>
        </Col>

        <Col xs={8}>
          <Row>
            <Col className="flex">
              {itemsArray.map((item, index) => (
                <div key={index}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "500px",
                      alignItems: "center",
                    }}
                    id="storeCard"
                  >
                    <Card.Img
                      style={{ width: "10rem", height: "200px" }}
                      variant="top"
                      src={`${devUrl}/images/${item.img}`}
                      // src={devUrl}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {item.name}
                      </Card.Title>
                      <Card.Text>{item.shortDescription}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        Price: {item.price}NIS Status: {item.avaliability}
                      </ListGroupItem>
                      {/* <ListGroupItem></ListGroupItem> */}
                    </ListGroup>
                    <Card.Body>
                      <LinkContainer to={`/singleItem/${item._id}`}>
                        <Button
                          onClick={() => props.toSingleItem(item.id)}
                          id="showProductButt"
                          style={{
                            backgroundColor: "gray",
                            borderStyle: "solid",
                            borderColor: "black",
                          }}
                        >
                          Show product
                        </Button>
                      </LinkContainer>
                      <Card.Link href="#"></Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <Card
            className="bg-dark text-white"
            style={{
              width: "auto",
              height: "200px",
              marginRight: "20px",
              align: "top",
            }}
            onMouseEnter={() => setShowHoverContent(true)}
            onMouseLeave={() => setShowHoverContent(false)}
          >
            <Card.Img
              src={manInForest}
              style={{ height: "20rem" }}
              alt="Card image"
            />
          </Card>
          {showHoverContent && (
            <Card
              id="hoverBox"
              style={{ alignContent: "top" }}
              border="dark"
              style={{
                width: "auto",
                height: "400px",
                marginRight: "20px",
                alignItems: "top",
              }}
            >
              <Card.Header>Tip</Card.Header>
              <Card.Body>
                <Card.Title>Holidays are comming!</Card.Title>
                <Card.Text>
                  Some of our finest products are waiting just for you. Checkout
                  our sales!
                </Card.Text>
              </Card.Body>
            </Card>
          )}

          <Card
            className="bg-dark text-white"
            style={{
              width: "auto",
              height: "200px",
              marginRight: "20px",
              marginTop: "150px",
            }}
            onMouseEnter={() => setShowHoverContent(true)}
            onMouseLeave={() => setShowHoverContent(false)}
          >
            <Card.Img
              src={manInForest2}
              style={{ height: "20rem" }}
              alt="Card image"
            />
          </Card>

          <Card
            className="bg-dark text-white"
            style={{
              width: "auto",
              height: "200px",
              marginRight: "20px",
              marginTop: "150px",
            }}
            onMouseEnter={() => setShowHoverContent(true)}
            onMouseLeave={() => setShowHoverContent(false)}
          >
            <Card.Img
              src={coupleClothing}
              style={{ height: "20rem" }}
              alt="Card image"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Store;
