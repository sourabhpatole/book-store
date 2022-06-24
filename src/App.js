import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetil from "./components/Book/BookDetil";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetil />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
