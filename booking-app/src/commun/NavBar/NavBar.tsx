import {StyledDivision} from "./styles.ts";

export default function NavBar(handleRoute : () => void) {
    return (
        <StyledDivision>
            <div onClick={handleRoute}>
                <p>À PROPOS</p>
            </div>

            <div onClick={handleRoute}>
                <p>PORTFOLIO</p>
            </div>

            <div onClick={handleRoute}>
                <p>TARIFS</p>
            </div>

            <div onClick={handleRoute}>
                <p>CONTACT</p>
            </div>
        </StyledDivision>
    )
}