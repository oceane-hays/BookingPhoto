import {StyledPolicyDisplay} from "./styles.ts";

export default function PolicyDisplay() {
    return (
        <StyledPolicyDisplay>

            {/* Consultation Section */}
            <div >
                <h2>Consultation</h2>
                <p>
                    Tout le monde doit consulter avant de réserver un service à :
                    <a href={'mailto:mcchic_photographie@outlook.com'}> mcchic_photographie@outlook.com</a>. Si vous préférez
                    être appelé, envoyez-nous d'abord un message et nous trouverons un moment pour nous parler.
                </p>
            </div>

            {/* Deposit Section */}
            <div>
            <h2>Dépot</h2>
                <p>
                    Un dépôt variable est exigé pour chaque prestation afin de garantir la date et l’heure de la session. Le restant du solde est dû 72 heures avant la séance. N’hésitez pas à nous demander si ces options fonctionnent pour vous.
                </p>
            </div>

            {/* Late Arrivals Section */}
            <div>
                <h2>Politique de retard</h2>
                <p >
                    <span>Un montant additionnel de 25 $</span> sera facturé sur la carte de
                    crédit du client s'il a plus de 15 minutes de retard. L'heure de fin de la séance ne sera pas
                    prolongée pour compenser le retard du client.
                    <span> La séance sera annulée après 30 minutes.</span>
                </p>
            </div>

            {/* Cancellations Section */}
            <div className="last-child">
                <h2>Annulation</h2>
                <p>
                    Si vous ne pouvez pas assister à votre séance photo, tous les dépôts seront considérés comme des frais d'annulation. Si la séance doit être reportée pour une quelconque raison, des frais de report de 50 $ seront ajoutés à votre facture actuelle.
                </p>
            </div>
        </StyledPolicyDisplay>
    )
}

