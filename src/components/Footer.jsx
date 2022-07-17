import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/footer.module.css";

function Footer(props) {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div className={styles.container}>
      <h2>Join our Team of Writers</h2>
      <p>
        On dasdas, writers earn a living doing what they love. <br /> Getting
        started is easy. Just pay a one time $25 fee and everything is ready to
        go.
      </p>
      <button onClick={handlePayment}>JOIN US</button>
    </div>
  );
}

export default Footer;
