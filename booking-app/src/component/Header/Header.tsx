import { StyledHeader } from "./styles";
import NavBar from "../../commun/NavBar/NavBar.tsx";
import './../../../public/fonts/eleanor/Eleanor.ttf'


const Header = () => {
    return (
        <StyledHeader>
            <NavBar/>
            <div className="image-container">
                <img src="./../../../public/img/img.png" alt="Background" />
                <h1 aria-label="Photographer Name">ARNAULD METCHIDJOU</h1>
                <h2 aria-label="Profession">PHOTOGRAPHE</h2>

            </div>

        </StyledHeader>
    );
};

export default Header;

