import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useClerk, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface NavContainerProps {
  open: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center;
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

const NavContainer = styled.div<NavContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;

  @media (min-width: 769px) {
    position: static;
    flex-direction: row;
    gap: 2rem;
    display: flex;
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

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;
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
  const { isSignedIn } = useUser();

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
        <NavLink to="/" onClick={() => setNavOpen(false)}>Home</NavLink>
        <NavLink to="/timecard" onClick={() => setNavOpen(false)}>Timecard</NavLink>
        <NavLink to="/calendar" onClick={() => setNavOpen(false)}>Calendar</NavLink>
        <NavLink to="/taskboard" onClick={() => setNavOpen(false)}>Taskboard</NavLink>
        {isSignedIn && (
          <Button onClick={handleLogoutClick}>Logout</Button>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};

export default ProfileHeader;
