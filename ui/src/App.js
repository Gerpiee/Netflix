import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Home/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
const App = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <Footer />
      <Routes>
        <Route path="movie" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
