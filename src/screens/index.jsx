import React from "react";
import Large from "../components/Large";
import Small from "../components/Small";
import Footer from "../components/Footer";
import styles from "./styles/index.module.css";

import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";

const DATA = [
  {
    id: 1,
    author: "Ryan Jackson",
    published: "1 Month Ago",
    image: image1,
    title: "Css Grid",
    text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    read_time: "12",
  },
  {
    id: 2,
    author: "Ryan Jackson",
    published: "2 Month Ago",
    image: image2,
    title: "Colors in Css",
    text: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
    read_time: "8",
  },
  {
    id: 3,
    author: "Ryan Jackson",
    published: "1 Month Ago",
    image: image3,
    title: "Css Variables",
    text: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
    read_time: "10",
  },
  {
    id: 4,
    author: "Ryan Jackson",
    published: "1 Month Ago",
    image: image1,
    title: "Css Grid",
    text: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    read_time: "12",
  },
  {
    id: 5,
    author: "Ryan Jackson",
    published: "2 Month Ago",
    image: image2,
    title: "Colors in Css",
    text: "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
    read_time: "8",
  },
  {
    id: 6,
    author: "Ryan Jackson",
    published: "1 Month Ago",
    image: image3,
    title: "Css Variables",
    text: "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
    read_time: "10",
  },
];

function index(props) {
  return (
    <div>
      <Large />
      <div className={styles.small}>
        {DATA.map((post) => (
          <Small postItem={post} />
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default index;
