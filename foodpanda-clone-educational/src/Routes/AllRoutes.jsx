import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}