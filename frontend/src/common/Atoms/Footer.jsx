import React from "react";
import styled from "styled-components";
import BG from '../../images/bg.png';
import { Link } from "react-router-dom"; // React Router's Link
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const FooterContainer = styled.footer`
  background-color: rgba(0, 21, 41, 0.93);
  color: white;
  padding: 30px 0;
  width: 100%;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
  gap: 30px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 220px;
  text-align: center;
`;

const SectionTitle = styled.h4`
  color: white;
  margin-bottom: 15px;
  font-size: 18px;
`;

const StyledAnchor = styled.a`  // Renamed from Link to StyledAnchor
  color: #c1c1c1;
  display: block;
  margin-bottom: 8px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: white;
  }
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
`;

const Logo = styled.img`
  width: 50%;
  max-width: 180px;
  height: auto;
  margin: 15px auto 0;
  display: block;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #ccc;
  margin-top: 15px;
  line-height: 1.5;
  margin-bottom:-1%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <StyledAnchor href="/">Home</StyledAnchor>
          <StyledAnchor href="/vehicle-list">Vehicle Profiles</StyledAnchor>
          <StyledAnchor href="/bus-timetables">Bus Timetables</StyledAnchor>
        </Section>

        <Section>
          <SectionTitle>Extra Links</SectionTitle>
          <StyledAnchor href="/aboutUs">About Us</StyledAnchor>
          <StyledAnchor href="/">Privacy Policy</StyledAnchor>
          <StyledAnchor href="/bus-timetables">Terms of Travel</StyledAnchor>
        </Section>

        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <ContactInfo>
            <span><PhoneOutlined /> 081-2223344</span>
            <span><PhoneOutlined /> 071-5554443</span>
            <span><MailOutlined /> indikamotors@gmail.com</span>
          </ContactInfo>
        </Section>

        <Section>
          <br></br>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcon>
            <a href="https://facebook.com">
              <FacebookOutlined style={{ fontSize: '20px', color: '#c1c1c1' }} />
            </a>
            <a href="https://instagram.com">
              <InstagramOutlined style={{ fontSize: '20px', color: '#c1c1c1' }} />
            </a>
            <a href="https://twitter.com">
              <TwitterOutlined style={{ fontSize: '20px', color: '#c1c1c1' }} />
            </a>
          </SocialIcon>
          {/* Use React Router's Link for navigation */}
          <Link to="/">
            <Logo src={BG} alt="Logo" />
          </Link>
        </Section>
      </FooterContent>
      <FooterText>
        Copyright © 2025 INDIKA MOTORS & TRANSPORT (PVT) LTD | Powered by ITP Group
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
