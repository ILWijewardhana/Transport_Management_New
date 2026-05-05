import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import BG1 from '../../images/bg.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Logo = styled.img`
  height: auto;
  width: 100px;
  max-width: 100%;
  margin-left: -10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin-left: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 21, 41, 0.93);
  padding: 20px 30px;
  flex-wrap: wrap;
  color: white;
  font-size: 17px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: rgba(12, 39, 72, 0.95);
    padding: 15px;
    width: 80%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }
`;

const MenuButton = styled(MenuOutlined)`
  display: none;
  color: white;
  font-size: 18px;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const LinkWithEffect = styled(Link)`
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 5px;
  position: relative;
  overflow: hidden;
  border-bottom: ${({ active }) => (active ? "2px solid white" : "none")};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #ffffff;
    width: 0;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:active,
  &:visited {
    text-decoration: none;
  }
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current page URL

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavBarContainer>
      <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to=''>
          <Logo src={BG1} alt="Logo" />
          </Link>
          <Link to="/">
          <Title>INDIKA MOTORS & TRANSPORT (PVT) LTD</Title>
          </Link>
        </div>
        <MenuButton onClick={handleMenuToggle} />
        <NavLinks isOpen={menuOpen}>
          <LinkWithEffect to="/" active={location.pathname === "/"}>Home</LinkWithEffect>
          <LinkWithEffect to="/vehicle-list" active={location.pathname === "/vehicle-list"}>Vehicle Profiles</LinkWithEffect>
          <LinkWithEffect to="/bus-timetables" active={location.pathname === "/bus-timetables"}>Bus Timetables</LinkWithEffect>
          <LinkWithEffect to="/contactUs" active={location.pathname === "/contactUs"}>Contact Us</LinkWithEffect>
          <LinkWithEffect to="/aboutUs" active={location.pathname === "/aboutUs"}>About Us</LinkWithEffect>
          {localStorage.getItem("currentUser") && (
            <>
              <LinkWithEffect to="/make-booking" active={location.pathname === "/make-booking"}>Make Booking</LinkWithEffect>
              <LinkWithEffect to="/make-inquiry" active={location.pathname === "/make-inquiry"}>Make Feedback</LinkWithEffect>
              <LinkWithEffect to="/my-feedbacks" active={location.pathname === "/my-feedbacks"}>My Feedbacks</LinkWithEffect>
              <LinkWithEffect to="/my-bookings" active={location.pathname === "/my-bookings"}>My Bookings</LinkWithEffect>
            </>
          )}
        </NavLinks>
      </HeaderContainer>
    </NavBarContainer>
  );
};

export default NavBar;
