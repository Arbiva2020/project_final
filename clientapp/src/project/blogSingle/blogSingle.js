import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {useLocation, useHistory} from "react-router";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./blogSingle.css";
import axios from "axios";

function BlogSingle(props) {
  const location  = useLocation();
  const history = useHistory();
  console.log(location);
  const [blog, setBlog] = useState([]);
  const [blogsArray, setBlogsArray] = useState([props.blogs]);
  const devUrl = "http://localhost:3001/images/";
  let { id } = useParams();
  const [singleBlog, setSingleBlog] = useState("post is loading..");

  useEffect(() => {
    const getData = async () => {
      const blog = await axios.get(`http://localhost:3001/blogs/blog/${id}`);
      console.log(blog);
      setBlog(blog.data[0]);
    };
    getData();
  }, []);

function goBackHandle(){
  history.goBack();
}

  return (
    <div>
      <Row>
      <Col xs={9} style={{alignText:"left"}}>
          <h4 id="mainheadlineblog">The most interesting blogs</h4>
          <h3 id="headlineblog">All in one place!</h3>
          <h3 id="thirdblogheadline">{blog.headline}</h3>
        <p style={{alignText:"left", fontWeight:"bold"}}>{blog.preview} </p>
        <p style={{alignText:"left"}}>{blog.content} <img id="blogsingleimg"
       src={`${devUrl}${blog.img}`}
       style={{ width: "300px",marginBottom: "20px", float:"right",  width: "100%",
       maxWidth: "350px", padding:"5px", margin:"5px"}}></img></p>
       <LinkContainer to="/blogB" style={{ margin: "20px" }}>
      <Button
        onClick={() => props.toBlogB()}
        style={{
          margin: "20px",
          backgroundColor: "lightgray",
          color: "black",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "2px",
          verticalAlign: "buttom",
          display: "inline",
        }}
      >
        Back to blogs
      </Button>
      </LinkContainer> 
      <Button
        onClick={goBackHandle}
        style={{
          margin: "20px",
          backgroundColor: "lightgray",
          color: "black",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "2px",
          verticalAlign: "buttom",
          display: "inline",
        }}
      >
        Next blog
      </Button>
      <Button
        onClick={goBackHandle}
        style={{
          margin: "20px",
          backgroundColor: "lightgray",
          color: "black",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: "2px",
          verticalAlign: "buttom",
          display: "inline",
        }}
      >
        Previous blog
      </Button>
   
      </Col>
      <Col xs={3} style={{borderStyle:"groove"}}>
      <h5 style={{fontWeight:"bold", margin:"20px"}}>How would you like to post a blog?</h5>  
      <Form>
    <Form.Group as={Col} style={{alignItems:"left", display:"flex", justifyContent:"left"}} controlId="formGridEmail">
      <Form.Control type="email" style={{width:"100%", alignContent:"left", display:"flex"}} placeholder="Enter email" />
    </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Control placeholder="Adress" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
    <Form.Control placeholder="City" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Control placeholder="State" />
    </Form.Group>
  </Form.Row>

  <Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea"  placeholder="Free content" rows={3} />
  </Form.Group>
  <div className="mb-3" style={{alignText:"left"}}>
    <Form.File id="formcheck-api-regular">
      <Form.File.Input/>
    </Form.File>
  </div>
</Form>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<p style={{marginTop:"30px", color:"darkblue", fontWeight:"bold"}}>We will contact you once your blog is evalueted</p>
      </Col>
      </Row>
    </div>
  );
}

export default BlogSingle;