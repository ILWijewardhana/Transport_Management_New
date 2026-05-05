import React, { useEffect, useState } from "react";
import { Card, Button, Spin } from "antd";
import { PhoneOutlined, ClockCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import vProfileService from "../../services/vehicleProfileService"; // Import your service

// Styled component for the grid container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-height: 80vh; /* Set a max height to allow scrolling if necessary */
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* For Firefox */

  /* Scrollbar styles for Webkit browsers */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on small screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column on extra small screens */
  }
`;

const ProfileCard = styled(Card)`
  min-width: 250px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 150px;
  max-width: 180px;
  object-fit: cover;
  border-bottom: 1px solid #f0f0f0;
  display: block;
  margin: 0 auto;
`;

const VehicleProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch vehicle profiles on component mount
    const fetchProfiles = async () => {
      try {
        const data = await vProfileService.getAllVProfiles();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div style={{ padding: "20px", background: "rgba(211, 211, 211, 0.5);" }}>
      {loading ? (
        <Spin />
      ) : (
        <GridContainer>
          {profiles.map((profile) => (
            <ProfileCard key={profile._id} hoverable>
              <ProfileImage src={profile.imageUrl} alt={profile.description} style={{borderRadius:"8px"}} />
              <h3>{profile.description}</h3>
              <p>
                <strong>{profile.type}</strong>
              </p>
              <p>
                {profile.time && (
                  <>
                    <ClockCircleOutlined /> {profile.time}
                  </>
                )}
              </p>
              <Button icon={<PhoneOutlined />} type="primary">
                Contact us
              </Button>
            </ProfileCard>
          ))}
        </GridContainer>
      )}
    </div>
  );
};

export default VehicleProfileList;
