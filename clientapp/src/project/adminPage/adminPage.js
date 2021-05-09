import react from "react";
import axios from "axios";
import { Card, Button, Col, Table, Row } from "react-bootstrap";
import "./adminPage.css";


function AdminPage(props) {

  return (
    <div>    
{showUsers && <users/>}
{showOrders && <orders/>}
    </div>
  );
}
export default AdminPage;


{/* <Col md={{ span: 6, offset: 3 }}>
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
        </Table> */}