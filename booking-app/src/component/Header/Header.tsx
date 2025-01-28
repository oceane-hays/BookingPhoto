import { StyledHeader } from "./styles";
import NavBar from "../../commun/NavBar/NavBar.tsx";
import './../../../public/fonts/eleanor/Eleanor.ttf'
import {useEffect, useState} from "react";


const Header = ( handleNav : () => void) => {

    const [scrolled, setScrolled] = useState(false)

    const changeScroll = () => {
        window.scrollY > 0 ? setScrolled(true) : setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", changeScroll)
        return () => {
            window.removeEventListener("scroll", changeScroll)
        }
    }, [])

    return (
        <StyledHeader scrolled={scrolled}>
            <NavBar handleNav={handleNav} scrolled={scrolled}/>
        </StyledHeader>
    )
};

export default Header;

