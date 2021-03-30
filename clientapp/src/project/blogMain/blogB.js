import { React, useState } from "react";
import { Card, Container, Col, Row, Button, NavDropdown } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import nazareth from "../../images/nazareth.jpg";
import nazareth2 from "../../images/nazareth2.jpg";
import "./blogB.css";

function Posts(props) {
  const [blogs, setBlogs] = useState([]);
  const devUrl = "http://localhost:3001/images/";
  
  async function getPosts() {
    const response = await fetch("http://localhost:3001/blogs/");
    // const response = await fetch("https://jsonplaceholder.typicode.com/blogs/");
    const data = await response.json();
    return data;
  }

  const [blogsArray, setBlog] = useState("posts is loading..");

  getPosts().then((data) => {
    // console.log(data);
    const blogsHtml = data.map((blog, index) => {
      return (
        <div key={index}>
          <Row>
            {/* <Col xs={2} id="photoPart1">
              <img src={nazareth} id="nazarethImg" class="img-fluid" />
            </Col> */}
            <Col xs={8}>
              <Card
                border="secondary"
                style={{
                  width: "18rem",
                  margin: "10px",
                  width: "18rem",
                  height: "22rem",
                }}
              >
                <Card.Header>{blog.headline}</Card.Header>
                <Card.Body>
                <Card.Title></Card.Title>
                  <Card.Text>
                    {blog.preview}
                    <Button onClick={() => props.toBlogSingle(blog.id)} style={{margin: "20px",
                backgroundColor:"lightgray",
                color: "black",
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px", verticalAlign:"buttom", display:"inline"}}>Read more</Button>
                  </Card.Text>
                  {/* <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.body}</Card.Text> */}
                </Card.Body>
                <Card.Footer>
                  {/* {blog.userId} */}
                  {blog.id}
                </Card.Footer>
              </Card>
            </Col>
            {/* <Col xs={2} id="photoPart2">
              <img src={nazareth2} id="nazareth2Img" class="img-fluid" />
            </Col> */}
          </Row>
        </div>
      );
    });
    // console.log(blogsHtml);
    setBlog(blogsHtml);
  });

  return (
    <Container>
      <p>
        <h1 id="allBlogsH1">Always happy to share our thoughts! </h1>
      </p>
      <p>
        <h3>All information you need, in one place </h3>
      </p>
      <Row>
        <Col xs={2} id="photoPart1">
          <img src={nazareth} id="nazarethImg" class="img-fluid" />
        </Col>

        <Col xs={8} className="flex">
          {blogsArray}
        </Col>

        <Col xs={2} id="photoPart2">
          <img src={nazareth2} id="nazareth2Img" class="img-fluid" />
        </Col>
      </Row>
      <Row id="rowSortBlog">
        <Button id="nextBlogButt">Next</Button>
        
        <NavDropdown style={{}} title="Sort by area" id="sortByArea">
            <NavDropdown.Item eventKey="4.1">Golan</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Galil</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Jerusalem</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Central Israel</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">South</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Eilat and Haarava
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <Button id="prevBlogButt">Prev</Button>
      </Row>
    </Container>
  );
}
export default Posts;
