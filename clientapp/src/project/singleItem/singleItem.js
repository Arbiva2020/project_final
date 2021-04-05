import React, { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Row,
  Button,
  Col,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./singleItem.css";
import axios from "axios";
import { StoreProviderContext } from "../storeProvider/storeProvider";

function SingleItem(props) {
  const [storeProvider, updateStoreProvider] = useContext(StoreProviderContext);
  let [count, setCount] = useState(0);
  const [catItems, setCatItems] = useState([]);
  const [itemsArray, setItemsArray] = useState([props.items]);
  const [item, setItem] = useState({});
  const [upload, setUpload] = useState(true);
  const [oneItem, setOneItem] = useState();
  const devUrl = "http://localhost:3001/images/";
  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const items = await axios.get(`http://localhost:3001/items/item/${id}`);
      console.log(items);
      const catItems = await axios.get(
        `http://localhost:3001/items/${items.data[0]?.category}`
      );

      console.log(catItems.data);
      setCatItems(catItems.data);
      setItem(items.data[0]);
    };
    getData();
  }, []);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Row>
        <Col xs={3} style={{ justifyContent: "center", marginTop: "20px" }}>
          <Card
            style={{ width: "10rem", height: "8rem" }}
            className="sideImgCard"
            id="itemSingle"
          >
            <Card.Img id="img0" variant="top" src={`${devUrl}${item.img}`} />
          </Card>
          <Card
            style={{ width: "10rem", height: "8rem", marginTop: "20px" }}
            className="sideImgCard"
          >
            <Card.Img
              id="img1"
              variant="top"
              src={`${devUrl}${item.addImg1}`}
            />
          </Card>
        </Col>

        <Col xs={6} id="colItem">
          <Card style={{ width: "40rem", height: "30rem" }} id="itemImgCard">
            <Card.Img
              variant="top"
              id="img2"
              src={`${devUrl}${item.addImg2}`}
            />
          </Card>
          <Card style={{ width: "20rem", height: "30rem" }} id="itemDetailCard">
            <Card.Body>
              <Card.Title id="singleTitle">{item.name}</Card.Title>
              <Card.Text>{item.longDescription}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>price: {item.price}NIS</ListGroupItem>

                <ButtonGroup aria-label="Basic example" id="quantity">
                  <Button
                    variant="secondary"
                    onClick={removeCount}
                    className="quanSelectors"
                  >
                    -1
                  </Button>
                  <Button
                    variant="secondary"
                    disabled
                    className="quanSelectors"
                  >
                    {count}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={addCount}
                    className="quanSelectors"
                  >
                    +1
                  </Button>
                </ButtonGroup>
                <Card.Link
                  href="/store"
                  style={{ color: "gray", margin: "20px" }}
                >
                  Back to store
                </Card.Link>
                <Card.Link href="#"></Card.Link>
              </ListGroup>
            </Card.Body>
            <Button
              variant="secondary"
              onClick={() =>
                updateStoreProvider({
                  ...storeProvider,
                  cart: [...storeProvider.cart, item],
                })
              }
              id="addToCart"
            >
              Add to cart
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                updateStoreProvider({
                  ...storeProvider,
                  wishlist: [...storeProvider.wishlist, item],
                })
              }
              id="addToWishlist"
            >
              Add to Wishlist
            </Button>
          </Card>
        </Col>

        <Col xs={3} id="saleCol">
          <h3 id="h3item" style={{ lineHeight: "200%", fontWeight: "bold" }}>
            Don't forget <br /> to check out <br /> our special
          </h3>
          <p id="saleP" contenteditable="true">
            SUMMER
            <br />
            SALE
          </p>
          <h2 id="h2item">Shop now!</h2>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray", height: "170px" }}>
        <h4 style={{ margin: "30px", fontWeight: "bold" }}>
          You might
          <br />
          also like:
        </h4>
        <Row style={{ marginBottom: "20px" }}>
          {catItems
            ?.filter((thisItem) => item.id !== thisItem.id)
            .map((item) => (
              <LinkContainer
                to={`/singleItem/${item._id}`}
                style={{
                  margin: "20px",
                  borderStyle: "solid",
                  borderColor: "black",
                }}
              >
                <Card
                  style={{
                    margin: "100px",
                    align: "center",
                    display: "center",
                    width: "50px",
                    length: "60px",
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "2px",
                  }}
                >
                  <Card.Title style={{ fontWeight: "bold", fontSize: "100%" }}>
                    {item.name}
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={`${devUrl}${item.addImg1}`}
                    style={{ width: "70px", height: "70px" }}
                  />
                  <Button
                    onClick={() => props.toSingleItem(item.id)}
                    style={{ backgroundColor: "lightgray", height: "30px" }}
                  >
                    View item
                  </Button>
                </Card>
              </LinkContainer>
            ))}
        </Row>
      </Row>
    </div>
  );
}

export default SingleItem;
