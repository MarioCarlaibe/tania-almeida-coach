import styled from "styled-components";
import { FaInstagram, FaEnvelope, FaWhatsapp, FaCopy, FaHeart, } from "react-icons/fa";
import { FadeInSection } from "../framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Alerta } from "../framer-motion";

export const FooterMenu = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setAlertMessage("Copiado com sucesso!");
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 6000);
  };
  return (
    <>
      <FadeInSection>
        <Footer>
          <Contact>
            <h2>Quer saber mais?</h2>
            <p>Entre em contato comigo</p>
            <p>
              Email: taniaalmeidaconexões@gmail.com{""}
              <a>
                <FaCopy
                  onClick={() => copyToClipboard("taniaalmeidaconexoes@gmail.com")} />
              </a>
            </p>
            <p>
              Telefone: (16) 99090-9090{""}
              <a>
                <FaCopy onClick={() => copyToClipboard("(16) 99090-9090")} />
              </a>
            </p>
          </Contact>
          <Links>
            <Icons>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaEnvelope />
              </a>
              <a href="https://wa.me/5516990909090">
                <FaWhatsapp />
              </a>
            </Icons>
            <p>Se quiser me mandar uma mensagem, clique no botão!</p>
            <button>
              <Link to="/contact">Criar mensagem</Link>
            </button>
          </Links>
        </Footer>
        <Credits>
          <p>2025 | Designed & Coded com <FaHeart /> por Carlaibe.Dev</p>
        </Credits>
      </FadeInSection>

      <Alerta show={showAlert} mensagem={alertMessage} onClose={() => setShowAlert(false)} />
    </>
  );
};
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 60px;
  min-height: 280px;
  padding: 30px;
  @media (max-width: 1280px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 768px){
    & h2{
        font-size: 20px;
      }
      & p{
        font-size: 14px;
    }
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & a {
    margin: 5px;
    cursor: pointer;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & p {
    width: 350px;
    text-align: center;
  }
  & button {
    cursor: pointer;
    width: 150px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.bgInvert};
    color: ${({ theme }) => theme.colors.colorInvert};
    border: none;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  & a {
    font-size: 40px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 768px){
    & a{
      font-size: 20px;
    }
  }
`;
const Credits = styled.p`
  text-align: center;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  @media (max-width: 768px){
    & p{
      font-size: 14px;
    }
  }
`;
