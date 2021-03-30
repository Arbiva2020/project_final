import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";
const devUrl = "http://localhost:3001/images/";

// export const SliderData = [
//   "https://static.timesofisrael.com/www/uploads/2020/05/AP_20121515349051.jpg",
//   "https://scx2.b-cdn.net/gfx/news/2017/thenorthwest.jpg",
//   "http://www.land-of-the-bible.com/sites/default/files/Week%2012a%20The%20Sea%20of%20Galilee.jpg",
//   "https://cdn.britannica.com/26/117726-050-D1C0323D/Kefar-Nahum-Israel-Sea-of-Galilee.jpg",
//   "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/Galilee_16x9.jpg?itok=24fyh8f_",
// ];

function ProductCarousel(props) {
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState({});
  console.log(props.product);
  console.log(product.img1);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const SliderData = [
    { src: `${devUrl}${props.product.img1}` },
    { src: `${devUrl}${props.product.img2}` },
    { src: `${devUrl}${props.product.img3}` },
    { src: `${devUrl}${props.product.img4}` },
    { src: `${devUrl}${props.product.img5}` },
    { src: `${devUrl}${props.product.img6}` },
  ];

  useEffect(() => {
    const getData = async () => {
      console.log(props.product);
      setProduct(props.product);
    };
    getData();
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderData[0].src}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderData[1].src}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderData[2].src}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderData[4].src}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
