import {StyledFooter} from "./styles.ts";
import {AdressIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon} from "./FooterIcon.tsx";
import FooterInfos from "./FooterInfos.tsx";

export default function Footer() {
    return (
        <StyledFooter>
            <section className={'icon'} >
                <InstagramIcon />
                <FacebookIcon />
            </section>


            <section className={'in-a-row'}>
                <FooterInfos title="MCCHIC PHOTOGRAPHIE" >
                    <p>
                        Here you can use rows and columns to organize your footer content.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </FooterInfos>
                <FooterInfos title="INFORMATION">
                    <ul>
                        <li>Page d'accueil</li>
                        <li>A Propos</li>
                        <li>Tarification</li>
                    </ul>
                </FooterInfos>
                <FooterInfos title="CONTACT">
                    <ul>
                        <li className={'icon'}>
                            <AdressIcon />
                            <p>Montreal, QC, Canada</p>
                        </li>
                        <li className={'icon'}>
                            <MailIcon />
                            <p><a href={'mailto:mcchic_photographie@outlook.com'}>mcchic_photographie@outlook.com</a></p>
                        </li>
                        <li className={'icon'}>
                            <PhoneIcon />
                            <p>+1 (438) 221-3512</p>
                        </li>
                    </ul>
                </FooterInfos>
            </section>
            <section className={'copyright'}>
                <a className='text-reset fw-bold' href='https://github.com/oceane-hays'>
                    © 2025 Copyright: Oceane Hays
                </a>
            </section>
        </StyledFooter>
    );
}