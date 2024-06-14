import React, { useState, useEffect } from "react";
import styled from "styled-components";
import videoSource from "../assets/video.mp4";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #e0e7ff;
  margin-top: 3rem;
`;

const SectionTextContainer = styled.div`
  max-width: 50%;
`;

const SectionHeading = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const SectionSubHeading = styled.h2`
  font-size: 1.5rem;
  color: #666;
`;

const SectionParagraph = styled.p`
  font-size: 1rem;
  color: #999;
`;

const SectionVideoContainer = styled.div`
  max-width: 45%;
  position: relative;
`;

const SectionVideo = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const SoftwareDevelopmentSection: React.FC = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Scroll position:", scrollPosition); // Debugging log
      if (scrollPosition > 100) {
        console.log("Setting showSection to true"); // Debugging log
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
              We add development capacity to tech teams. Our value isn’t limited
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
