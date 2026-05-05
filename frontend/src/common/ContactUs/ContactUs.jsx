import React from "react";
import styled from "styled-components";
import backgroundImage from "../../images/c.jpeg"; // Replace with your image path

// Styles
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #131313;
  color: white;
`;

const TopImage = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  height: 500px; /* Adjust height as needed */
`;

const MiddleBlackBox = styled.div`
  background-color: #131313;
  padding: 30px;
  text-align: center;
  width: 60%;
  margin: -110px auto 20px auto; /* Negative margin to overlap the image */
  
`;

const BlackArea = styled.div`
  background-color: #131313;
  padding: 50px 0; /* Creates space for the black area */
  text-align: center;
`;

const Title = styled.h1`
  color:  #ffcc00;
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 700
`;

const Subtitle = styled.p`
  color: #ccc;
  margin-bottom: 20px;
  font-size: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 80px;
  
`;

const InfoBox = styled.div`
  text-align: center;
  padding: 30px;
`;

const Icon = styled.div`
  font-size: 30px;
  color: pink;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: white;
  margin: 5px 0;
`;

const Footer = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #999;

  a {
    color: #ccc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// Component
const ContactUs = () => {
  return (
    <Container>
      {/* Top Image */}
      <TopImage />

      {/* Middle Black Box */}
      <MiddleBlackBox>
        <Title>CONTACT US</Title>
        <Subtitle>
          Sample text. Click to select the text box. Click again or double-click to start editing the text.
        </Subtitle>
        <InfoContainer>
          
        <InfoBox>
            <Icon>📍</Icon>
            <InfoText>ADDRESS</InfoText>
            <InfoText>Kandy</InfoText>
          </InfoBox>
          <InfoBox>
            <Icon>📞</Icon>
            <InfoText>PHONE</InfoText>
            <InfoText>081-2223344 <br></br>
            071-5554443</InfoText>
          </InfoBox>
          <InfoBox>
            <Icon>📧</Icon>
            <InfoText>EMAIL</InfoText>
            <InfoText>indikamotors@gmail.com</InfoText>
          </InfoBox>
          </InfoContainer>

      </MiddleBlackBox>

      {/* Black Area with Contact Details */}
      <BlackArea>
        
       
       
      </BlackArea>
    </Container>
  );
};

export default ContactUs;
