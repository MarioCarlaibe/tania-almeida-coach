import styled from "styled-components";
import coverMain from "../../assets/cover-main.jpg";
import coachImg from "../../assets/coach.jpg";
import disc from "../../assets/disc.png";
import { FadeInSection } from "../framer-motion";

export const MainCover = () => {
  return (
    <>
        <Section>
          <img src={coverMain} alt="Cover Main" />
        </Section>
      <FadeInSection>
        <Coach>
          <img src={coachImg} alt="Coach Image" />
          <div>
            <h2>Como o Coach ajuda a restabelecer Conexões?</h2>
            <p>
            O objetivo do coaching ao ajudar um casal a se restabelecer no casamento com o método DISC é promover o autoconhecimento e a compreensão mútua. Cada parceiro possui um perfil comportamental – Dominância, Influência, Estabilidade ou Conformidade – que influencia na forma de se comunicar, tomar decisões e lidar com conflitos. Ao identificar essas diferenças, o coaching facilita uma comunicação mais empática e eficiente, reduzindo mal-entendidos e melhorando a convivência.
            </p>
            <p>
            Além disso, o coach trabalha estratégias alinhadas aos perfis de cada um, ajudando o casal a desenvolver habilidades que equilibram a relação. Por exemplo, pessoas dominantes aprendem a ouvir mais, as influentes ganham foco, as estáveis expressam melhor seus sentimentos, e as conformes se tornam mais flexíveis. Assim, o DISC se torna uma ferramenta poderosa para fortalecer a parceria e restaurar a harmonia no relacionamento.
            </p>
          </div>
        </Coach>
      </FadeInSection>
      <FadeInSection>
        <Article>
          <img src={disc} alt="Image Disc" />
          <div>
            <h2>O que é o Método DISC?</h2>
            <p>
              O Método DISC é uma ferramenta de avaliação comportamental que
              classifica os perfis das pessoas em quatro categorias principais:
              Dominância (D), Influência (I), Estabilidade (S) e Conformidade
              (C). Criado a partir dos estudos do psicólogo William Moulton
              Marston na década de 1920, o DISC é amplamente utilizado em
              processos de seleção, desenvolvimento pessoal e profissional,
              dinâmicas de equipe e liderança.
            </p>
          </div>
        </Article>
      </FadeInSection>
      <FadeInSection>
        <Profile>
          <div>
            <h2>Dominância (D)</h2>
            <br />
            <p>
              Características principais: Pessoas com perfil dominante são
              diretas, determinadas e gostam de desafios. Elas costumam tomar
              decisões rápidas e buscar soluções eficientes. <br />
              <br />
              Pontos fortes: Liderança, objetividade, assertividade e foco em
              resultados. <br />
              <br />
              Possíveis desafios: Tendência a serem impacientes, autoritárias e
              a correrem riscos excessivos.
            </p>
          </div>
          <div>
            <h2>Influência (I)</h2>
            <br />
            <p>
              Características principais: Pessoas influentes são comunicativas,
              carismáticas e entusiasmadas. Elas gostam de interagir e persuadir
              os outros. <br />
              <br />
              Pontos fortes: Facilidade de comunicação, entusiasmo, otimismo e
              trabalho em equipe. <br />
              <br />
              Possíveis desafios: Dificuldade com organização, tendência a
              dispersão e sensibilidade a rejeição.
            </p>
          </div>
          <div>
            <h2>Estabilidade (S)</h2>
            <br />
            <p>
              Características principais: Indivíduos com perfil estável são
              pacientes, cooperativos e confiáveis. Valorizam a harmonia e a
              segurança no ambiente de trabalho. <br />
              <br />
              Pontos fortes: Empatia, lealdade, paciência e habilidade para
              manter a harmonia em grupos. <br />
              <br />
              Possíveis desafios: Resistência às mudanças, dificuldade em tomar
              decisões rápidas e necessidade de estabilidade constante.
            </p>
          </div>
          <div>
            <h2>Conformidade (C)</h2>
            <br />
            <p>
              Características principais: Pessoas com esse perfil são
              analíticas, detalhistas e prezam pela qualidade e precisão. <br />
              <br />
              Pontos fortes: Pensamento crítico, organização, foco na qualidade
              e cumprimento de normas. <br />
              <br />
              Possíveis desafios: Excesso de perfeccionismo, dificuldade em
              lidar com improvisos e aversão a erros.
            </p>
          </div>
        </Profile>
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
    & img{
      width: 95vw;
    }
  }
`;
const Coach = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  & img {
    height: 600px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.colorInvert};
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
      width: 300px;
    }
  }
  @media (max-width: 1280px){
    flex-direction: column-reverse;
    align-items: center;
    padding: 30px;
    & div{
      gap: 30px;
    }
    & img {
      height: 420px;
    }
  }
  @media (max-width: 768px){
    & div{
      max-width: 375px;
    }
    & h2{
        font-size: 20px;
    }
    & p{
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
    width: 400px;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
    max-width: 500px;
  }
  @media (max-width: 1280px){
    flex-direction: column;
    align-items: center;
    gap: 50px;
    & img {
    width: 300px;
    }
  }
  @media (max-width: 768px){
    & div{
      max-width: 375px;
    }
    & h2{
        font-size: 20px;
      }
      & p{
        font-size: 14px;
    }
  }
  }
`;
const Profile = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  padding: 50px;
  gap: 15px;
  & div {
    width: 300px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.colorInvert};
    background-color: ${({ theme }) => theme.colors.bg};
  }
  @media (max-width: 1280px){
    flex-wrap: wrap;
  }
  @media (max-width: 768px){
    padding: 30px;
    text-align: center;
    & div{
      & h2{
        font-size: 20px;
      }
      & p{
        font-size: 14px;
      }
    }
  }
`;
