import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useHistory, Route, Router, BrowserRouter } from "react-router-dom";
import "./footer.css";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  const [keyWord, setKeyWord] = useState();
  // const handleSearch = event => {
  //   setSearch(event.target.value);
  // };
  const [searchResult, setSearchResult] = useState([]);
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/searchResult/${keyWord}`);
    window.location.reload();
    // history.go(`searchResult/${keyWord}`);
  };

  return (
    <Navbar bg="dark" variant="dark" id="footerNav">
      <Navbar.Brand href="/blogB">BLOG</Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <FontAwesomeIcon icon={faFacebook} />
        </Nav.Link>
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <FontAwesomeIcon icon={faInstagram} />
        </Nav.Link>
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Nav.Link>
        <p id="rights">All rights reserved © {currentYear} </p>
      </Nav>
      <Form inline>
        <Nav.Link href="#pricing" id="contact" href="/contactUs">
          Contact Us
        </Nav.Link>
        {/* <FormControl
          onChange={(e) => setKeyWord(e.target.value)}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        /> */}
      </Form>
      <input
        onChange={(e) => setKeyWord(e.target.value)}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-info" onClick={handleSearch}>
        Search
      </Button>
    </Navbar>
  );
};
export default Footer;
