import React from "react";
import styled from "styled-components";
import uxIcon from "../assets/ux-icon.png"; // Replace with actual path
import sharedUnderstandingIcon from "../assets/shared-understanding-icon.png"; // Replace with actual path
import experienceIcon from "../assets/experience-icon.png"; // Replace with actual path
import securityIcon from "../assets/security-icon.png"; // Replace with actual path
import codeReviewIcon from "../assets/code-review-icon.png"; // Replace with actual path
import qualityAssuranceIcon from "../assets/quality-assurance-icon.png"; // Replace with actual path

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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #007bff;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

const DevelopmentApproachSection: React.FC = () => {
  return (
    <SectionContainer>
      <Title>Our Design and Development Approach</Title>
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
          <Icon src={sharedUnderstandingIcon} alt="Developing Shared Understanding" />
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
          <Icon src={securityIcon} alt="Security & Intellectual Property (IP)" />
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
