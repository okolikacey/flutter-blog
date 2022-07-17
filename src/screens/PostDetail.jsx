import React, { useEffect } from "react";
import styles from "./styles/PostDetail.module.css";
import { useLocation } from "react-router-dom";
import Small from "../components/Small";

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

function PostDetail(props) {
  const location = useLocation();
  const { id, image, published, title, author } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className={styles.container}>
        <div>{`By ${author} ${published}`}</div>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas
          sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc
          sed blandit libero. Morbi tincidunt augue interdum velit euismod in.
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat
          pellentesque adipiscing commodo elit at imperdiet. Quis risus sed
          vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
        </p>
        <img className={styles.postImage} src={image} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
          blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada
          proin libero nunc consequat. Aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Tellus elementum sagittis vitae et leo duis ut
          diam. Eget nullam non nisi est sit amet. Dignissim suspendisse in est
          ante in nibh mauris. Nec feugiat in fermentum posuere urna. Diam in
          arcu cursus euismod quis viverra. Facilisis mauris sit amet massa
          vitae tortor condimentum lacinia. Diam quam nulla porttitor massa id
          neque aliquam vestibulum morbi. Sed egestas egestas fringilla
          phasellus faucibus scelerisque eleifend. Sed elementum tempus egestas
          sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id
          aliquet risus feugiat in ante. Viverra nibh cras pulvinar mattis nunc
          sed blandit libero. Morbi tincidunt augue interdum velit euismod in.
          Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat
          pellentesque adipiscing commodo elit at imperdiet. Quis risus sed
          vulputate odio ut. Nulla aliquet enim tortor at auctor urna. Proin
          fermentum leo vel orci porta non pulvinar neque. In egestas erat
          imperdiet sed euismod nisi porta lorem. Metus vulputate eu scelerisque
          felis imperdiet proin fermentum. Luctus venenatis lectus magna
          fringilla. Nunc scelerisque viverra mauris in aliquam. Et molestie ac
          feugiat sed lectus vestibulum mattis. Sem et tortor consequat id porta
          nibh venenatis cras sed. Sed felis eget velit aliquet sagittis id.
          Auctor neque vitae tempus quam pellentesque nec nam aliquam sem.
          Tincidunt ornare massa eget egestas purus viverra accumsan in. Aliquet
          lectus proin nibh nisl condime.
        </p>
      </div>
      <h1>More Articles</h1>

      <div className={styles.more}>
        {DATA.filter((post) => post.id !== id)
          .map((item) => <Small postItem={item} />)
          .splice(0, 3)}
      </div>
    </>
  );
}

export default PostDetail;
