import { StyledAboutme } from "./styles"
import './../../../public/fonts/eleanor/Eleanor.ttf'


export default function AboutMe() {
    return (
        <StyledAboutme>
            {/*<div className="aboutMe-image">*/}
            {/*    <img*/}
            {/*        src="/img/party.png"*/}
            {/*        alt="Background"*/}
            {/*        className="background-image"*/}
            {/*        width={400}*/}
            {/*        height={400}*/}
            {/*    />*/}
            {/*    <img*/}
            {/*        src="/img/photograh.png"*/}
            {/*        alt="Foreground"*/}
            {/*        className="foreground-image"*/}
            {/*        width={400}*/}
            {/*        height={350}*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="aboutMe-text">

                <h2 className="aboutMe-title"><span>À propos</span></h2>
                <p className="aboutMe-description">
                    [Nom du photographe] est un photographe passionné, spécialisé dans [le type de photographie : portrait, paysage, mariage, événementiel, produit, etc.].
                    Avec un œil artistique et une attention minutieuse aux détails, il/elle capture des moments uniques et authentiques qui racontent une histoire.
                    Grâce à une maîtrise des techniques modernes et à une créativité sans limite, [Nom du photographe] transforme chaque cliché en une œuvre d'art intemporelle.
                    Son approche personnalisée et son écoute attentive lui permettent de comprendre les besoins de ses clients pour créer des souvenirs visuels qui résonnent avec émotion.
                    Que ce soit pour des projets personnels ou professionnels, [Nom du photographe] s'engage à offrir une expérience inoubliable, en combinant professionnalisme, sensibilité et une touche artistique unique.
                </p>
            </div>
        </StyledAboutme>
    )
}

