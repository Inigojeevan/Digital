import React from "react";
import styled from "styled-components";
import teamMeeting from "../assets/teamMeeting.png";
import developersWorking from "../assets/devWork.png";
import teamCollaboration from "../assets/colab.png";

const WayOfBuilding: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <LightText>Way of building</LightText>{" "}
          <BoldText><br />Great Software</BoldText>
        </Title>
      </TitleContainer>

      <Section>
        <Content>
          <Heading>Build the right team to scale</Heading>
          <Description>
            Finding the right talent is not easy. We help you find the talent
            that suits your needs, follows your processes, and sticks with you
            long term (not the case with freelancers).
            <br />
            <br />
            Our <Highlight>delivery model</Highlight> helps you cut costs and
            deliver within budget.
            <br />
            <br />
            <StyledQuote>
              "Great software, like art, demands vision, craftsmanship, and
              attention to detail."
            </StyledQuote>
            <Author>
              Jeewa markram
              <br />
              CEO
            </Author>
          </Description>
        </Content>
        <Image src={teamMeeting} alt="Team meeting" />
      </Section>

      <Section>
        <Content reverse>
          <Heading>Agile Methodology</Heading>
          <Description>
            Embracing flexibility and adaptability, we employ Agile
            methodologies to iterate quickly, respond to change, and deliver
            value incrementally.
            <br />
            <br />
            <StyledQuote>
              "Learning from our users, even from unhappy customers, is our
              greatest source of growth."
            </StyledQuote>
            <Author>
              Jeewa markram
              <br />
              CEO
            </Author>
          </Description>
        </Content>
        <Image src={developersWorking} alt="Developers working" reverse />
      </Section>

      <Section>
        <Content>
          <Heading>Collaborative Development</Heading>
          <Description>
            We foster an environment of collaboration, where cross-functional
            teams work closely with clients to ensure alignment, transparency,
            and shared ownership of the project.
            <br />
            <br />
            <StyledQuote>
              "Craft software experiences so compelling that users return and
              bring others, inspiring enduring impact."
            </StyledQuote>
            <Author>
              Jeewa markram
              <br />
              CEO
            </Author>
          </Description>
        </Content>
        <Image src={teamCollaboration} alt="Team collaboration" />
      </Section>
    </Container>
  );
};

export default WayOfBuilding;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #cadcfc;

  @media (min-width: 768px) {
    padding: 60px 40px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  background-color: #00246b;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  display: inline-block;
`;

const LightText = styled.span`
  font-weight: 300;
  color: #f1efef;
`;

const BoldText = styled.span`
  font-weight: bold;
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
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
`;

const Heading = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  color: #111111;
  font-size: 1.3rem;
  line-height: 1.6;
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #f76680, #57007b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const StyledQuote = styled.blockquote`
  margin: 20px 0;
  font-style: italic;
  color: #555;
  border-left: 3px solid #007bff;
  padding-left: 15px;
  background: linear-gradient(90deg, #f76680, #57007b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    margin: ${({ reverse }) => (reverse ? "0 20px 0 0" : "0 0 0 20px")};
  }
`;
