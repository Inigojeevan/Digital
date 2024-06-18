import React, { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d3e4f7;
`;

const FormWrapper = styled.div`
  background-color: #0b2e73;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 400;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #333;
  }
`;

const AddTask: React.FC = () => {
  const [task, setTask] = useState({
    id: '',
    title: '',
    project: '',
    priority: '',
    date: ''
  });

  const { user } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('User not logged in');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:3000/taskboard/add', {
        taskID: task.id,
        title: task.title,
        projectName: task.project,
        priority: task.priority,
        date: task.date,
        employeeID: user.id
      });
      console.log(response.data);
      alert('Task added successfully!');
      // Optionally, reset the form here
      setTask({
        id: '',
        title: '',
        project: '',
        priority: '',
        date: ''
      });
      window.location.href = "/taskboard"; 
    } catch (error) {
      console.error(error);
      alert('Failed to add task. Please try again.');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Taskboard</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="id"
            placeholder="ID"
            value={task.id}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={task.title}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="project"
            placeholder="Project Name"
            value={task.project}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="priority"
            placeholder="low/medium/high"
            value={task.priority}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="date"
            placeholder="DD-MM-YYYY"
            value={task.date}
            onChange={handleChange}
            required
          />
          <Button type="submit">Add Task</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default AddTask;
