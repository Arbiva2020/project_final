import react from "react";
import axios from "axios";
import { Card, Button, Col, Table, Row } from "react-bootstrap";
import "./adminPage.css";


function AdminPage(props) {

  const devUrl = "http://localhost:3001/images/";
  let initialSum = 0;
  for (let item of storeProvider.wishlist) {
    initialSum += parseInt(item.price);
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
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.adress}</td>
      <td>{user.state}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td> 
      <td>
        <Button style={{ height: "40px" }} onClick={() => RemoveItem(item.id)}>
          Remove
        </Button>
      </td>
    </tr>
  ));
  return (
    <div id="">
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
    </div>
  );
}
export default AdminPage;
