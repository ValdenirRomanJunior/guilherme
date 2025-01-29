import { useState } from "react";
import { AnswerWrapper, ModalLinkQuestion, QuestionContainer, QuestionWrapper } from "./styles"
import {BsPlus} from 'react-icons/bs';
import {GrFormClose} from 'react-icons/gr';
import { SlSocialInstagram } from "react-icons/sl";

const About = () => {

    const [openAnswer,setOpenAnswer]= useState(false);
    const handleOpenAnswer = () => {
        setOpenAnswer(openAnswer => !openAnswer);
    }

    const [openModalLink,setOpenModalLink]= useState(false);
    const handleOpenModalLink = () => {
        setOpenModalLink(openModalLink => !openModalLink);
    }

    return(
        <QuestionContainer>
            <QuestionWrapper onClick={handleOpenAnswer}>
             <span>Sobre nós</span>
             <BsPlus className="icon-plus-question"/>
            </QuestionWrapper>
            <AnswerWrapper open={openAnswer} onClick={handleOpenModalLink}>
            <h2>Especialistas em fazendas, chácaras e imóveis urbanos no Tocantins e região!</h2>
                <p>Somos uma empresa focada na compra e venda de fazendas, chácaras e propriedades urbanas. 
                    Nosso compromisso é conectar proprietários e investidores com transparência, credibilidade e um atendimento personalizado.
                     Com ampla experiência no mercado, oferecemos soluções práticas e seguras, atendendo às necessidades de quem busca investir
                      no campo ou na cidade.

                      Seja para produção agrícola, pecuária, lazer ou moradia, temos as melhores opções de propriedades rurais e urbanas. 
                      Nosso diferencial está no acompanhamento completo do processo de negociação, garantindo agilidade e segurança do início ao 
                      fim.</p>

                   <span>jcesaragroeurbano@gmail.com</span>
                   <span>Pedro Afonso - TO</span>
               
                   <span>(61) 98374-9505</span>
                   <span>(63) 99223-1586</span>
            </AnswerWrapper>
   
           
        </QuestionContainer>
        
    )

}

export default About;