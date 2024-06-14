import React from "react";
import styled from "styled-components";

const HowDevelopmentWorks: React.FC = () => {
  return (
    <Container>
      <Title>
        How development <Highlight>through us works</Highlight>
      </Title>

      <Timeline>
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
      </Timeline>
    </Container>
  );
};

export default HowDevelopmentWorks;

// Styled-components
const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #e0e7ff;
`;

const Title = styled.h1`
  text-align: center;
  color: #001f66;
  padding: 20px 0;
  font-size: 2.5rem;
`;

const Highlight = styled.span`
  color: #007bff;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: #007bff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 768px) {
      height: 4px;
      width: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
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

  @media (min-width: 768px) {
    width: calc(33% - 20px);
    margin: 10px;
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
