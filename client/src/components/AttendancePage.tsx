import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const LeftPanel = styled.div`
  background-color: #00246b;
  color: #d5e5ff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const RightPanel = styled.div`
  background-color: #cadcfc;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const CurrentTime = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const CurrentDate = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Greeting = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ClockInButton = styled.button`
  background-color: #0c397e;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #00246b;
    transform: translateY(-3px);
  }
`;

const LeaveButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff1a1a;
    transform: translateY(-3px);
  }
`;

const LeaveInput = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100px;
  text-align: center;
`;

const BackButton = styled.button`
  background-color: #4c4c4c;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-3px);
  }
`;

const AttendancePage: React.FC = () => {
  const { user } = useUser();
  const [isClockedIn, setIsClockedIn] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>('');
  const [leaveDays, setLeaveDays] = useState<number>(1); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedIsClockedIn = localStorage.getItem('isClockedIn');
    if (storedIsClockedIn === 'true') {
      setIsClockedIn(true);
      setGreeting('Bye for now');
    } else {
      setGreeting('Let\'s get to work');
    }
  }, []);

  const handleClockInOut = async () => {
    const employeeID = user?.id;
    if (!employeeID) return;

    try {
      if (isClockedIn) {
        const response = await axios.post(`https://digital-epcs.vercel.app/clock/clockOut/${employeeID}`);
        console.log(response.data);
        setGreeting('Let\'s get to work');
      } else {
        const response = await axios.post(`https://digital-epcs.vercel.app/clock/clockIn/${employeeID}`);
        console.log(response.data);
        setGreeting('Bye for now!!');
      }
      setIsClockedIn(!isClockedIn);
      localStorage.setItem('isClockedIn', (!isClockedIn).toString());
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnClickDashboard = () => {
    navigate("/timecard");
  };

  const handleLeave = async () => {
    const employeeID = user?.id;
    if (!employeeID) return;

    try {
      const response = await axios.post("https://digital-epcs.vercel.app/leave/reduce", {
        employeeID,
        daysTaken: leaveDays
      });
      alert(`Leave balance updated: ${response.data.newLeaveBalance}`);
      navigate("/timecard");
    } catch (error) {
      console.error(error);
      alert('Failed to update leave balance');
    }
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const strTime = `${hours % 12 || 12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    return strTime;
  };

  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <Container>
      <LeftPanel>
        <CurrentTime>{getCurrentTime()}</CurrentTime>
        <CurrentDate>{getCurrentDate()}</CurrentDate>
      </LeftPanel>
      <RightPanel>
        <Greeting>{greeting}, {user?.firstName || 'User'}!!</Greeting>
        <ButtonContainer>
          <ClockInButton onClick={handleClockInOut}>
            {isClockedIn ? 'Clock Out' : 'Clock In'}
          </ClockInButton>
          <LeaveInput
            type="number"
            value={leaveDays}
            onChange={(e) => setLeaveDays(parseInt(e.target.value))}
            min="1"
          />
          <LeaveButton onClick={handleLeave}>Take Leave</LeaveButton>
          <BackButton onClick={handleOnClickDashboard}>Back to Dashboard</BackButton>
        </ButtonContainer>
      </RightPanel>
    </Container>
  );
};

export default AttendancePage;
