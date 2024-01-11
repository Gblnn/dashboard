import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Account from "../pages/account";
import Listings from "../pages/listings";


export default function Layout(){
    return(
        <>
        <div className="page">
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="listings" element={<Listings/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Routes>
        </div>
        </div>
        </>
    )
}