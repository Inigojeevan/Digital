import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #CADCFC;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
`;

const ServiceCard = styled.div`
  flex: 0 0 300px;
  background-color: #0d47a1;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;

const Services: React.FC = () => (
  <ServicesContainer>
    <Title>Services we offer</Title>
    <CardContainer>
      <ServiceCard>
        <CardIcon>📱</CardIcon>
        <CardTitle>Mobile App Development</CardTitle>
        <CardDescription>
          Crafting innovative mobile solutions tailored to meet your unique business needs, transforming ideas into user-friendly and engaging experiences.
        </CardDescription>
      </ServiceCard>
      <ServiceCard>
        <CardIcon>💻</CardIcon>
        <CardTitle>Web Design & Development</CardTitle>
        <CardDescription>
          Creating captivating web experiences with cutting-edge design and seamless functionality, elevating your online presence to new heights.
        </CardDescription>
      </ServiceCard>
      <ServiceCard>
        <CardIcon>🔍</CardIcon>
        <CardTitle>Software Testing Service</CardTitle>
        <CardDescription>
          Ensuring flawless performance and reliability through comprehensive software testing, safeguarding your digital solutions with precision and expertise.
        </CardDescription>
      </ServiceCard>
    </CardContainer>
  </ServicesContainer>
);

export default Services;
