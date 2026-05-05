import React from "react";
import styled from "styled-components";
import img7 from "../../images/person.png";
import backgroundImage from "../../images/bbbb.jpg"; // Your full-page background image

// Styled Components
const PageContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  background-attachment: fixed; /* Enables parallax effect */
  width: 100%;
  min-height: 10vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

const AboutContainer = styled.div`
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
  backdrop-filter: blur(8px);
  padding: 2vw; /* Adjust padding based on viewport width */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 70vw; /* Adjust width based on viewport width */
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  text-align: left;
  margin-left:5%;
  margin-top:10%;
  margin-bottom:10%;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
    padding: 4vw;
  }

  @media (max-width: 480px) {
    width: 95vw;
    padding: 5vw;
  }
`;

const AboutImage = styled.img`
  position: absolute;
  left: -6vw; /* Adjust based on viewport width */
  top: 50%;
  transform: translateY(-50%);
  height: 90%;
  width: 30vw; /* Adjust width dynamically */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    left: -5vw;
    width: 25vw;
  }

  @media (max-width: 768px) {
    left: -4vw;
    width: 35vw;
  }

  @media (max-width: 480px) {
    left: 0;
    width: 45vw;
    height: auto;
  }
`;

const AboutText = styled.p`
  width: 60%;
  font-size: 1.3rem;
  margin-left: 35%;
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1.5;
  padding: 2vw;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-left: 40%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-left: 50%;
    padding: 3vw;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-left: 0;
    padding: 4vw;
  }
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <AboutContainer>
        <AboutImage src={img7} alt="person" />
        <AboutText>
          Founded in 1998 by Mr. Ranjith Dodangolla as a sole proprietorship, Indika 
          Motors and Transport Private Limited has evolved into a dynamic and successful 
          company in the vehicle spare parts and transportation industry. Over the years, 
          the company transitioned into a private limited entity, with five directors at the 
          helm, namely Mr. Ranjith Dodangolla, his wife Mrs. Manjula Delgahapitiya, and 
          their three daughters. Indika Motors and Transport Private Limited is recognized 
          for its commitment to delivering high-quality vehicle spare parts and reliable 
          transportation services, catering to a diverse clientele that includes prominent 
          companies like MAS Contourline, Unichela, Okidoki, Nobelswear, Isabella, and 
          Celogen Lanka.
        </AboutText>
      </AboutContainer>
    </PageContainer>
  );
};

export default AboutUs;
