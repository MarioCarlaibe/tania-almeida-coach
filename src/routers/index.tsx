import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about"
import { Coach } from "../pages/coach"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/coach" element={<Coach />}/>
        </Routes>
    )
}