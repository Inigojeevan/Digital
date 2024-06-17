import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo src={logo} alt="Logo" />
          <Description>
            We help build and manage a team of world-class developers to bring
            your vision to life..
          </Description>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Links</SectionTitle>
          <FooterLink to="about" smooth={true} duration={500}>About Us</FooterLink>
          <FooterLink to="services" smooth={true} duration={500}>Services</FooterLink>
          <FooterLink to="products" smooth={true} duration={500}>Products</FooterLink>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contact us</SectionTitle>
          <ContactInfo>
            Feel free to contact us
            <br />
            Email: abc@gmail.com
            <br />
            +923183561921
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <SocialIcons>
          <SocialIcon href="https://www.facebook.com">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://twitter.com">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com">
            <FaLinkedinIn />
          </SocialIcon>
        </SocialIcons>
        <Copyright>© 2024 Copyright by Jeevan. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

// Styled-components
const FooterContainer = styled.footer`
  background-color: #001f66;
  color: white;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const Description = styled.p`
  color: #aab4c6;
  margin: 10px 0 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const FooterLink = styled(ScrollLink)`
  display: block;
  color: #aab4c6;
  text-decoration: none;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const ContactInfo = styled.p`
  color: #aab4c6;
  margin: 10px 0 0;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #4d5b7c;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SocialIcon = styled.a`
  color: white;
  margin: 0 10px;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: #aab4c6;
  }
`;

const Copyright = styled.p`
  color: #aab4c6;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
