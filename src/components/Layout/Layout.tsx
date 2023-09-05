import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {Outlet} from "react-router-dom";
import "./style.scss"

const Layout: React.FC = () => {
    return (
        <div className="wrapper">

            <header>
                <Header/>
            </header>

            <main className="main">
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    )
}

export default Layout