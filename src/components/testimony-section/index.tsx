import testimonyOne from "../../assets/depoiment-1.png";
import testimonyTwo from "../../assets/depoiment-2.png";
import testimonyThree from "../../assets/depoiment-3.png";
import testimonyFour from "../../assets/depoiment-4.png";
import testimonyFive from "../../assets/depoiment-5.png";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const TestimonySection = () => {
  return (
    <>
        <Article>
          <div>
            <img src={testimonyOne} alt="Photo Client" />
            <section>
              <h3>Mariana Souza</h3>
              <h5>Psicóloga</h5>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>
                "Conheci a Tânia em um momento muito difícil da minha vida, onde
                eu não conseguia enxergar uma saída para meus problemas pessoais
                e profissionais. Com seu acolhimento e orientação, consegui me
                reencontrar, recuperar minha autoconfiança e dar um novo rumo à
                minha carreira. Sou imensamente grata por todo o suporte e
                motivação que ela me proporcionou!"
              </p>
            </section>
          </div>
          <div>
            <img src={testimonyTwo} alt="Photo Client" />
            <section>
              <h3>Ricardo Mendes</h3>
              <h5>Engenheiro Civil</h5>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>
                "Minha família estava passando por muitos conflitos, e eu já não
                sabia mais o que fazer para restaurar a harmonia dentro de casa.
                A Tânia nos ajudou a resgatar o diálogo e a compreensão mútua.
                Hoje, conseguimos nos entender melhor e manter uma relação muito
                mais saudável. Seu trabalho é realmente transformador!"
              </p>
            </section>
          </div>
          <div>
            <img src={testimonyThree} alt="Photo Client" />
            <section>
              <h3>Ana Cláudia Pereira</h3>
              <h5>Administradora</h5>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>
                "Sempre tive o sonho de crescer profissionalmente, mas me sentia
                insegura e incapaz de dar os primeiros passos. Através das
                sessões de coaching com a Tânia, aprendi a acreditar no meu
                potencial, definir metas claras e agir com determinação. Hoje,
                estou conquistando coisas que antes pareciam impossíveis. Ela
                foi um divisor de águas na minha trajetória!"
              </p>
            </section>
          </div>
          <div>
            <img src={testimonyFour} alt="Photo Client" />
            <section>
              <h3>Luciana Andrade</h3>
              <h5>Advogada</h5>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>
                "A Tânia tem um dom especial para entender as pessoas e guiá-las
                para o melhor caminho. Seu trabalho me fez perceber a
                importância do equilíbrio entre vida pessoal e profissional.
                Antes, eu vivia apenas para o trabalho e acabava negligenciando
                minha família. Com sua ajuda, consegui reorganizar minha rotina
                e fortalecer meus laços familiares sem abrir mão do meu
                crescimento profissional."
              </p>
            </section>
          </div>
          <div>
            <img src={testimonyFive} alt="Photo Client" />
            <section>
              <h3>Camila Ferreira</h3>
              <h5>Médica</h5>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <p>
                "Quando procurei a Tânia, estava desmotivada e sem perspectiva
                de futuro. Suas palavras e técnicas me ajudaram a enxergar que
                eu tinha muito mais capacidade do que imaginava. Hoje, sou uma
                pessoa mais segura, realizada e feliz. Recomendo o trabalho dela
                para qualquer pessoa que deseja uma transformação real na vida!"
              </p>
            </section>
          </div>
        </Article>
    </>
  );
};
const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 70px;
  & div {
    background-color: ${({ theme }) => theme.colors.bgInvert};
    color: ${({ theme }) => theme.colors.colorInvert};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.color};
    border-radius: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 50px;
    max-width: 1000px;
    min-height: 400px;
    padding: 50px;
    & img {
      width: 150px;
      height: 150px;
      border-radius: 15px;
      box-shadow: 0 0 50px ${({ theme }) => theme.colors.colorInvert};
    }
    & section p {
      margin-top: 30px;
    }
  }
  @media (max-width: 1280px){
    padding: 30px 20px 0;
  }
  @media (max-width: 768px){
    & div{
      flex-direction: column;
      padding: 50px 20px;
    }
    @media (max-width: 768px){
    & h3{
        font-size: 20px;
      }
      & p{
        font-size: 14px;
    }
  }
  }
`;
const StarIcon = styled(FaStar)`
  color: #fabb05;
  font-size: 20px;
`;