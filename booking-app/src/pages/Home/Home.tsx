import './Home.css'

import './../../../public/fonts/eleanor/Eleanor.ttf'

import Header from "../../component/Header/Header.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import AboutMe from "../../component/AboutMe/AboutMe.tsx";
import Portfolio from "../../component/Portfolio/Portfolio.tsx";
import Prices from "../../component/Prices/Prices.tsx";
import Contact from "../../component/Contact/Contact.tsx";
import Front from "../../component/Front/Front.tsx";

function Home() {

    const handleNav = () => {

    }

    return (
        <div className="home-layout">
            <Header handleNav={handleNav} />
            <Front />
            <AboutMe />
            <Prices />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

