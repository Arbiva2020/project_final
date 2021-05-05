import axios from "axios";
import React, { useState } from "react";
import { Row, Button, Col, Table, Image } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import Cartbackground from "../../images/cartbackground.jpg";
import "./cart.css";
import { useContext } from "react";
import { StoreProviderContext } from "../storeProvider/storeProvider";
// import { PayPalButton } from "react-paypal-button-v2";
import PayPalButton from "../payPalButton/payPalButton";

function Cart(props) {
  const [selectedId, setSelectedId] = useState();
  const devUrl = "http://localhost:3001/images/";
  const [storeProvider, updateStoreProvider] = useContext(StoreProviderContext);
  const totalPrice = storeProvider.cart?.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  // const [items, setItems] = useState([]);
  // const [sum, setSum] = useState(initialSum);
  let initialSum = 0;
  for (let item of storeProvider.cart) {
    initialSum += parseInt(item.price);
  }

  const RemoveItem = (id) => {
    console.log(id);
    updateStoreProvider({
      ...storeProvider,
      cart: storeProvider.cart.filter((item) => item.id !== id),
    });
    // for (let item of storeProvider.cart) {
    //   if (storeProvider.item.id == id) {
    //     setSum(initialSum - storeProvider.item.price);
    //   }
    // }
  };

  const TotalPrice = (price) => {
    console.log(price);
    updateStoreProvider({
      ...storeProvider,
      cart: storeProvider.cart.sum((item) => item.price),
    });
  };

  function emptyCart() {
    updateStoreProvider({ ...storeProvider.cart, cart: [] });
  }

  const rows = storeProvider.cart?.map((item) => (
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
    <div class="cartDiv">
      {/* <Image style={{opacity:"0.7"}}>{Cartbackground}</Image> */}
      <p>
        <h1 id="cartTitle">Cart:</h1>
      </p>
      <Col xs={3}></Col>
      <Col md={{ span: 6, offset: 3 }}>
        <Table
          id="cartTable"
          style={{
            borderStyle: "solid",
            borderColor: "black",
            borderCollapse: "collapse",
          }}
        >
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
          <span>Items in cart: {storeProvider.cart.length}</span>
          <br />
          <span>Total price: {totalPrice}</span>
        </div>
      </Col>

      <Col xs={2}>
        <div>
          <Button
            onClick={emptyCart}
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
            Empty cart
          </Button>
          <PayPalButton />
        </div>
      </Col>
<Row style={{height:"180px"}}></Row>
      {/* {clientName ${'thank you for buying!'}} */}
    </div>
    
  );
}
export default Cart;
