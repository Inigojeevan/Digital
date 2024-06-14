import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo src="/path/to/logo.png" alt="Logo" />
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Description>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Links</SectionTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Products</FooterLink>
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
          <SocialIcon href="#"><FaFacebookF /></SocialIcon>
          <SocialIcon href="#"><FaInstagram /></SocialIcon>
          <SocialIcon href="#"><FaTwitter /></SocialIcon>
          <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
        </SocialIcons>
        <Copyright>© 2023 Copyright by IK Developers. All rights reserved.</Copyright>
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

const FooterLink = styled.a`
  display: block;
  color: #aab4c6;
  text-decoration: none;
  margin-bottom: 5px;

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
