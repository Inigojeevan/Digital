import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cadcfc;
  padding: 2rem;
  height: 100vh;
`;

const EmployeeID = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SummaryContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background-color: #00246b;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  max-width: 300px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
    transform: translateY(-20px); 
  }
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SummaryValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const SummaryDetail = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const AttendanceButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const Profile: React.FC = () => {
  const { user } = useUser();
  const [attendanceData, setAttendanceData] = useState<any>(null);
  const [leaveData, setLeaveData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attendanceResponse = await axios.get(`http://localhost:3000/attendance/${user?.id}`);
        console.log("Attendance Data:", attendanceResponse.data);
        setAttendanceData(attendanceResponse.data);

        const leaveResponse = await axios.get(`http://localhost:3000/leave/${user?.id}`);
        console.log("Leave Data:", leaveResponse.data);
        setLeaveData(leaveResponse.data.leaveBalance);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchData();
    }
  }, [user?.id]);

  if (!user?.id) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleOnClick = () => {
    window.location.href = "/attendance";
  };

  return (
    <ProfileContainer>
      <EmployeeID>EmployeeID: {user ? user.id : "Loading..."}</EmployeeID>
      <SummaryContainer>
        <SummaryCard>
          <SummaryTitle>Attendance</SummaryTitle>
          <SummaryValue>{attendanceData ? `${attendanceData.totalWorkedHours.toFixed(2)} hours` : "N/A"}</SummaryValue>
          <SummaryDetail>{attendanceData ? `${attendanceData.totalWorkedDays.toFixed(2)} days worked` : "N/A"}</SummaryDetail>
        </SummaryCard>
        <SummaryCard>
          <SummaryTitle>Leave</SummaryTitle>
          <SummaryValue>{leaveData ? leaveData : "N/A"}</SummaryValue>
          <SummaryDetail>days available</SummaryDetail>
        </SummaryCard>
      </SummaryContainer>
      <AttendanceButton onClick={handleOnClick}>Attendance</AttendanceButton>
    </ProfileContainer>
  );
};

export default Profile;
