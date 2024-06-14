import React from "react";
import styled from "styled-components";
import fitnessAppImage from "../assets/fitnessAppImage.png"; 
import todoListImage from "../assets/todoListImage.png"; 
import meditationAppImage from "../assets/meditationAppImage.png"; 

const SectionContainer = styled.div`
  padding: 2rem;
  background-color: #cadcfc;
  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 768px) {
    margin: 0 1rem;
    padding: 1rem;
  }
`;

const TitleContainer = styled.div`
  text-align: center; /* Center align the contents */
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  background-color: #00246b;
  border-radius: 25px;
  color: #fff; 
  display: inline-block;
  padding: 0.5rem 1rem; 
`;

const TitleRegular = styled.span`
  font-weight: normal; 
  color: #f1efef;
`;

const TitleBold = styled.span`
  font-weight: bold; 
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0;
    gap: 1rem;
  }
`;

const ProductCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 30%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ProductContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1.3rem;
  text-align: justify;
  color: #131313;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductsSection: React.FC = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>
          <TitleRegular>Our Recent </TitleRegular>
          <TitleBold><br/>Products</TitleBold>
        </Title>
      </TitleContainer>
      <ProductsContainer>
        <ProductCard>
          <ProductImage src={fitnessAppImage} alt="Fitness App" />
          <ProductContent>
            <ProductTitle>Fitness App</ProductTitle>
            <ProductDescription>
              Discover your best self with FitLife, the ultimate fitness app
              designed to transform your workout routine. Track your progress,
              customize workouts, and stay motivated with our community support
              and expert guidance. Achieve your fitness goals anytime, anywhere
              with FitLife!
            </ProductDescription>
          </ProductContent>
        </ProductCard>
        <ProductCard>
          <ProductImage src={todoListImage} alt="Todo List" />
          <ProductContent>
            <ProductTitle>Todo List</ProductTitle>
            <ProductDescription>
              Stay organized and boost your productivity with TaskMaster, the
              ultimate to-do list app. Easily manage tasks, set reminders, and
              prioritize your day for maximum efficiency. Simplify your life and
              accomplish more with TaskMaster!
            </ProductDescription>
          </ProductContent>
        </ProductCard>
        <ProductCard>
          <ProductImage src={meditationAppImage} alt="Meditation App" />
          <ProductContent>
            <ProductTitle>Meditation App</ProductTitle>
            <ProductDescription>
              Find inner peace and enhance your well-being with ZenMind, the
              ultimate meditation app. Access guided sessions, track your
              progress, and cultivate mindfulness anytime, anywhere. Relax,
              focus, and thrive with ZenMind!
            </ProductDescription>
          </ProductContent>
        </ProductCard>
      </ProductsContainer>
    </SectionContainer>
  );
};

export default ProductsSection;
