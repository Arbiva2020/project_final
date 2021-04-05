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
