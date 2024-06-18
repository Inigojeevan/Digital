import React, { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '@clerk/clerk-react';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f3b72;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
`;

const AddEventButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const AddEventForm: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [project, setProject] = useState('');
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user && user.id) {
      const eventData = {
        employeeID: user.id,
        date,
        time,
        eventName: project,
      };

      try {
        const response = await fetch('http://localhost:3000/meetings/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });

        if (response.ok) {
          alert('Event added successfully');
          setDate('');
          setTime('');
          setProject('');
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error adding event:', error);
        alert('Error adding event');
      }
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add Event</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          required
        />
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time"
          required
        />
        <Input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Event Name"
          required
        />
        <AddEventButton type="submit" onClick={() => {
            window.location.href = "/calendar"
        }}>Add Event</AddEventButton>
      </form>
    </FormContainer>
  );
};

export default AddEventForm;