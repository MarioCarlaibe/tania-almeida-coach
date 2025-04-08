import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { FadeInSection } from "../framer-motion";
import { Alerta } from "../framer-motion";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type FormErrors = {
  nome: boolean;
  email: boolean;
  telefone: boolean;
  mensagem: boolean;
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    nome: false,
    email: false,
    telefone: false,
    mensagem: false,
  });

  const [showAlert, setShowAlert] = useState<boolean>(false);

  const validate = () => {
    const newErrors: FormErrors = {
      nome: formData.nome.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      telefone: formData.telefone.trim() === "",
      mensagem: formData.mensagem.trim() === "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log("Formulário enviado:", formData);

      setShowAlert(true);

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });

      setTimeout(() => setShowAlert(false), 6000);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <>
      <FadeInSection>
        <Main onSubmit={handleSubmit}>
          <Form>
            <input
              type="text"
              name="nome"
              placeholder="Nome completo *"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
            />
            {errors.nome && <span>* campo obrigatório</span>}

            <input
              type="text"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <span>* email inválido</span>}

            <input
              type="text"
              name="telefone"
              placeholder="Telefone *"
              value={formData.telefone}
              onChange={(e) =>
                setFormData({ ...formData, telefone: e.target.value })
              }
            />
            {errors.telefone && <span>* campo obrigatório</span>}

            <Textarea
              name="mensagem"
              placeholder="Mensagem *"
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
            ></Textarea>
            {errors.mensagem && <span>* campo obrigatório</span>}

            <p>* Campos Obrigatórios</p>
            <button type="submit">Enviar</button>
          </Form>
        </Main>

        <Alerta
          show={showAlert}
          mensagem="Mensagem enviada com sucesso!"
          onClose={() => setShowAlert(false)}
        />
      </FadeInSection>
    </>
  );
};
const Main = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  & input,
  & button {
    height: 46px;
    border-radius: 20px;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) => theme.colors.bgInvert};
    &::placeholder {
      color: ${({ theme }) => theme.colors.color};
    }
  }
  & button {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.color};
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  padding: 30px;
  & p {
    text-align: center;
    font-size: 14px;
  }
  & span {
    color: red;
    font-size: 12px;
  }
`;
const Textarea = styled.textarea`
  resize: none;
  height: 120px;
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.bgInvert};
  &::placeholder {
    color: ${({ theme }) => theme.colors.color};
  }
`;
