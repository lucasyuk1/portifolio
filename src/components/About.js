import React from "react";
import { stackList, stackList2 } from "../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./styles/AboutStyle";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://imgur.com/pAuJxTp.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Meu nome é <strong>Lucas C. Silveira</strong> sou formado em Análise e Desenvolvimento de Sistemas(UNILEÃO) e atualmente estudante da Trybe. Brasileiro, 30 anos, morador de São José do Norte-RS. Grande apreciador de animações, jogos no geral e cozinheiro nas horas vagas.
          </div>
          <br></br>   
          <div className="AboutBio tagline2">
          <strong>Tecnologias que estudo/estou estudando:</strong> 
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>          
          <br></br>    
          <div className="AboutBio tagline2">
          <strong>Tecnologias que irei estudar:</strong> 
          </div>
          <Technologies>
            {stackList2.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;