import { React, useState } from "react";
import { Card, Container, Col, Row, Button, NavDropdown } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./blogSingle.css";
import axios from "axios";

function BlogSingle(props) {
  const [blogs, setBlogs] = useState([]);
  const devUrl = "http://localhost:3001/images/";
  let { id } = useParams();
  const [singleBlog, setSingleBlog] = useState("post is loading..");

  useEffect(() =>{ 
    const getData = async () => {
      const blogs = await axios.get(`http://localhost:3001/blogs/blog/${id}`);
      console.log(blogs);

      setItem(blogs.data[0]);
    };
    getData();
  }, []);

      return (
        <div key={index}>
           <p>
        <h4>Do you have a story to tell?</h4>
        <h3>Submit post here*</h3>
      </p>
          <Row>
            <Col xs={8}>
              <h3>{blog.headline}</h3>
              <div
                border="secondary"
                style={{
                  width: "18rem",
                  margin: "10px",
                  width: "18rem",
                  height: "22rem",
                }}
              > 
                  <div>
                    {blog.preview}
                  </div>
                 <div>
                   {blog.content}
                 </div>

              </div>
            </Col>
          </Row>
          <Row>
          <Button onClick={""} style={{margin: "20px",
                backgroundColor:"lightgray",
                color: "black",
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px", verticalAlign:"buttom", display:"inline"}}>All blogs</Button>
      </Row>
        </div>
      );
    };

export default BlogSingle;

