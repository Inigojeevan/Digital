import React, { useState } from "react";
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
  background-color: #e0e7ff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${(props) => (props.active ? "#333" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const techStack = {
  Backend: [
    { name: "Node.js", icon: nodejsIcon },
    { name: "PHP", icon: phpIcon },
    { name: "Java", icon: javaIcon },
    { name: ".NET", icon: dotnetIcon },
    { name: "Python", icon: pythonIcon },
    { name: "Rails", icon: railsIcon },
    { name: "Golang", icon: golangIcon },
  ],
  Frontend: [
    // Add Frontend technologies here
  ],
  Databases: [
    { name: "MongoDB", icon: mongodbIcon },
    { name: "MySQL", icon: mysqlIcon },
  ],
};

const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Backend" | "Frontend" | "Databases">("Backend");

  return (
    <SectionContainer>
      <Title>Our Tech Stack</Title>
      <TabsContainer>
        {["Backend", "Frontend", "Databases"].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab as "Backend" | "Frontend" | "Databases")}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>
      <IconsContainer>
        {techStack[activeTab].map((tech) => (
          <div key={tech.name}>
            <Icon src={tech.icon} alt={tech.name} />
          </div>
        ))}
      </IconsContainer>
    </SectionContainer>
  );
};

export default TechStackSection;
