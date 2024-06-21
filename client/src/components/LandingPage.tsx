import React from "react";
import styled from "styled-components";
import headerImage from "../assets/header-image.png";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #cadcfc;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
  }
`;

const TextContainer = styled.div`
  max-width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #d64292, #ff6bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #313030;
`;

const ImageContainer = styled.div`
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const LandingPage: React.FC = () => (
  <LandingContainer>
    <TextContainer>
      <Title>
        Great <Highlight>Product</Highlight> is built by great{" "}
        <Highlight>teams</Highlight>
      </Title>
      <Description>
        We help build and manage a team of world-class developers to bring your
        vision to life.
      </Description>
    </TextContainer>
    <ImageContainer>
      <Image src={headerImage} alt="Team" />
    </ImageContainer>
  </LandingContainer>
);

export default LandingPage;
