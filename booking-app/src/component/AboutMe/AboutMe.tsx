import { StyledAboutme } from "./styles"
import './../../../public/fonts/eleanor/Eleanor.ttf'
import PolicyDisplay from "./PolicyDisplay.tsx";


export default function AboutMe() {
    return (
        <StyledAboutme>
            <section>
                <div className="aboutMe-text">

                    <h2 className="aboutMe-title"><span>À propos</span></h2>
                    <p className="aboutMe-description">
                        [Nom du photographe] est un photographe passionné, spécialisé dans [le type de photographie :
                        portrait, paysage, mariage, événementiel, produit, etc.].
                        Avec un œil artistique et une attention minutieuse aux détails, il/elle capture des moments
                        uniques et authentiques qui racontent une histoire.
                        Grâce à une maîtrise des techniques modernes et à une créativité sans limite, [Nom du
                        photographe] transforme chaque cliché en une œuvre d'art intemporelle.
                        Son approche personnalisée et son écoute attentive lui permettent de comprendre les besoins de
                        ses clients pour créer des souvenirs visuels qui résonnent avec émotion.
                        Que ce soit pour des projets personnels ou professionnels, [Nom du photographe] s'engage à
                        offrir une expérience inoubliable, en combinant professionnalisme, sensibilité et une touche
                        artistique unique.
                    </p>
                </div>

                <div >
                    <img src={'./../../../public/img/photographe.png'} alt="photographe" className="photographe"/>
                </div>

            </section>


            <PolicyDisplay/>
        </StyledAboutme>
    )
}

