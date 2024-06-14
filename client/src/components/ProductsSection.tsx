import React from "react";
import styled from "styled-components";
import fitnessAppImage from "../assets/fitnessAppImage.png"; 
import todoListImage from "../assets/todoListImage.png"; 
import meditationAppImage from "../assets/meditationAppImage.png"; 

const SectionContainer = styled.div`
  padding: 2rem;
  background-color: #e0e7ff;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProductCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 30%;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ProductsSection: React.FC = () => {
  return (
    <SectionContainer>
      <Title>Our Recent Products</Title>
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
