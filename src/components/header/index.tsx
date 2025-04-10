import styled from "styled-components";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { AnimatedButton } from "../../themes/button";
import { Link } from "react-router-dom";
import { MenuHamburguer } from "../menu-hamburguer"

export const HeaderMenu = () => {
  return (
    <Header>
      <Title>
        <Icons>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaEnvelope /></a>
          <a href="https://wa.me/5516990909090"><FaWhatsapp /></a>
        </Icons>
        <h1>Tânia Almeida</h1>
        <MenuHamburguer/>
      </Title>
       <Menu>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/coach">Coach</Link></li>
        <li><Link to="/purpose">Meu propósito</Link></li>
        <li><Link to="/testimony">Depoimentos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <Button>
          <AnimatedButton />
        </Button>
      </Menu>
    </Header>
  );
};
const Title = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    padding: 30px;
    font-family: "Imperial Script", cursive;
    font-weight: 400;
    font-size: 100px;
  }
  @media (max-width: 1280px){
    flex-direction: column-reverse;
    & h1{
      font-size: 70px;
      padding: 20px 0;
    }
  }
  @media (max-width: 768px){
    & h1{
      font-size: 50px;
      padding: 10px 30px;
      text-align: left;
    }
  }
`
const Icons = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  left: 12%;
  gap: 20px;
  align-items: center;
  z-index: 10;
  & a {
    font-size: 30px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1280px){
    position: relative;
    inset: 0;
    justify-content: center;
    & a{
      font-size: 25px;
    }
  }
  @media (max-width: 768px){
    & a{
      font-size: 20px;
    }
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;
const Menu = styled.ul`
  display: flex;
  width: 1280px;
  min-height: 70px;
  justify-content: space-evenly;
  align-items: center;
  & li {
    transition: all 0.3s ease-in-out;
  }
  & li:hover {
    transform: scale(1.1);
  }
  & li a {
    font-size: 18px;
    font-weight: 400;
    padding: 10px 20px;
    border-radius: 50px;
    transition: 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.bgInvert};
      color: ${({ theme }) => theme.colors.colorInvert};
    }
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;
const Button = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;