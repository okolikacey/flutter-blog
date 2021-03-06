import React from "react";
import styles from "./styles/flutterwave.module.css";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function App() {
  const config = {
    public_key: "FLWPUBK_TEST-ed69a762d8e3ac6d1b3db87521c1934d-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      setTimeout(() => closePaymentModal(), 5000);
      // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className={styles.container}>
      <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}
