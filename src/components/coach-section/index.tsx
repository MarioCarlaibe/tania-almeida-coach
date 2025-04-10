import coachFamily from "../../assets/coach-family.jpg";
import coachPersonal from "../../assets/coach-personal.jpg";
import styled from "styled-components";
import { FadeInSection } from "../framer-motion";

export const CoachSection = () => {
  return (
    <>
        <Section>
          <img src={coachPersonal} alt="Photo Coach" />
        </Section>
      <FadeInSection>
        <SubTitle>O Coaching e a Evolução Profissional</SubTitle>
        <SectionText>
          <section>
            <h3>1º Motivo</h3>
            <p>
            O coaching é uma ferramenta valiosa para quem deseja crescer profissionalmente. Ele ajuda a identificar pontos fortes, superar limitações e traçar metas claras. Com isso, a pessoa se torna mais segura para tomar decisões e evoluir na carreira.
            </p>
          </section>
          <section>
            <h3>2º Motivo</h3>
            <p>
            Mais do que melhorar o desempenho, o coaching desenvolve autoconfiança e motivação. Muitas pessoas têm talentos adormecidos ou bloqueios que impedem seu progresso. Com o apoio certo, conseguem despertar seu potencial e conquistar novos espaços.
            </p>
          </section>
          <section>
            <h3>3º Motivo</h3>
            <p>
            Empresas também se beneficiam do coaching ao aplicá-lo no desenvolvimento de líderes e equipes. Isso gera ambientes mais saudáveis, produtivos e colaborativos, fortalecendo a cultura organizacional e os resultados.
            </p>
          </section>
        </SectionText>
      </FadeInSection>
      <FadeInSection>
        <Article>
          <img src={coachFamily} alt="Photo Coach Family" />
          <div>
            <h2>O Coaching e a União Familiar</h2>
            <p>
            Além de apoiar no crescimento profissional, o coaching também fortalece as relações familiares. Em tempos de estresse e correria, é comum que a comunicação dentro de casa se desgaste. O coaching ajuda a resgatar o diálogo e a empatia entre os membros da família.
            </p>
            <p>
            Com técnicas voltadas ao entendimento e à escuta, o coaching promove convivência mais leve e respeitosa. Pequenos ajustes na comunicação podem gerar grandes mudanças na dinâmica familiar, fortalecendo os laços.
            </p>
            <p>
            Quando cada integrante se sente valorizado e compreendido, os vínculos se tornam mais sólidos. O coaching se torna, assim, um aliado para criar famílias mais conectadas, resilientes e felizes.
            </p>
          </div>
        </Article>
      </FadeInSection>
    </>
  );
};
const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px;
  & img {
    width: 1150px;
    border-radius: 15px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.color};
  }
  @media (max-width: 1280px){
    padding: 30px;
    & img {
    width: 95vw;
    }
  }
`;
const SubTitle = styled.h2`
  text-align: center;
  padding: 30px;
  font-size: 32px;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  @media (max-width: 768px){
    font-size: 24px;
  }
`;
const SectionText = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 0 50px;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  & section {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    & h3 {
      font-size: 24px;
    }
  }
  @media (max-width: 1280px){
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
  @media (max-width: 768px){
    padding: 20px;
    & section h3{
        font-size: 20px;
      }
    & section p{
        font-size: 14px;
    }
  }
`;
const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 50px;
  & img {
    height: 600px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.color};
    border-radius: 15px;
  }
  & div {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
    & h2 {
      max-width: 400px;
    }
  }
  @media (max-width: 1280px){
    flex-direction: column-reverse;
    align-items: center;
    padding: 30px;
     & img{
      height: 420px;
    }
  }
  @media (max-width: 768px){
    padding: 20px 30px;
    & h2{
        font-size: 20px;
      }
    & p{
        font-size: 14px;
    }
  }
`;
