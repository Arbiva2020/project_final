import { React, useState, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Table, Row, Col } from "react-bootstrap/";
// import tentImg from "../images/3466701071.jpg";
import "./ordersTable.css";

function ordersTable(props) {
  const [invoices, setInvoice] = useState(props.order);
  console.log(invoices);
  return (
    <div>
      <h3>Data summary:</h3>
      <Col md={{ span: 6, offset: 3 }}>
      <Table striped bordered hover>
        <thead>
          <tr style={{backgroundColor:"gray"}}>
            <th>Order ID</th>
            <th>Products ID</th>
            <th>Products</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Customer ID</th>
            <th>Date</th>
          </tr>
        </thead>
        {/* <tbody> */}
        {invoices.map((element, index) => {
          return (
            <tr>
              <td> {element.OrderID}</td>
              <td> {element.ProductsID}</td>
              <td> {element.Products.toString()}</td>
              <td> {element.Quantity}</td>
              <td> {element.Price}</td>
              <td> {element.CustomerID}</td>
              <th>{element.Date.toUTCString()}</th>
            </tr>

            // </React.Fragment>
          );
        })}
        {/* </tbody> */}
      </Table>
      </Col>
    </div>
  );
}
export default ordersTable;
