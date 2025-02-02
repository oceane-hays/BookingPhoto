import { StyledPricesCard } from "./styles.ts"
import {PricesCardProps} from "../../types.ts";


export default function PricesCard({ title, prix, tenue, temps, lieu, livraison, description }: PricesCardProps) {
    return (
        <StyledPricesCard>
            <div className="content">
                <strong>{title}</strong>
                <p>{prix}</p>
                <p>{tenue}</p>
                <p>{temps}</p>
                <p>{lieu}</p>
                <p>{livraison}</p>
                <p>{description}</p>
            </div>
            <div className="button-container">
                <button>Programmer</button>
            </div>
        </StyledPricesCard>
    )
}

