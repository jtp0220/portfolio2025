import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Photos from "./Photos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;