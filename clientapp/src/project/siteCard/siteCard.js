import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  Row,
  Button,
  Col,
  Container,
  DropdownButton,
  Nav,
  Dropdown,
} from "react-bootstrap";
import "./siteCard.css";
import cardImage from "../../images/thenorthwest.jpg";
import rentImg from "../../images/hire-car-santorini.jpg";
import campImg from "../../images/3040260106.jpg";
import aidImg from "../../images/first-aid-kit-concept-vector.jpg";
import trainImg from "../../images/Flag_of_Israel_Railways.svg.jpg";
import eggedImg from "../../images/4846962.jpg";
import metroImg from "../../images/יהיה-בסדר-מטרופולין.jpg";
import israImg from "../../images/z1g5npkm.4kg.jpg";
import axios from "axios";

// handle upper and lower case
const places = [
  "Eilat",
  "Jerusalem",
  "galil",
  "Arava",
  "Golan",
  "sea of Galilee",
  "Tel-Aviv",
];



function SiteCard(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const startDate = new Date();
  // const endDate = new Date();
  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = (differenceInTime) / (1000 * 3600 * 24);

  const handleStartChange = (e) => {
    const startDate  = e.target;
    setStartDate({ ...startDate, [e.target.startDate]: e.target.value });
  };

  const handleEndChange = (e) => {
    const endDate  = e.target;
    setEndDate({ ...endDate, [e.target.endDate]: e.target.value });
  };


  const [productsArray, setProductsArray] = useState([]);
  const [errorMassage, setErrorMassage] = useState("");
  const devUrl = "http://localhost:3001";
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [checkboxes, setCheckboxes] = useState(
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

  const handleChange = (e) => {
    const { name } = e.target;
    setCheckboxes({ ...checkboxes, [name]: !checkboxes[name] });
  };

  function sortByRating() {
    console.log("rating");
    const sortArrayByRating = productsArray.sort(
      (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
    );
    setProductsArray([...sortArrayByRating]);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setCheckedProducts(
      Object.keys(checkboxes).filter((checkbox) => checkboxes[checkbox])
    );
  };

  const relevantProducts = productsArray.filter(({ name }) =>
    checkedProducts
      .map((checkedName) => checkedName.toUpperCase())
      .includes(name.toUpperCase())
  );

  return (
    <Container>
      <LinkContainer to="/store" id="storeLinkContainer">
        <Nav.Link>
          Need camping equipment? Hiking gear? visit our store today!
        </Nav.Link>
      </LinkContainer>
      <Row>
        <Col xs={2} id="check">
          <Form>
            <Form.Label>
              <h5
                style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}
              >
                Select:
              </h5>
            </Form.Label>
            {places.map((place) => (
              <Form.Check
                type="checkbox"
                label={place}
                name={place}
                id=""
                onChange={handleChange}
              />
            ))}
            <button id="filterCheck" onClick={handleClick}>
              Filter
            </button>
          </Form>

          <div>
            <h6>Available offers by date:</h6>
            <label for="start" style={{ marginTop: "20px" }}>
              Arrival date:
            </label>
            <input onChange={handleStartChange}
              type="date"
              id="start"
              name="trip-start"
            />

            <label for="end" style={{ marginTop: "20px" }}>
              Departure date:
            </label>
            <input onChange = {handleEndChange}
              type="date"
              id="end"
              name="trip-end"
            />

            <Button 
              type="submit"
              style={{
                backgroundColor: "gray",
                borderStyle: "solid",
                borderColor: "black",
                marginTop: "20px",
              }} onClick={() => alert(`You were searching for a ${num} days vaccation. Sites available on this date are: "Red sea Hotel", Eilat`)}
            >
              HIT ME!
            </Button>
          </div>

          <div id="transportation">
            <p>
              <h5
                style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}
              >
                Transportation:
              </h5>
            </p>
            <Card className="transportation">
              <Card.Link href="https://www.egged.co.il/">
                <Card.Img src={eggedImg} alt="Card image" />
              </Card.Link>
            </Card>
            <Card className="transportation">
              <Card.Link href="https://www.rail.co.il/">
                <Card.Img src={trainImg} alt="Card image" />
              </Card.Link>
            </Card>
            <Card className="transportation">
              <Card.Link href="https://www.metropoline.com/Pages/Home.aspx?p=Home#/HomeMain/1">
                <Card.Img src={metroImg} alt="Card image" />
              </Card.Link>
            </Card>
            <Card className="transportation">
              <Card.Link href="https://www.israir.co.il/">
                <Card.Img src={israImg} alt="Card image" />
              </Card.Link>
            </Card>
          </div>
        </Col>

        <Col xs={8} className="flex">
          {checkedProducts.length !== 0
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
                      <Card.Title style={{fontWeight:"bold"}}>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Total price: {product.price}</ListGroupItem>
                      <ListGroupItem>duration: {product.days}</ListGroupItem>
                      <ListGroupItem>Rating out of 5: {product.rating}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <LinkContainer to={`/productPage`}>
                    <Button
                          onClick = {() => props.toProductPage(props.product.id)}
                          id="showSiteButt"
                          style={{
                            backgroundColor: "lightgray",
                            borderStyle: "solid",
                            borderColor: "black",
                            color:"black",
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
                  <Card
                    style={{ width: "18rem", height: "40rem" }}
                    id="siteCard"
                  >
                    <Card.Img
                      variant="top"
                      src={`${devUrl}/images/${product.img}`}
                    />
                    <Card.Body>
                      <Card.Title style={{fontWeight:"bold"}}>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Total price: {product.price}</ListGroupItem>
                      <ListGroupItem>duration: {product.days}</ListGroupItem>
                      <ListGroupItem>Rating out of 5: {product.rating}</ListGroupItem>
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
                            color:"black",
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

        <Col xs={2} id="filterByPrice">
          <Form style={{ textAlign: "left" }}>
            <h5
              id="sortByPrice"
              style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}
            >
              Filter by price:
            </h5>
            <Form.Check
              type="checkbox"
              label="1000-2000"
              className="priceLevel"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="2000-3000"
              className="priceLevel"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="3000-4000"
              className="priceLevel"
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="4000-5000"
              className="priceLevel"
              onChange={handleChange}
            />
            <Form.Check type="checkbox" label="All" className="priceLevel" />
            <Button id="filterRating">
              Filter
            </Button>
          </Form>

          <div style={{ textAlign: "left" }}>
            <div>
              <p>
                <h5
                  id="ratingHeadline"
                  style={{
                    fontFamily: "Georgia, Times New Roman, Times, serif",
                    textAlign: "left",
                  }}
                >
                  Select rating:
                </h5>
              </p>
              <input type="radio" id="one" name="drone" />
              <label for="huey">
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </label>
            </div>
            <div>
              <input type="radio" id="two" name="drone" />
              <label for="dewey">
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </label>
              <label for="dewey">
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </label>
            </div>
            <div>
              <input type="radio" id="three" name="drone" />
              <label for="dewey">
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </label>
              <label for="dewey">
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </label>
              <label for="dewey">
                <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
              </label>
            </div>
            <div>
              <input type="radio" id="four" name="drone" />
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
            </div>
            <div>
              <input type="radio" id="five" name="drone" />
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
            </div>
          </div>

          <div id="byRating">
            <Button onClick={sortByRating} id="sort">
              {" "}
              Sort
            </Button>
          </div>

          <DropdownButton id="dropdown-item-button" title="Kitchen & diet:">
            <Dropdown.ItemText>Nutrition:</Dropdown.ItemText>
            <Dropdown.Item as="button">All</Dropdown.Item>
            <Dropdown.Item as="button">Kosher only</Dropdown.Item>
            <Dropdown.Item as="button">Vegeterian food</Dropdown.Item>
            <Dropdown.Item as="button">Vegan food</Dropdown.Item>
          </DropdownButton>

          <Form.Control
            as="select"
            className="mr-sm-2"
            id="ratingSelect"
            custom
          >
            <option value="0">Select</option>
            <option value="1">Hotel</option>
            <option value="2">Bed & breakfast</option>
            <option value="3">Camping</option>
          </Form.Control>

          <div>
            <h5>Our special offers:</h5>
          </div>
          <Card className="bg-darkA" id="rent">
            <Card.Img src={rentImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ color: "white" }}>Hire a car!</Card.Title>
              <Card.Text style={{ color: "white", textAlign: "bottom" }}>
                Contact us for a deal!
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-darkA" id="camp">
            <Card.Img src={campImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ color: "white" }}>Camping?</Card.Title>
              <Card.Text style={{ color: "white" }}>
                Call now for a deal!
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-darkA" id="aid">
            <Card.Img src={aidImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title
                style={{ color: "black", textAlign: "top", fontWeight: "bold" }}
              >
                Need an insurance?
              </Card.Title>
              <Card.Text
                style={{
                  color: "black",
                  textAlign: "bottom",
                  fontWeight: "bold",
                }}
              >
                Contact us
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default SiteCard;
