import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

const TaskBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cadcfc;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
`;

const AddTaskButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #474646;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const Thead = styled.thead`
  background-color: #1f3b72;
  color: #ffffff;
`;

const Tbody = styled.tbody`
  background-color: #ffffff;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #dddddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: center;
`;

const Priority = styled.span<{ level: string }>`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ level }) => 
    level === 'High' ? '#ff4d4f' :
    level === 'Medium' ? '#ffec3d' : '#bae637'};
  color: #000000;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cadcfc;
  }
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SaveButton = styled.button`
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

interface Task {
  taskID: string;
  title: string;
  projectName: string;
  priority: string;
  date: string;
  employeeID: string;
}

//const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchTasks = async () => {
      if (user && user.id) {
        try {
          const response = await fetch(`https://digital-epcs.vercel.app/taskboard/${user.id}`);
          const data = await response.json();
          setTasks(data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    };

    fetchTasks();
  }, [user]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpdate = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = async (taskID: string) => {
    try {
      await axios.delete(`https://digital-epcs.vercel.app/taskboard/delete/${user?.id}/${taskID}`);
      setTasks(tasks.filter(task => task.taskID !== taskID));
      alert('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleSave = async () => {
    if (!selectedTask) return;

    try {
      await axios.put(`https://digital-epcs.vercel.app/taskboard/update/${user?.id}/${selectedTask.taskID}`, selectedTask);
      setTasks(tasks.map(task => (task.taskID === selectedTask.taskID ? selectedTask : task)));
      handleModalClose();
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedTask(prevTask => prevTask ? { ...prevTask, [name]: value } : null);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <TaskBoardContainer>
      <SearchBar 
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table>
        <Thead>
          <Tr>
            <Th>TASK</Th>
            <Th>TITLE</Th>
            <Th>PROJECT</Th>
            <Th>PRIORITY</Th>
            <Th>DATE</Th>
            <Th>ID</Th>
            <Th>ACTIONS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredTasks.map(task => (
            <Tr key={task.taskID}>
              <Td>{task.taskID}</Td>
              <Td>{task.title}</Td>
              <Td>{task.projectName}</Td>
              <Td>
                <Priority level={task.priority}>{task.priority}</Priority>
              </Td>
              <Td>{formatDate(task.date)}</Td>
              <Td>{task.employeeID}</Td>
              <Td>
                <ActionButton onClick={() => handleUpdate(task)}>Update</ActionButton>
                <ActionButton onClick={() => handleDelete(task.taskID)}>Delete</ActionButton>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <AddTaskButton onClick={() => window.location.href = "/taskboard/add"}>Add Task</AddTaskButton>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Update Task"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: { padding: '20px', maxWidth: '500px', margin: 'auto', borderRadius: '10px' }
        }}
      >
        <ModalWrapper>
          <ModalTitle>Update Task</ModalTitle>
          {selectedTask && (
            <>
              <Input
                type="text"
                name="title"
                placeholder="Title"
                value={selectedTask.title}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={selectedTask.projectName}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="priority"
                placeholder="Priority"
                value={selectedTask.priority}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="date"
                placeholder="Date"
                value={selectedTask.date}
                onChange={handleInputChange}
                required
              />
              <SaveButton onClick={handleSave}>Save</SaveButton>
            </>
          )}
        </ModalWrapper>
      </Modal>
    </TaskBoardContainer>
  );
};

export default TaskBoard;
