import React from "react";
import styled from "styled-components";
import uxIcon from "../assets/ux-icon.png"; 
import sharedUnderstandingIcon from "../assets/shared-understanding-icon.png"; 
import experienceIcon from "../assets/experience-icon.png"; 
import securityIcon from "../assets/security-icon.png"; 
import codeReviewIcon from "../assets/code-review-icon.png"; 
import qualityAssuranceIcon from "../assets/quality-assurance-icon.png"; 

const SectionContainer = styled.div`
  padding: 2rem;
  background-color: #cadcfc;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  border-radius: 25px;
  text-align: center;
  background-color: #00246b;
  padding: 0.5rem 1rem;
  display: inline-block;
`;

const LightText = styled.span`
  font-weight: 300;
  color: #f1efef;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem; 
  width: calc(50% - 1rem); 
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 1.25rem;
  color: #1f1e1e;
  text-align: center;
`;

const DevelopmentApproachSection: React.FC = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>
          <LightText>Our Design and</LightText>{" "}
          <BoldText> <br/>Development Approach</BoldText>
        </Title>
      </TitleContainer>
      <CardsContainer>
        <Card>
          <Icon src={uxIcon} alt="UX Driven Engineering" />
          <CardTitle>UX Driven Engineering</CardTitle>
          <CardDescription>
            Fusing user-centric design principles with technical prowess, we
            engineer solutions that prioritize intuitive user experiences at
            every step.
          </CardDescription>
        </Card>
        <Card>
          <Icon
            src={sharedUnderstandingIcon}
            alt="Developing Shared Understanding"
          />
          <CardTitle>Developing Shared Understanding</CardTitle>
          <CardDescription>
            Collaboratively fostering alignment and clarity among stakeholders,
            we cultivate a unified vision to drive project success.
          </CardDescription>
        </Card>
        <Card>
          <Icon src={experienceIcon} alt="Proven Experience and Expertise" />
          <CardTitle>Proven Experience and Expertise</CardTitle>
          <CardDescription>
            Drawing on a wealth of industry knowledge and hands-on proficiency,
            we deliver results founded on seasoned expertise and a track record
            of excellence.
          </CardDescription>
        </Card>
        <Card>
          <Icon
            src={securityIcon}
            alt="Security & Intellectual Property (IP)"
          />
          <CardTitle>Security & Intellectual Property (IP)</CardTitle>
          <CardDescription>
            Safeguarding your assets and innovations with robust security
            measures, we prioritize the protection of your intellectual property
            throughout development.
          </CardDescription>
        </Card>
        <Card>
          <Icon src={codeReviewIcon} alt="Code Reviews" />
          <CardTitle>Code Reviews</CardTitle>
          <CardDescription>
            Ensuring code integrity and optimization through rigorous peer
            review processes, we uphold the highest standards of craftsmanship
            and maintainability.
          </CardDescription>
        </Card>
        <Card>
          <Icon src={qualityAssuranceIcon} alt="Quality Assurance & Testing" />
          <CardTitle>Quality Assurance & Testing</CardTitle>
          <CardDescription>
            Rigorously testing each component to uphold quality standards and
            exceed expectations, we guarantee the reliability and performance of
            every solution we deliver.
          </CardDescription>
        </Card>
      </CardsContainer>
    </SectionContainer>
  );
};

export default DevelopmentApproachSection;
