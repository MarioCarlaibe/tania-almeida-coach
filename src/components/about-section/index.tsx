import aboutTania from "../../assets/about-1.jpg";
import aboutDetail from "../../assets/about-2.jpg";
import styled from "styled-components";
import { FadeInSection } from "../framer-motion";

export const AboutSection = () => {
  return (
    <>
        <Section>
          <img src={aboutTania} alt="Photo Tania" />
          <div>
            <h2>A Jornada de Tânia Almeida: Superação e Propósito</h2>
            <p>
            Tânia Almeida sempre foi uma mulher determinada e resiliente. Mãe de três filhos e casada com Edson Júnior, um grande companheiro, ela sempre teve como missão ajudar o próximo. Desde jovem, acolheu pessoas em momentos difíceis, oferecendo palavras de apoio e escuta verdadeira.
            </p>
            <p>
            Com o tempo, percebeu que poderia ampliar seu impacto estudando coaching. Aprofundou-se na área com dedicação, buscando ferramentas para transformar ainda mais vidas. O coaching permitiu que ela organizasse melhor sua forma de ajudar, com métodos eficazes e direcionados.
            </p>
            <p>
            Foi assim que nasceu a Conexões, sua empresa voltada ao desenvolvimento pessoal e à reconstrução familiar. Através dela, Tânia tem ajudado pessoas a reencontrarem seu valor, reconstruírem vínculos e retomarem o controle de suas vidas. Cada história de superação é para ela um grande presente.
            </p>
          </div>
        </Section>
      <FadeInSection>
        <Article>
          <img src={aboutDetail} alt="Photo Detail" />
          <div>
            <h2>O Impacto do Trabalho de Tânia na Vida das Pessoas</h2>
            <p>
            O coaching de Tânia tem sido uma ferramenta poderosa de transformação. Com empatia e escuta ativa, ela ajuda pessoas a enfrentarem desafios, redescobrirem seus talentos e encontrarem um novo rumo em suas vidas. Sua atuação vai além da técnica — é feita com coração.
            </p>
            <p>
            Um dos maiores diferenciais de seu trabalho é a restauração de vínculos familiares. Famílias que enfrentavam conflitos e distanciamentos encontraram na Conexões um espaço seguro para diálogo e reconciliação. O resultado é mais compreensão, afeto e união entre os membros.
            </p>
            <p>
            Com dedicação e sensibilidade, Tânia tem sido um ponto de apoio para quem precisa recomeçar. Seu trabalho inspira coragem, desperta potenciais e mostra que a mudança é sempre possível. Ela acredita que cada pessoa pode escrever uma nova história e vive esse propósito diariamente.
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
      width: 400px;
    }
  }
  @media (max-width: 1280px){
    flex-direction: column-reverse;
    align-items: center;
    padding: 30px;
    & img{
      height: 420px;
    }
    & div{
      gap: 30px;
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
  flex-direction: row-reverse;
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
      max-width: 400px;
    }
  }
  @media (max-width: 1280px){
    flex-direction: column-reverse;
    align-items: center;
    padding: 30px;
    & img {
      height: 420px;
    }
    & div{
      gap: 30px;
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
