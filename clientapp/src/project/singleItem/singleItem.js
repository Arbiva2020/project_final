import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
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
  // let [count, setCount] = useContext(counterContext);
  let [count, setCount] = useState(0);
  const [itemsArray, setItemsArray] = useState([props.items]);
  // const [storeProvider, updateStoreProvider] = useContext(StoreProviderContext);
  const [item, setItem] = useState({});
  const [upload, setUpload] = useState(true);
  const [oneItem, setOneItem] = useState();
  const devUrl = "http://localhost:3001/images/";
  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const items = await axios.get(`http://localhost:3001/items/item/${id}`);
      console.log(items);

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

  // console.log(props.item);

  // useEffect(() => {
  //   async function addToCart(){
  //     items = await axios.get('http://localhost:3001/store/all');
  //     console.log('singel item');
  //     setSortItems(items.data);
  //     const oneItem = (items.data.find((item) =>{
  //       return item.id == id;
  //     }))
  //     setItemsArray(oneItem);
  //     console.log(item);
  //     setUpload(false);
  //   }
  //   addToCart();
  // },
  // [])

  // const addToHeandler = () => {
  //   props.addToCart(props.item.id)
  // }

  // const addToWishlist = ()=> {
  //   props.addToWishlist(props.item.id)
  // }

  return (
    <div>
      <Row>
        <Col xs={2}>
          <Card
            style={{ width: "10rem", height: "8rem" }}
            className="sideImgCard"
          >
            <Card.Img variant="top" src={`${devUrl}${item.img}`} />
          </Card>
          <Card
            style={{ width: "10rem", height: "8rem" }}
            className="sideImgCard"
          >
            <Card.Img variant="top" src={`${devUrl}${item.addImg1}`} />
          </Card>
        </Col>

        <Col xs={6} id="colItem">
          <Card style={{ width: "40rem", height: "30rem" }} id="itemImgCard">
            <Card.Img variant="top" src={`${devUrl}${item.addImg2}`} />
          </Card>
          <Card style={{ width: "20rem", height: "30rem" }} id="itemDetailCard">
            <Card.Body>
              <Card.Title id="singleTitle">{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>price: {item.price}</ListGroupItem>

                {/* <itemInfo addToCart={addToCartHandler} detail={item} /> */}

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
                  ...StoreProviderContext,
                  cart: [...storeProvider.cart, item],
                })
              }
              id="addToCart"
            >
              Add to cart
            </Button>
            <Button
              variant="secondary"
              onClick={() => props.addToCart(item)}
              id="addToWishlist"
            >
              Wishlist
            </Button>
          </Card>
        </Col>

        <Col xs={4}></Col>
      </Row>

      {/* <Row>
        <h5 id="mightLike">You might also like:</h5>
        {items.filter(item => item.category === item.catagory).map(setItemsArray =>(
            <div key={index}>
              <Card style={{ width: "18rem", height: "500px" }} id="storeCard">
                <Card.Img style={{width: "10rem", height: "200px"}} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
          
                </Card> 
                </div>
                ))}
      </Row>
      */}
    </div>
  );
}

export default SingleItem;
