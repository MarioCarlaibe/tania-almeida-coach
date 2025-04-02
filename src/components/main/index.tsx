import styled from "styled-components";
import coverMain from '../../assets/cover-main.jpg';
import coachImg from '../../assets/coach.jpg';
import disc from '../../assets/DISC.png'
import { FadeInSection } from "../framer-motion";

export const MainCover = () => {
  return (
    <Body>
        <Section>
            <img src={coverMain} alt="Cover Main"/>
        </Section> 
        <FadeInSection>
        <Coach>
          <img src={coachImg} alt="Coach Image"/>
          <div>
            <h2>Como o Coach ajuda a restabelecer Conexões?</h2>
            <p>O objetivo de um coaching ao ajudar um casal a se restabelecer no casamento usando o método DISC é promover o autoconhecimento e a compreensão mútua entre os parceiros. Cada indivíduo possui um perfil comportamental distinto – Dominância, Influência, Estabilidade ou Conformidade – que influencia sua forma de se comunicar, tomar decisões e lidar com conflitos. Ao identificar essas características, o coaching auxilia o casal a reconhecer as diferenças naturais entre eles, reduzindo mal-entendidos e promovendo uma comunicação mais eficaz e empática.</p>
            <p>Além disso, o coaching trabalha para fortalecer o relacionamento ao criar estratégias personalizadas para cada perfil comportamental, ajudando o casal a encontrar um equilíbrio saudável na convivência. Pessoas mais dominantes podem aprender a ser mais flexíveis e atentas às necessidades do parceiro, enquanto indivíduos mais influentes podem desenvolver maior organização e comprometimento. Já aqueles com perfil estável podem aprender a expressar melhor suas emoções, e os mais conformes podem trabalhar a flexibilidade diante das imperfeições do relacionamento. Dessa forma, o método DISC se torna uma ferramenta poderosa para restaurar a harmonia e fortalecer a parceria no casamento.</p>
          </div>
        </Coach>
        </FadeInSection>
        <FadeInSection>
          <Article>
            <img src={disc} alt="Image Disc"/>
            <div>
                <h2>O que é o Método DISC?</h2>
                <p>O Método DISC é uma ferramenta de avaliação comportamental que classifica os perfis das pessoas em quatro categorias principais: Dominância (D), Influência (I), Estabilidade (S) e Conformidade (C). Criado a partir dos estudos do psicólogo William Moulton Marston na década de 1920, o DISC é amplamente utilizado em processos de seleção, desenvolvimento pessoal e profissional, dinâmicas de equipe e liderança.</p>  
            </div>
          </Article>
        </FadeInSection>
        <FadeInSection>
          <Profile>
            <div>
                <h2>Dominância (D)</h2><br />
                <p>
                    Características principais: Pessoas com perfil dominante são diretas, determinadas e gostam de desafios. Elas costumam tomar decisões rápidas e buscar soluções eficientes. <br /><br />
                    Pontos fortes: Liderança, objetividade, assertividade e foco em resultados. <br /><br />
                    Possíveis desafios: Tendência a serem impacientes, autoritárias e a correrem riscos excessivos.
                </p>
            </div>
            <div>
                <h2>Influência (I)</h2><br />
                <p>
                    Características principais: Pessoas influentes são comunicativas, carismáticas e entusiasmadas. Elas gostam de interagir e persuadir os outros. <br /><br />
                    Pontos fortes: Facilidade de comunicação, entusiasmo, otimismo e trabalho em equipe. <br /><br />
                    Possíveis desafios: Dificuldade com organização, tendência a dispersão e sensibilidade a rejeição.
                </p>
            </div>
            <div>
                <h2>Estabilidade (S)</h2><br />
                <p>
                    Características principais: Indivíduos com perfil estável são pacientes, cooperativos e confiáveis. Valorizam a harmonia e a segurança no ambiente de trabalho. <br /><br />
                    Pontos fortes: Empatia, lealdade, paciência e habilidade para manter a harmonia em grupos. <br /><br />
                    Possíveis desafios: Resistência às mudanças, dificuldade em tomar decisões rápidas e necessidade de estabilidade constante.
                </p>
            </div>
            <div>
                <h2>Conformidade (C)</h2><br />
                <p>
                    Características principais: Pessoas com esse perfil são analíticas, detalhistas e prezam pela qualidade e precisão. <br /><br />
                    Pontos fortes: Pensamento crítico, organização, foco na qualidade e cumprimento de normas. <br /><br />
                    Possíveis desafios: Excesso de perfeccionismo, dificuldade em lidar com improvisos e aversão a erros.
                </p>
            </div>
          </Profile>
        </FadeInSection>
    </Body>
  );
};
const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
`
const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 70px 0 50px;
  & img{
    width: 1280px;
    border-radius: 15px;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.color};
  }
`
const Coach = styled.article`
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  & img{
    width: 500px;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.colorInvert};
    border-radius: 15px
  }
  & div{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    & h2{
      width: 300px;
    }
  }
`
const Article = styled.article`
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 30px 200px;
  & img{
    width: 500px;
  }
  & div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 20px;
    width: 500px
  }
`
const Profile = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  padding: 50px;
  gap: 15px;
  & div{
    width: 300px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.colorInvert};
    background-color: ${({ theme }) => theme.colors.bg};
  }
`