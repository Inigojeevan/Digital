import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #cadcfc;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #1c1b1b;
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    display: block;
    width: 50%;
    height: 2px;
    background-color: #1c1b1b;
    position: absolute;
    bottom: -6px;
    left: 25%;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 0;
`;

const ServiceCard = styled.div`
  flex: 0 0 300px;
  background-color: #00246b;
  color: #fff;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  &:hover {
    transform: translateY(15px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #0056b3;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex: 0 0 45%;
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
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
  <section id="services">
  <ServicesContainer>
    <Title>Services we offer</Title>
    <CardContainer>
      <ServiceCard>
        <CardIcon>📱</CardIcon>
        <CardTitle>Mobile App Development</CardTitle>
        <CardDescription>
          Crafting innovative mobile solutions tailored to meet your unique
          business needs, transforming ideas into user-friendly and engaging
          experiences.
        </CardDescription>
      </ServiceCard>
      <ServiceCard>
        <CardIcon>💻</CardIcon>
        <CardTitle>Web Design & Development</CardTitle>
        <CardDescription>
          Creating captivating web experiences with cutting-edge design and
          seamless functionality, elevating your online presence to new heights.
        </CardDescription>
      </ServiceCard>
      <ServiceCard>
        <CardIcon>🔍</CardIcon>
        <CardTitle>Software Testing Service</CardTitle>
        <CardDescription>
          Ensuring flawless performance and reliability through comprehensive
          software testing, safeguarding your digital solutions with precision
          and expertise.
        </CardDescription>
      </ServiceCard>
    </CardContainer>
  </ServicesContainer>
  </section>
);

export default Services;
