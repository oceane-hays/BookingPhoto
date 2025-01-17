import './Home.css'
import Header from "../../component/Header/Header.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import AboutMe from "../../component/AboutMe/AboutMe.tsx";
import Portfolio from "../../component/Portfolio/Portfolio.tsx";
import Prices from "../../component/Prices/Prices.tsx";
import Contact from "../../component/Contact/Contact.tsx";

function Home() {
    return (
        <div className="home-layout">
            <Header />
            <AboutMe />
            <Portfolio />
            <Prices />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home

