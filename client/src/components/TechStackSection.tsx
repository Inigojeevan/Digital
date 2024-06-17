import React from "react";
import styled from "styled-components";
import nodejsIcon from "../assets/nodejs.png";
import phpIcon from "../assets/php.png";
import mysqlIcon from "../assets/mysql.png";
import javaIcon from "../assets/java.png";
import dotnetIcon from "../assets/dotnet.png";
import pythonIcon from "../assets/python.png";
import railsIcon from "../assets/rails.png";
import golangIcon from "../assets/golang.png";
import mongodbIcon from "../assets/mongodb.png";

const SectionContainer = styled.div`
  padding: 2rem;
  background-color: #cadcfc;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: white;
  background-color: #00246f;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: inline-block;
`;

const LightText = styled.span`
  font-weight: 300;
  color: #f1efef;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); 
  }
`;

const techStack = [
  { name: "Node.js", icon: nodejsIcon },
  { name: "PHP", icon: phpIcon },
  { name: "Java", icon: javaIcon },
  { name: ".NET", icon: dotnetIcon },
  { name: "Python", icon: pythonIcon },
  { name: "Rails", icon: railsIcon },
  { name: "Golang", icon: golangIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "MySQL", icon: mysqlIcon },
];

const TechStackSection: React.FC = () => {
  return (
    <SectionContainer>
      <Title>
        <LightText>Our</LightText> <BoldText> <br/>Tech Stack</BoldText>
      </Title>
      <IconsContainer>
        {techStack.map((tech) => (
          <div key={tech.name}>
            <Icon src={tech.icon} alt={tech.name} />
          </div>
        ))}
      </IconsContainer>
    </SectionContainer>
  );
};

export default TechStackSection;
