import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-right: 0.5rem;
  height: 40px; 
`;

const NavContainer = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: ${({ open }) => (open ? "column" : "row")};
    position: absolute;
    top: 60px; 
    right: 1rem;
    background: white;
    padding: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

const NavLink = styled(ScrollLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const Button = styled.button`
  background-color: #00246b;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
  }
`;

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { openSignIn, signOut } = useClerk();
  const { isSignedIn } = useUser();

  const handleLoginClick = () => {
    openSignIn({ afterSignInUrl: window.location.href });
  };

  const handleLogoutClick = () => {
    signOut();
    alert("You have been logged out");
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="Logo" />
      </LogoContainer>
      <Hamburger onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavContainer open={navOpen}>
        <NavLink to="about" smooth={true} duration={500} onClick={() => setNavOpen(false)}>
          About
        </NavLink>
        <NavLink to="services" smooth={true} duration={500} onClick={() => setNavOpen(false)}>
          Services
        </NavLink>
        <NavLink to="products" smooth={true} duration={500} onClick={() => setNavOpen(false)}>
          Products
        </NavLink>
        {isSignedIn && (
          <StyledLink to="/profile" onClick={() => setNavOpen(false)}>
            Profile
          </StyledLink>
        )}
        {isSignedIn ? (
          <Button onClick={handleLogoutClick}>Logout</Button>
        ) : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
