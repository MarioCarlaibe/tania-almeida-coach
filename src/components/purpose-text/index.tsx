import purpose from "../../assets/purpose.jpg";
import styled from "styled-components";
import { FadeInSection } from "../framer-motion";

export const PurposeSection = () => {
  return (
    <>
        <Section>
          <img src={purpose} alt="Photo purpose" />
          <FadeInSection>
          <div>
            <h2>Meu Propósito</h2>
            <section>
              <p>
              O coaching profissional e familiar é uma ponte para a transformação de vidas. Ele ajuda as pessoas a se reconectarem com seus valores, descobrirem novos caminhos e construírem uma realidade mais alinhada com seus sonhos e propósitos.
              </p>
              <p>
              Além do aspecto profissional, o coaching fortalece o equilíbrio emocional e ensina a lidar melhor com os desafios. Isso gera mais clareza nas decisões e mais satisfação na vida como um todo.
              </p>
              <p>
              No ambiente familiar, o coaching atua como uma ponte de reconciliação, restaurando vínculos e promovendo o respeito mútuo. Ele cria um espaço onde as emoções são acolhidas e compreendidas.
              </p>
              <p>
              Ao transformar o indivíduo, o coaching gera um efeito positivo que se estende à família, ao trabalho e à sociedade. É uma ferramenta poderosa para promover mudanças reais e duradouras.
              </p>
              <p>
              Meu propósito como coach é justamente esse: inspirar, orientar e transformar. Através do meu trabalho, busco despertar o melhor em cada pessoa, ajudando-a a viver de forma mais plena, consciente e conectada com sua essência.
              </p>
            </section>
          </div>
          </FadeInSection>
        </Section>
    </>
  );
};
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
  & img {
    width: 1150px;
    border-radius: 15px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.color};
  }
  & div {
    display: flex;
    padding: 20px 0 10px;
    flex-direction: column;
    gap: 30px;
    & h2 {
      text-align: center;
    }
    & section {
      display: flex;
      max-width: 1000px;
      gap: 40px;
      flex-wrap: wrap;
      justify-content: center;
      & p {
        width: 250px;
        text-align: center;
      }
    }
  }
  @media (max-width: 1280px){
    padding: 30px;
    & img {
    width: 95vw;
    }
    & div {
      padding: 20px 20px 0;
    }
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
