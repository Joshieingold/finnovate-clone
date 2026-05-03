import "./App.css";
import Home from "./pages/home";
import Team from "./pages/team";
import Footer from "./sections/footer/footer";
import Navbar from "./sections/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
