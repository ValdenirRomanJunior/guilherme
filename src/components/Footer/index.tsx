import { FooterContainer, LogoWrapper, SocialWrapper, TextWrapper } from "./styles";
import Logo from '../../assets/images/logo.png';
import {SlSocialInstagram} from 'react-icons/sl';
import {FaFacebookF} from 'react-icons/fa';
import {MdWhatsapp} from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Footer = () => {
    return (
       <FooterContainer>
        <LogoWrapper>
        <LazyLoadImage effect="opacity" src={Logo} alt=""/>
        </LogoWrapper>
        <TextWrapper>
            <div className="copy-nameBusiness">
            <span> © 2025</span>
            <span> JCésar Imóveis | Agro e Urbano</span>
            </div>
            <span>CRECI TO-4033</span>
        </TextWrapper>
        <SocialWrapper>
        <a href="https://www.facebook.com/ubaldoneto/" ><FaFacebookF className="icon-social-footer"/></a>
             <a href="https://www.instagram.com/imob_invest_ubj/"><SlSocialInstagram className="icon-social-footer"/></a>
             <a href="https://api.whatsapp.com/send?phone=5561983749505"> <MdWhatsapp className="icon-social-footer"/></a>
        </SocialWrapper>
       </FooterContainer>
    )
}

export default Footer;