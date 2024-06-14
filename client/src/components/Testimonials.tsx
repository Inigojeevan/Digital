import React, { useState } from "react";
import styled from "styled-components";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.jpg";

const testimonials = [
  {
    name: "Romeena De Silva",
    position: "Janet Cosmetics",
    review:
      "Without any doubt I recommend DigitalEPCS Solutions as one of the best software and service agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    stars: 5,
    image: person1,
  },
  {
    name: "Imran Khan",
    position: "Software Engineer",
    review:
      "DigitalEPCS Solutions has been instrumental in the successful completion of our project. Their expertise and dedication are unmatched.",
    stars: 5,
    image: person2,
  },
];

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #cadcfc;
  margin-top: 3rem;
`;

const TitleContainer = styled.div`
  background-color: #00246b;
  color: #fff;
  padding: 1.3rem;
  border-radius: 25px;
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 60%;
  margin-bottom: 2rem;
`;

const ReviewText = styled.p`
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 1rem;
`;

const ReviewAuthor = styled.h3`
  font-size: 1.4rem;
  color: #00246b;
  margin-bottom: 0.5rem;
`;

const ReviewPosition = styled.p`
  font-size: 1rem;
  color: #272727;
  margin-bottom: 1rem;
`;

const ReviewImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #00246b;
  cursor: pointer;
`;

const StarRating = styled.div`
  margin-bottom: 1rem;
`;

const Star = styled.span`
  color: #ffbf00;
  font-size: 1.5rem;
`;

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { name, position, review, stars, image } = testimonials[currentIndex];

  return (
    <SectionContainer>
      <TitleContainer>
        <Title>Why customers love<br />working with us</Title>
      </TitleContainer>
      <ReviewContainer>
        <ReviewText>{review}</ReviewText>
        <ReviewImage src={image} alt={name} />
        <ReviewAuthor>{name}</ReviewAuthor>
        <ReviewPosition>{position}</ReviewPosition>
        <StarRating>
          {Array.from({ length: stars }).map((_, index) => (
            <Star key={index}>★</Star>
          ))}
        </StarRating>
      </ReviewContainer>
      <NavigationContainer>
        <ArrowButton onClick={handlePrevClick}>{"<"}</ArrowButton>
        <ArrowButton onClick={handleNextClick}>{">"}</ArrowButton>
      </NavigationContainer>
    </SectionContainer>
  );
};

export default Testimonials;
