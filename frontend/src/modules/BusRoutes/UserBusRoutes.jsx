import React, { useState, useEffect } from "react";
import { Card, Typography, Space, Spin } from "antd";
import { EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import busRouteService from "../../services/busRouteService";
import moment from "moment";

// Import the image
import timet from "../../images/bus1.jpeg"; // Adjust the path if needed

const { Title, Text } = Typography;

const UserBusRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await busRouteService.getAllRoutes();
      setRoutes(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch routes:", error);
      setLoading(false);
    }
  };

  const formatTime = (time) => moment(time, "HH:mm").format("h:mm A");

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div style={{ padding: "0px", maxWidth: "1600px", margin: "auto", position: "relative" }}>
      {/* Image with Overlay Text */}
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          src={timet}
          alt="Timetable"
          style={{
            width: "100%",
            height: "200px", // Adjust height to show only half
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
        {/* Overlay Text */}
        <div
          style={{
            width:"100%",
            position: "absolute",
            top: "81%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
            padding: "12px 24px",
            borderRadius: "0px",
          }}
        >
          <Text style={{ fontSize: "32px", fontWeight: "bold", color: "#fff", textTransform: "uppercase" }}>
            BUS TIMETABLE
          </Text>
        </div>
      </div>

      {/* Bus Route Cards */}
      <Space direction="vertical" size="30px" style={{ width: "100%", padding: "16px" }}>
        {routes.map((route, index) => (
          <Card
            key={route._id}
            style={{
              border: "none",
              borderRadius: "10px",
              paddingBottom: "16px",
              paddingLeft: "16px",
            }}
          >
            {/* Route Title */}
            <Title level={3} style={{ color: "#0056b3", marginBottom: "4px", fontSize: "35px", fontWeight: "bold" }}>
              {`${route.from} to ${route.to} ${route.routeNumber}`}
            </Title>

            {/* Route Type and Frequency */}
            <Text type="secondary" style={{ fontSize: "25px", color: "#d89216", fontWeight: "bold" }}>
              {`${route.type} - ${route.frequency}`}
            </Text>

            {/* Stops Display */}
            <Space style={{ marginTop: "15px", flexWrap: "wrap" }}>
              {route.stops.map((stop, stopIndex) => (
                <Space key={stopIndex} style={{ display: "flex", alignItems: "center" }}>
                  <EnvironmentOutlined style={{ color: "#1890ff", fontSize: "25px" }} />
                  <Text strong style={{ fontSize: "20px" }}>{stop.name}</Text>
                  <ClockCircleOutlined style={{ marginLeft: "4px", color: "#faad14", fontSize: "22px" }} />
                  <Text style={{ fontSize: "20px" }}>{formatTime(stop.arrivalTime)}</Text>
                  {stopIndex < route.stops.length - 1 && <Text style={{ margin: "0 8px", fontSize: "22px" }}>{">"}</Text>}
                </Space>
              ))}
            </Space>

            {/* Horizontal Line Between Cards */}
            {index < routes.length - 1 && (
              <hr style={{ border: "1px solid rgba(0, 21, 41, 0.93)", margin: "16px 0" }} />
            )}
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default UserBusRoutes;
