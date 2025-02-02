import { StyledPrices } from "./styles.ts"
import PricesCard from "./PricesCard.tsx"
import pricingData from "./princing-content.json"

export default function Prices() {
    return (
        <StyledPrices>
            <h2>Tarification</h2>
            {Object.values(pricingData).map((price, index) => (
                <PricesCard
                    key={index}
                    title={price.title}
                    prix={price.prix}
                    tenue={price.tenue}
                    temps={price.temps}
                    lieu={price.lieu}
                    livraison={price.livraison}
                    description={price.description}
                />
            ))}
        </StyledPrices>
    )
}

