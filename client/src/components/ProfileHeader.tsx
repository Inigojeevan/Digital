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
  gap: 2rem;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 50px;
    left: 0;
    background: white;
    padding: 1rem;
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

  @media (max-width: 768px) {
    padding: 1rem;
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
    padding: 0.5rem 1rem;
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
