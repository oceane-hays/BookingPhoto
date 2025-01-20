import {StyledPortfolio} from "./styles.ts";
import PortfolioCard from "../PortfolioCard/PortfolioCard.tsx";

export default function Portfolio() {
    return (
        <StyledPortfolio>
            <h1><span>Portfolio</span></h1>
            <PortfolioCard title="Marriage" />
        </StyledPortfolio>
    )
}