import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Col, Table, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./wishlist.css";
import { useContext } from "react";
import { StoreProviderContext } from "../storeProvider/storeProvider";

function Wishlist(props) {
  // let wishlist = [{}];
  // const[wishlist, setwishlist] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [storeProvider, updateStoreProvider] = useContext(StoreProviderContext);
  let totalPrice = storeProvider.wishlist.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  const devUrl = "http://localhost:3001/images/";
  let initialSum = 0;
  for (let item of storeProvider.wishlist) {
    initialSum += parseInt(item.price);
  }

  const RemoveItem = (id) => {
    console.log(id);
    updateStoreProvider({
      ...storeProvider,
      wishlist: storeProvider.wishlist.filter((item) => item.id !== id),
    });
  };

  const TotalPrice = (price) => {
    console.log(price);
    updateStoreProvider({
      ...storeProvider,
      wishlist: storeProvider.wishlist.sum((item) => item.price),
    });
  };

  function Emptywishlist() {
    updateStoreProvider({ ...storeProvider.wishlist, wishlist: [] });
  }

  const rows = storeProvider.wishlist?.map((item) => (
    <tr
      key={item.id}
      onClick={() => setSelectedId(item.id)}
      active={item.id === selectedId}
    >
      <td>{item.id}</td>
      <td>
        <img
          src={`${devUrl}${item.img}`}
          style={{ height: "30px", width: "30px" }}
        ></img>
      </td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>
        <Button style={{ height: "40px" }} onClick={() => RemoveItem(item.id)}>
          Remove
        </Button>
      </td>
    </tr>
  ));
  return (
    <div id="wishlistDiv">
      <p>
        <h1 id="wishlistTitle">Make your wishes come true!</h1>
      </p>
      <Col xs={3}></Col>
      <Col md={{ span: 6, offset: 3 }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Item image</th>
              <th>Item Name</th>
              <th>Item description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove Item</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </Table>
        <div>
          <span>Items in wishlist: {storeProvider.wishlist.length}</span>
          <br />
          <span>Total price of wishlist: {totalPrice}</span>
        </div>
      </Col>

      <Col xs={2}>
        <div>
          <Button
            onClick={Emptywishlist}
            style={{
              height: "35px",
              width: "220px",
              backgroundColor: "gray",
              color: "black",
              borderStyle: "solid",
              borderWidth: "2px",
              margin: "10px",
              alignSelf: "center",
            }}
          >
            Empty wishlist
          </Button>
        </div>
      </Col>
      <Row style={{ height: "320px" }}></Row>
    </div>
  );
}
export default Wishlist;
