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
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const LogoImage = styled.img`
  margin-right: 0.5rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    padding: 2rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
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
        <Logo>DigitalEPCS</Logo>
      </LogoContainer>
      <Hamburger onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavContainer>
        <Nav open={navOpen}>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          <NavLink to="services" smooth={true} duration={500}>Services</NavLink>
          <NavLink to="products" smooth={true} duration={500}>Products</NavLink>
          {isSignedIn && (
            <>
              <StyledLink to="/timecard">
                Profile
              </StyledLink>
            </>
          )}
        </Nav>
        {isSignedIn ? (
          <>
            <Button
              onClick={handleLogoutClick}
              style={{ display: navOpen ? "block" : "none" }}
            >
              Logout
            </Button>
            <Button
              onClick={handleLogoutClick}
              style={{ display: navOpen ? "none" : "block" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleLoginClick}
              style={{ display: navOpen ? "block" : "none" }}
            >
              Login
            </Button>
            <Button
              onClick={handleLoginClick}
              style={{ display: navOpen ? "none" : "block" }}
            >
              Login
            </Button>
          </>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
