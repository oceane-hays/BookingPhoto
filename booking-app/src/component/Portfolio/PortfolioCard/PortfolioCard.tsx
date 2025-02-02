import {PortfolioCardProps} from "../../../types.ts";
import {StyledPortfolioCard} from "./styles.ts";

export default function PortfolioCard({ onClick, title, image } : PortfolioCardProps) {
    return (
        <StyledPortfolioCard onClick={onClick}>
            <img className="img-card" src={image} alt='Card'/>
            <p>{title}</p>
        </StyledPortfolioCard>
    )
}