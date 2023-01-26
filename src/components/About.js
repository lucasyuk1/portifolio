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
            My name is <strong>Lucas C. Silveira</strong> i graduated in Software Analysis and Development(by UNILEÃO) and currently a student at Trybe. Brazilian, 30 years old, living in São José do Norte-RS. Great lover of animations, games and a cooker in my spare time.
          </div>
          <br></br>   
          <div className="AboutBio tagline2">
          <strong>Skills learned:</strong> 
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
          <strong>Skills to learn:</strong> 
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