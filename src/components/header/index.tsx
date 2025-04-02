import styled from "styled-components";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { AnimatedButton } from "../../themes/button"
import { Link } from "react-router-dom";

export const HeaderMenu = () => {
  return (
    <Header>
      <h1>Tânia Almeida</h1>
      <Icons>
        <a href=""><FaInstagram /></a>
        <a href=""><FaEnvelope /></a>
        <a href="https://wa.me/5516990909090"><FaWhatsapp /></a>
      </Icons>
      <nav>
        <Checkbox id="menu-hamburguer" />
        <Label htmlFor="menu-hamburguer">
          <div>
            <Hamburger />
          </div>
        </Label>
        <Menu>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/">Coach</Link></li>
          <li><Link to="/">Meu propósito</Link></li>
          <li><Link to="/">Depoimentos</Link></li>
          <li><Link to="/">Contato</Link></li>
          <Button><AnimatedButton /></Button>
        </Menu>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.color};
  position: relative;
  & h1{
    padding: 30px;
    text-align: center;
    font-family: "Imperial Script", cursive;
    font-weight: 400;
    font-size: 100px;
  }
  & nav{
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1000px){
    & nav{
        position: absolute;
        top: 38px;
        right: 30px;
        z-index: 1;
    }
    & nav div {
      position: absolute;
      right: 10px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  display: none;
  @media (max-width: 1000px){
    display: block;
  }
`;

const Hamburger = styled.span`
  background-color: ${({ theme }) => theme.colors.color};
  position: relative;
  width: 25px;
  height: 2px;
  transition: 0.5s ease-in-out;
  display: none;

  &::before,
  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.color};
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out;
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }
  @media (max-width: 1000px){
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  width: 1280px;
  min-height: 70px;
  justify-content: space-evenly;
  align-items: center;
  & li{
    transition: all 0.3s ease-in-out;
  }
  & li:hover{
    transform: scale(1.1);
  }
  & li a{
    font-size: 18px;
    font-weight: 400;
    padding: 10px 20px;
    border-radius: 50px;
    transition: 0.3s ease-out;
    &:hover{
      background-color: ${({ theme }) => theme.colors.bgInvert};
      color: ${({ theme }) => theme.colors.colorInvert};
    }
  }
  
  @media (max-width: 1000px){
    display: none;
    width: 230px;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 20px;
    border-radius: 10px;
    margin-top: 60px;
    border: 2px solid ${({ theme }) => theme.colors.color};
    & a{
      display: block;
      padding: 20px;
      text-align: center;
    }
    
  }
`;
const Button = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked ~ ${Label} ${Hamburger} {
    transform: rotate(45deg);
  }

  &:checked ~ ${Label} ${Hamburger}::before {
    transform: rotate(90deg);
    top: 0;
    width: 100%;
  }

  &:checked ~ ${Label} ${Hamburger}::after {
    transform: rotate(90deg);
    bottom: 0;
    width: 100%;
  }
  @media (max-width: 1000px){
    &:checked ~ ${Menu} {
    display: block;
    }
  }
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 80px;
  left: 10%;
  & a {
    font-size: 30px;
    color: var(--Body);
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.2);
    }
  }
`;