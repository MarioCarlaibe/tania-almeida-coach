import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";
import cloud from "../../assets/cloud.svg";
import cloudopacity from "../../assets/cloudopacity.svg";
import stars from "../../assets/stars.svg";

export const AnimatedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme.title === "dark";
  return (
    <>
      <Switch htmlFor="switch">
        <input type="checkbox" id="switch" onChange={toggleTheme} checked={isDark} />
        <Sunmoon>
          <DarkSide />
        </Sunmoon>
        <Clouds>
          <CloudOne src={cloud} alt="Clouds" />
          <CloudTwo src={cloudopacity} alt="Clouds" />
          <CloudThree src={cloud} alt="Clouds" />
          <CloudFour src={cloudopacity} alt="Clouds" />
          <Stars src={stars} alt="Stars" />
        </Clouds>
      </Switch>
    </>
  );
};
const Switch = styled.label`
  width: 100px;
  height: 45px;
  border-radius: 30px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.switchBg};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease-in-out;
  & input {
    display: none;
  }
  @media (max-width: 1000px) {
    width: 80px;
    height: 35px;
  }
`;
const Sunmoon = styled.span`
    position: absolute;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.sunMoonBg};
    box-shadow: ${({ theme }) => theme.colors.sunMoonShadow};
    left: 5px;
    transition: all 0.7s ease-in-out;
    ${Switch} input:checked ~ & {
        left: calc(100% - 41px);
    }
    @media (max-width: 1000px){
        width: 28px;
        height: 28px;
        ${Switch} input:checked ~ & {
        left: calc(100% - 31px);
    }
`;
const DarkSide = styled.span`
  position: absolute;
  top: 1.9px;
  left: 1.9px;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkSide};
  transition: all 0.3s ease-in-out;
`;
const Clouds = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.7s ease-in-out;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const CloudOne = styled.img`
  position: absolute;
  width: ${({ theme }) => theme.transitions.bottonWidth};
  bottom: ${({ theme }) => theme.transitions.bottomOne};
  left: ${({ theme }) => theme.transitions.leftOne};
  transition: all 0.7s ease-in-out;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const CloudTwo = styled.img`
  position: absolute;
  width: ${({ theme }) => theme.transitions.bottonWidth};
  bottom: ${({ theme }) => theme.transitions.bottomTwo};
  left: ${({ theme }) => theme.transitions.leftTwo};
  transition: all 0.7s ease-in-out;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const CloudThree = styled.img`
  position: absolute;
  width: ${({ theme }) => theme.transitions.bottonWidth};
  bottom: ${({ theme }) => theme.transitions.bottomThree};
  right: ${({ theme }) => theme.transitions.rightThree};
  transition: all 0.7s ease-in-out;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const CloudFour = styled.img`
  position: absolute;
  width: ${({ theme }) => theme.transitions.bottonWidth};
  bottom: ${({ theme }) => theme.transitions.bottomFour};
  right: ${({ theme }) => theme.transitions.rightFour};
  transition: all 0.7s ease-in-out;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Stars = styled.img`
  position: absolute;
  width: ${({ theme }) => theme.transitions.bottonWidth};
  top: ${({ theme }) => theme.transitions.starsTop};
  left: 0;
  transform: translateY(-50%);
  transition: all 0.7s ease-in-out;
  @media (max-width: 1000px) {
    display: none;
  }
`;
