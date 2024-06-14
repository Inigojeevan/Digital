import React from 'react';
import styled from 'styled-components';
import headerImage from '../assets/header-image.png'; 

const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #CADCFC;
`;

const TextContainer = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Highlight = styled.span`
  color: #d64292;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const StartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ImageContainer = styled.div`
  max-width: 40%;
`;

const LandingPage: React.FC = () => (
  <LandingContainer>
    <TextContainer>
      <Title>
        Great <Highlight>Product</Highlight> is built by great <Highlight>teams</Highlight>
      </Title>
      <Description>
        We help build and manage a team of world-class developers to bring your vision to life.
      </Description>
      <StartButton>Let's get started!</StartButton>
    </TextContainer>
    <ImageContainer>
      <img src={headerImage} alt="Team" style={{ width: '100%' }} />
    </ImageContainer>
  </LandingContainer>
);

export default LandingPage;
