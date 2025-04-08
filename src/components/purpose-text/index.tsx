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
                O coaching profissional e familiar tem um papel essencial na
                transformação de vidas. Seu principal objetivo é ajudar as
                pessoas a se reconectarem com seus valores, desenvolverem suas
                habilidades e criarem um futuro mais alinhado com seus sonhos e
                propósitos. Através de técnicas e abordagens personalizadas, o
                coaching possibilita um crescimento tanto no âmbito pessoal
                quanto profissional.
              </p>
              <p>
                Além de orientar indivíduos em suas carreiras, o coaching também
                proporciona um impacto positivo no equilíbrio emocional e na
                forma como lidamos com os desafios da vida. Ao desenvolver
                autoconfiança e resiliência, as pessoas conseguem tomar decisões
                mais conscientes e assertivas, alcançando melhores resultados
                tanto no trabalho quanto nos relacionamentos.
              </p>
              <p>
                No contexto familiar, o coaching ajuda a restaurar laços e
                fortalecer conexões, promovendo a comunicação eficaz e o
                entendimento mútuo. Muitas vezes, conflitos surgem por falta de
                diálogo ou por dificuldades em expressar sentimentos e
                necessidades. O coaching atua como uma ponte para essa
                reconciliação, permitindo que cada indivíduo compreenda melhor
                suas emoções e as dos outros ao seu redor.
              </p>
              <p>
                O propósito do coaching vai além do desenvolvimento individual;
                ele busca criar uma sociedade mais empática e conectada. Quando
                pessoas aprendem a gerir melhor suas emoções e a se comunicar
                com clareza, os impactos são sentidos em suas famílias, locais
                de trabalho e comunidades. Dessa forma, o coaching se torna uma
                ferramenta poderosa para gerar mudanças duradouras e
                significativas.
              </p>
              <p>
                Em última análise, meu propósito como coach é inspirar e
                transformar vidas. Através do meu trabalho, busco oferecer
                suporte, orientação e motivação para que cada pessoa alcance seu
                máximo potencial e viva uma vida mais plena e realizada. O
                coaching é um caminho para a evolução contínua, e tenho o
                privilégio de trilhar essa jornada ao lado daqueles que desejam
                crescer e se fortalecer.
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
  padding: 70px 0 0;
  & img {
    width: 1280px;
    border-radius: 15px;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.color};
  }
  & div {
    display: flex;
    padding: 40px;
    flex-direction: column;
    gap: 30px;
    & h2 {
      text-align: center;
    }
    & section {
      display: flex;
      max-width: 1280px;
      gap: 40px;
      flex-wrap: wrap;
      justify-content: center;
      & p {
        width: 300px;
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
