import React from "react";
import styled from "styled-components";
import headerImage from "../assets/header-image.png";

const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: #cadcfc;
`;

const TextContainer = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #333;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #d64292, #ff6bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #313030;
`;

const ImageContainer = styled.div`
  max-width: 40%;
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
      <img src={headerImage} alt="Team" style={{ width: "100%" }} />
    </ImageContainer>
  </LandingContainer>
);

export default LandingPage;
