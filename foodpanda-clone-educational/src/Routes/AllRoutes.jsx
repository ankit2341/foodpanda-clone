import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodlist from "./Foodlist";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/foodlist" element={<Foodlist/>}></Route>
        </Routes>
    )
}