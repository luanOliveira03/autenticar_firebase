import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </main>
  );
}

export default App;
