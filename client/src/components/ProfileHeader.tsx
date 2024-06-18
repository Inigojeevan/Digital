import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
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

const NavLink = styled(Link)`
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

const ProfileHeader: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { signOut } = useClerk();
  const { isSignedIn, user } = useUser();

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
        <NavLink to="/">Home</NavLink>
          <NavLink to="/timecard">Timecard</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/taskboard">Taskboard</NavLink>
        </Nav>
        {isSignedIn && (
          <Button onClick={handleLogoutClick}>
            Logout
          </Button>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default ProfileHeader;
