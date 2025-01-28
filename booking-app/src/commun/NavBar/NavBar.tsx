import {StyledDivision} from "./styles.ts";
import {NavBarProps} from "../../types.ts";

export default function NavBar({ handleNav, scrolled } : NavBarProps) {

    const block : string[] = ['À PROPOS', 'PORTFOLIO', 'TARIFS', 'CONTACT']

    return (
        <StyledDivision scrolled={scrolled}>
            <ul>
                {
                    block.map((page : string) => (
                            <li onClick={handleNav}>{page}</li>
                        )
                    )
                }
            </ul>

        </StyledDivision>
    )
}