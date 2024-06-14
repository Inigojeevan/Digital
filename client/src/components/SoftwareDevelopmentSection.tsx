import React, { useState, useEffect } from "react";
import styled from "styled-components";
import videoSource from "../assets/video.mp4";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #cadcfc;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const SectionTextContainer = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const SectionHeading = styled.h1`
  font-size: 2.7rem;
  color: black;
  margin-left: 4rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const SectionSubHeading = styled.h2`
  font-size: 2rem;
  color: #474444;
  margin-left: 4rem;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const SectionParagraph = styled.p`
  font-size: 1.5rem;
  color: #000000;
  margin-left: 4rem;
  margin-right: 4rem;
  text-align: justify;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding: 0 1rem;
    font-size: 1.2rem;
  }
`;

const HighlightedText = styled.span`
  background: linear-gradient(90deg, #d64292, #ff6bcb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionVideoContainer = styled.div`
  max-width: 45%;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const SectionVideo = styled.video`
  width: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

const SoftwareDevelopmentSection: React.FC = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setShowSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showSection && (
        <SectionContainer>
          <SectionTextContainer>
            <SectionHeading>Leading companies trust us</SectionHeading>
            <SectionSubHeading>to develop software</SectionSubHeading>
            <SectionParagraph>
              We <HighlightedText>add development capacity</HighlightedText> to tech teams. Our value isn’t limited
              to building teams but is equally distributed across the project
              lifecycle. We are a custom software development company that
              guarantees the successful delivery of your project.
            </SectionParagraph>
          </SectionTextContainer>
          <SectionVideoContainer>
            <SectionVideo src={videoSource} controls autoPlay muted loop />
          </SectionVideoContainer>
        </SectionContainer>
      )}
    </>
  );
};

export default SoftwareDevelopmentSection;
