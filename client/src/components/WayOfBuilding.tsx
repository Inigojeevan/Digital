import React from "react";
import styled from "styled-components";
import teamMeeting from "../assets/teamMeeting.png";
import developersWorking from "../assets/devWork.png";
import teamCollaboration from "../assets/colab.png";

const WayOfBuilding: React.FC = () => {
  return (
    <Container>
      <Title>Way of building Great Software</Title>
      
      <Section>
        <Content>
          <Heading>Build the right team to scale</Heading>
          <Description>
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).
            <br />
            <br />
            Our <Highlight>delivery model</Highlight> helps you cut costs and deliver within budget.
            <br />
            <br />
            <Quote>"Great software, like art, demands vision, craftsmanship, and attention to detail."</Quote>
            <Author>Jeewa markram<br />CEO</Author>
          </Description>
        </Content>
        <Image src= {teamMeeting} alt="Team meeting" />
      </Section>
      
      <Section>
        <Image src= {developersWorking} alt="Developers working" reverse />
        <Content reverse>
          <Heading>Agile Methodology</Heading>
          <Description>
            Embracing flexibility and adaptability, we employ Agile methodologies to iterate quickly, respond to change, and deliver value incrementally.
            <br />
            <br />
            <Quote>"Learning from our users, even from unhappy customers, is our greatest source of growth."</Quote>
            <Author>Jeewa markram<br />CEO</Author>
          </Description>
        </Content>
      </Section>
      
      <Section>
        <Content>
          <Heading>Collaborative Development</Heading>
          <Description>
            We foster an environment of collaboration, where cross-functional teams work closely with clients to ensure alignment, transparency, and shared ownership of the project.
            <br />
            <br />
            <Quote>"Craft software experiences so compelling that users return and bring others, inspiring enduring impact."</Quote>
            <Author>Jeewa markram<br />CEO</Author>
          </Description>
        </Content>
        <Image src= {teamCollaboration} alt="Team collaboration" />
      </Section>
    </Container>
  );
};

export default WayOfBuilding;

// Styled-components
const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #e0e7ff;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  background-color: #001f66;
  padding: 20px 0;
  font-size: 2.5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Content = styled.div<{ reverse?: boolean }>`
  flex: 1;
  padding: 20px;
  text-align: left;
  max-width: 600px;

  @media (min-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }
`;

const Heading = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const Quote = styled.blockquote`
  margin: 20px 0;
  font-style: italic;
  color: #555;
  border-left: 3px solid #007bff;
  padding-left: 15px;
`;

const Author = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #333;
`;

const Image = styled.img<{ reverse?: boolean }>`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  display: block;
  border-radius: 10px;

  @media (min-width: 768px) {
    order: ${({ reverse }) => (reverse ? '1' : '2')};
    margin: ${({ reverse }) => (reverse ? '0 20px 0 0' : '0 0 0 20px')};
  }
`;
