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
              O coaching tem se tornado uma ferramenta essencial para aqueles
              que desejam evoluir profissionalmente. Através de técnicas
              específicas e metodologias estruturadas, esse processo ajuda
              indivíduos a identificarem seus pontos fortes, trabalharem em suas
              fraquezas e alcançarem metas claras e objetivas. O
              autoconhecimento proporcionado pelo coaching permite que as
              pessoas tomem decisões mais assertivas em suas carreiras,
              aumentando sua produtividade e satisfação no trabalho.
            </p>
          </section>
          <section>
            <h3>2º Motivo</h3>
            <p>
              Além de desenvolver habilidades profissionais, o coaching também
              estimula a confiança e a motivação. Muitas vezes, indivíduos têm
              talentos inexplorados ou enfrentam bloqueios emocionais que
              impedem seu crescimento. O coaching auxilia na superação dessas
              barreiras, incentivando as pessoas a saírem da zona de conforto e
              se desafiarem constantemente. Esse processo resulta não apenas em
              melhores oportunidades de trabalho, mas também em maior realização
              pessoal.
            </p>
          </section>
          <section>
            <h3>3º Motivo</h3>
            <p>
              Empresas também têm adotado o coaching como estratégia para
              potencializar o desempenho de seus colaboradores. Líderes que
              investem nesse processo conseguem melhorar o ambiente de trabalho,
              aumentar a eficiência das equipes e promover uma cultura
              organizacional mais saudável. Dessa forma, o coaching se torna uma
              ferramenta valiosa para aqueles que buscam crescimento e sucesso
              na vida profissional.
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
              Além de impactar a vida profissional, o coaching desempenha um
              papel fundamental na estrutura familiar. Em um mundo cada vez mais
              acelerado e cheio de desafios, muitas famílias enfrentam
              dificuldades de comunicação e convivência. O coaching oferece
              ferramentas para fortalecer os laços familiares, ajudando as
              pessoas a compreenderem melhor umas às outras e a resolverem
              conflitos de forma saudável.
            </p>
            <p>
              A aplicação do coaching nas relações familiares permite que cada
              membro da família desenvolva habilidades como empatia, escuta
              ativa e gestão emocional. Esses aspectos são essenciais para criar
              um ambiente mais harmônico e acolhedor dentro de casa. Muitas
              vezes, pequenos ajustes na forma de interagir podem trazer grandes
              melhorias na qualidade dos relacionamentos.
            </p>
            <p>
              Ao promover o diálogo e a compreensão mútua, o coaching
              possibilita que as famílias se tornem mais unidas e resilientes.
              Quando cada indivíduo se sente ouvido e valorizado, os conflitos
              são reduzidos e os vínculos são fortalecidos. Dessa forma, o
              coaching se torna um poderoso aliado na construção de relações
              familiares saudáveis e duradouras.
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
  padding: 70px 0 50px;
  & img {
    width: 1280px;
    border-radius: 15px;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.color};
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
  justify-content: space-evenly;
  padding: 30px 30px 60px;
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
    padding: 30px 20px;
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
  justify-content: space-evenly;
  padding: 50px;
  min-height: 1100px;
  & img {
    width: 500px;
    height: 750px;
    margin-top: 100px;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.color};
    border-radius: 15px;
  }
  & div {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    & h2 {
      max-width: 400px;
    }
  }
  @media (max-width: 1280px){
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 50px 20px 20px;
     & img{
      margin-top: 20px;
      width: 250px;
      height: 375px;
    }
    & div{
      gap: 20px;
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
