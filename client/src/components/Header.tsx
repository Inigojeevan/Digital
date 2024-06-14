import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #007bff;
  }
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo>DigitalEPCS</Logo>
    <Nav>
      <NavLink href="#">About us</NavLink>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">Products</NavLink>
    </Nav>
    <LoginButton>Login</LoginButton>
  </HeaderContainer>
);

export default Header;
