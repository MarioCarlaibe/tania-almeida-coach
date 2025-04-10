import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { AnimatedButton } from "../../themes/button";

interface HamburgerProps {
    $isOpen: boolean;
  }

const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
export const MenuHamburguer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    return (
      <Container ref={menuRef}>
        <HamburgerButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <span />
          <span />
          <span />
        </HamburgerButton>
  
        <AnimatePresence>
          {isOpen && (
            <MotionMenu
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/coach">Coach</Link></li>
                <li><Link to="/purpose">Meu propósito</Link></li>
                <li><Link to="/testimony">Depoimentos</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <Button><AnimatedButton/></Button>
              </ul>
            </MotionMenu>
          )}
        </AnimatePresence>
      </Container>
    );
  };
  const Container = styled.div`
  position: absolute;
  top: 55px;
  right: 30px;
  @media (max-width: 768px){
    top: 28px;
    right: 15px;
  }
`;
const HamburgerButton = styled.button<HamburgerProps>`
  width: 30px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  & span {
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.color};
    border-radius: 2px;
    transition: 0.3s;
    position: absolute;
    &:nth-child(1){
      top: 0;
    }
    &:nth-child(3) {
      bottom: 0;
    }
    ${({ $isOpen }) => $isOpen && css`
        &:nth-child(1) {
          transform: rotate(135deg);
          top: 11px;
        }
        &:nth-child(2) {
          transform: rotate(45deg)
        }
        &:nth-child(3) {
          transform: rotate(135deg);
          bottom: 10px;
        }
      `}
  }
  display: none;
  @media (max-width: 1280px){
    display: flex;
  }
  @media (max-width: 768px){
    & span {
    height: 2px;
    width: 90%;
      &:nth-child(1){
      top: 2px;
      }
      &:nth-child(3) {
        bottom: 2px;
      }
      ${({ $isOpen }) => $isOpen && css`
        &:nth-child(1) {
          top: 11px;
        }
        &:nth-child(3) {
          bottom: 11px;
        }
      `}
    }
  }
`;
const MotionMenu = styled(motion.nav)`
  position: absolute;
  top: 40px;
  width: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
  right: 0;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  border-radius: 8px;
  z-index: 10;
  li {
    margin-bottom: 10px;
    a {
      color: ${({ theme }) => theme.colors.colorInvert};
      font-weight: 500;
    }
  }
`;
const Button = styled.li`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;