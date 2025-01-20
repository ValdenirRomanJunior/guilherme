import { WhatsappWrapper } from "./styles";
import WhatsAppIcon from '../../assets/images/whatsapp.png';

const WhatsappButton = () => {


    return(
        <WhatsappWrapper href="https://api.whatsapp.com/send?phone=5561983749505">
                <img src={WhatsAppIcon} alt="" className="whatsapp-icon"/>
                <span className="whatsapp-text">Whatsapp</span>
                <span className="whatsapp-number">(61) 98374-9505</span>
            </WhatsappWrapper>
    )

}

export default WhatsappButton;


