import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header";
import Home from "./screens";
import PostDetail from "./screens/PostDetail";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
