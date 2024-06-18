import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPanel = styled.div`
  background-color: #00246b;
  color: #d5e5ff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightPanel = styled.div`
  background-color: #cadcfc;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CurrentTime = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const CurrentDate = styled.p`
  margin: 0;
  font-size: 1.2rem;
`;

const Greeting = styled.h1`
  font-size: 3rem;
`;

const ClockInButton = styled.button`
  background-color: #0c397e;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #00246b;
    transform: translateY(-3px);
  }
`;

const BackButton = styled.button`
  background-color: #4c4c4c;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 20px;
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
        const response = await axios.post(`http://localhost:3000/clock/clockOut/${employeeID}`);
        console.log(response.data);
        setGreeting('Let\'s get to work');
      } else {
        const response = await axios.post(`http://localhost:3000/clock/clockIn/${employeeID}`);
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
    window.location.href = "/profile";
  }

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
        <ClockInButton onClick={handleClockInOut}>
          {isClockedIn ? 'Clock Out' : 'Clock In'}
        </ClockInButton>
        <BackButton onClick={handleOnClickDashboard}>Back to Dashboard</BackButton>
      </RightPanel>
    </Container>
  );
};

export default AttendancePage;
