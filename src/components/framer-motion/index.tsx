import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

interface AlertaProps {
  show: boolean;
  mensagem: string;
  onClose?: () => void;
}

export const Alerta: React.FC<AlertaProps> = ({ show, mensagem, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <Overlay>
          <Box
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{mensagem}</p>
            {onClose && <ClosedButton onClick={onClose}>Fechar</ClosedButton>}
          </Box>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
const Box = styled(motion.div)`
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  min-width: 300px;
`;
const ClosedButton = styled.button`
  margin-top: 20px;
  padding: 10px 18px;
  border: none;
  background: #0077cc;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;
