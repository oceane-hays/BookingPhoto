import { StyledHeader } from "./styles";
import NavBar from "../../commun/NavBar/NavBar.tsx";

const Header = () => {
    return (
        <StyledHeader>
            <NavBar/>
            <div className="image-container">
                <img src="./../public/img/img.png" alt="Background"/>
                <h1 aria-label="Photographer Name">ARNOLD SMITH</h1>
                <h2 aria-label="Profession">PHOTOGRAPHE</h2>
                {/*<div className="line-container">*/}
                {/*    <hr/>*/}
                {/*    <img src="./../public/img/instagram.png" alt="Instagram"/>*/}
                {/*    <hr/>*/}
                {/*</div>*/}
            </div>

        </StyledHeader>
    );
};

export default Header;

