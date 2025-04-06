import aboutTania from "../../assets/about-1.jpg";
import aboutDetail from "../../assets/about-2.jpg";
import styled from "styled-components";
import { FadeInSection } from "../framer-motion";

export const AboutSection = () => {
  return (
    <>
      <FadeInSection>
        <Section>
          <img src={aboutTania} alt="Photo Tania" />
          <div>
            <h2>A Jornada de Tânia Almeida: Superação e Propósito</h2>
            <p>
              Tânia Almeida sempre foi uma mulher determinada, que enfrentou
              desafios com coragem e resiliência. Mãe de três filhos e casada
              com Edson Júnior, um homem maravilhoso que sempre a apoiou, ela
              dedicou sua vida a ajudar o próximo. Desde cedo, Tânia percebeu
              que sua missão era transformar vidas, e foi assim que, com muita
              dedicação, começou sua trajetória ajudando pessoas em momentos
              difíceis. Sua capacidade de escuta e empatia fizeram dela um
              verdadeiro suporte para quem precisava de orientação e incentivo.
            </p>
            <p>
              Com o passar dos anos, Tânia percebeu que poderia ampliar ainda
              mais seu impacto ao estudar coaching. Buscando conhecimento e
              aprimorando suas habilidades, ela mergulhou de corpo e alma nessa
              área, com o objetivo de proporcionar um modo de vida melhor para
              aqueles que a procuram. Sua formação foi um divisor de águas, pois
              lhe permitiu estruturar sua abordagem e oferecer um suporte ainda
              mais efetivo para aqueles que desejavam mudar suas trajetórias.
            </p>
            <p>
              Foi assim que nasceu a Conexões, sua empresa dedicada ao
              desenvolvimento pessoal e à reconstrução de laços familiares. A
              partir do seu trabalho, Tânia tem ajudado inúmeras pessoas a
              reencontrarem sua essência, superarem conflitos e resgatarem
              relações abaladas. Para ela, cada história transformada é uma
              vitória, e ver famílias se reaproximando e indivíduos retomando o
              controle de suas vidas é a maior recompensa de sua jornada.
            </p>
          </div>
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Article>
          <img src={aboutDetail} alt="Photo Detail" />
          <div>
            <h2>O Impacto do Trabalho de Tânia na Vida das Pessoas</h2>
            <p>
              O coaching de Tânia Almeida tem sido uma verdadeira ferramenta de
              transformação para muitas pessoas. Com sua abordagem humanizada e
              acolhedora, ela tem ajudado indivíduos a encontrarem sentido na
              vida, superarem traumas e traçarem novos caminhos. Seus
              atendimentos são guiados pela escuta ativa e pelo compromisso de
              oferecer soluções práticas para os desafios enfrentados por seus
              clientes. Mais do que um trabalho, para Tânia, essa missão é um
              chamado, e ela se dedica a isso com todo o amor e dedicação.
            </p>
            <p>
              Um dos aspectos mais marcantes do trabalho de Tânia é a sua
              capacidade de restaurar relacionamentos familiares. Muitas
              famílias, abaladas por problemas e desentendimentos, encontraram
              na Conexões um espaço seguro para resgatar o diálogo e reconstruir
              laços afetivos. Com suas orientações, ela tem proporcionado
              momentos de reflexão e reconciliação, ajudando pais e filhos,
              casais e irmãos a reencontrarem a harmonia e a união.
            </p>
            <p>
              Através do seu conhecimento e dedicação, Tânia Almeida não apenas
              transforma vidas, mas também salva histórias que pareciam estar
              perdidas. Seu trabalho tem sido um farol de esperança para aqueles
              que se sentiam sem direção, mostrando que é possível recomeçar e
              construir um futuro melhor. Para ela, cada vida impactada é uma
              confirmação de que está no caminho certo, e sua jornada continua
              inspirando muitas pessoas a acreditarem no poder da mudança.
            </p>
          </div>
        </Article>
      </FadeInSection>
    </>
  );
};
const Section = styled.section`
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
      width: 400px;
    }
  }
  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    gap: 60px;
    & img{
      margin-top: 0;
    }
    & div{
      gap: 30px;
    }
  }
  @media (max-width: 768px){
    & div{
      padding: 0 70px;
    }
  }
`;
const Article = styled.article`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  padding: 50px;
  min-height: 1100px;
  background-color: ${({ theme }) => theme.colors.bgInvert};
  color: ${({ theme }) => theme.colors.colorInvert};
  & img {
    width: 500px;
    height: 750px;
    margin-top: 100px;
    box-shadow: 0 0 50px ${({ theme }) => theme.colors.colorInvert};
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
  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    gap: 60px;
    & img {
    margin-top: 20px;
    }
    & div{
      gap: 30px;
    }
  }
`;
