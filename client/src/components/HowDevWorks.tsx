import React from "react";
import styled from "styled-components";

const HowDevelopmentWorks: React.FC = () => {
  return (
    <Container>
      <Title>
        How development <Highlight><br />through us works</Highlight>
      </Title>

      <StepsContainer>
        <Step>
          <StepTitle>
            <StepNumber>#1</StepNumber> Assemble the right team
          </StepTitle>
          <Description>
            We handle all aspects of vetting and choosing the right team that
            you don't have the time, expertise, or desire to do.
          </Description>
        </Step>
        <Step>
          <StepTitle>
            <StepNumber>#2</StepNumber> Sprint planning
          </StepTitle>
          <Description>
            Sprint roadmap is a collective planning effort. Team members
            collaborate to clarify items and ensure shared understanding.
          </Description>
        </Step>
        <Step>
          <StepTitle>
            <StepNumber>#3</StepNumber> Tech architecture
          </StepTitle>
          <Description>
            We break monolithic apps into microservices. Decoupling the code
            allows teams to move faster and more independently.
          </Description>
        </Step>
        <Step>
          <StepTitle>
            <StepNumber>#4</StepNumber> Standups & weekly demos
          </StepTitle>
          <Description>
            Standups, weekly demos, and weekly reviews make sure everyone is on
            the same page and can raise their concerns.
          </Description>
        </Step>
        <Step>
          <StepTitle>
            <StepNumber>#5</StepNumber> Code reviews
          </StepTitle>
          <Description>
            Code reviews before release help detect issues like memory leaks,
            file leaks, performance signs, and general bad smells.
          </Description>
        </Step>
        <Step>
          <StepTitle>
            <StepNumber>#6</StepNumber> Iterative delivery
          </StepTitle>
          <Description>
            We divide the implementation process into several checkpoints rather
            than a single deadline.
          </Description>
        </Step>
      </StepsContainer>
    </Container>
  );
};

export default HowDevelopmentWorks;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #cadcfc;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  padding: 20px 0;
  font-size: 2.5rem;
`;

const Highlight = styled.span`
  color: #007bff;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Step = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 90%;
  max-width: 300px;
  position: relative;
  transition: transform 0.3s ease-out; 
  &:hover {
    transform: translateY(-20px); 
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); 
  }
`;

const StepTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const StepNumber = styled.span`
  color: #ff007b;
  font-weight: bold;
`;

const Description = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
`;
