import { WhatsappWrapper2 } from "./styles";
import WhatsAppIcon from '../../assets/images/whatsapp.png';

const WhatsappButton = () => {


    return(
        <WhatsappWrapper2 href="https://api.whatsapp.com/send?phone=5563992231586">
            <img src={WhatsAppIcon} alt="" className="whatsapp-icon" />
            <span className="whatsapp-text">Whatsapp</span>
            <span className="whatsapp-number">(63) 99223-1586</span>
        </WhatsappWrapper2>

  
    )

}

export default WhatsappButton;


