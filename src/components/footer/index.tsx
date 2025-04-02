import styled from "styled-components";
import { FaInstagram, FaEnvelope, FaWhatsapp, FaCopy } from "react-icons/fa";
import { FadeInSection } from "../framer-motion";

export const FooterMenu = () => {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copiado com sucesso!!!");
      };
  return (
    <>
      <FadeInSection>
        <Footer>
            <Contact>
                <h2>Quer saber mais?</h2>
                <p>Entre em contato comigo</p>
                <p>Email: taniaalmeidaconexões@gmail.com <a><FaCopy onClick={() => copyToClipboard("taniaalmeidaconexoes@gmail.com")}/></a></p>
                <p>Telefone: (16) 99090-9090 <a><FaCopy onClick={() => copyToClipboard("(16) 99090-9090")}/></a></p>
            </Contact>
            <Links>
                <Icons>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaEnvelope /></a>
                    <a href="https://wa.me/5516990909090"><FaWhatsapp /></a>
                </Icons>
                <p>Se quiser me mandar uma mensagem, clique no botão!</p>
                <button>Criar mensagem</button>
            </Links>
        </Footer>
        <Credits>2025 | Designed & Coded com ❤️️ por Carlaibe.Dev</Credits>
      </FadeInSection>  
    </>
    
  );
};
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 60px;
  height: 280px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.color};
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & a{
    color: ${({ theme }) => theme.colors.color};
    margin: 5px;
    cursor: pointer;
  }
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & p{
    width: 350px;
    text-align: center;
  }
  & button{
    cursor: pointer;
    width: 150px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.bgInvert};
    color: ${({ theme }) => theme.colors.colorInvert};
    border: none;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
    }
  }
`
const Icons = styled.div`
  display: flex;
  gap: 20px;
  & a {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.color};
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.2);
    }
  }
`
const Credits = styled.p`
    text-align: center;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.bgInvert};
    color: ${({ theme }) => theme.colors.colorInvert};
`
