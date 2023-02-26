import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="container">
<Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
