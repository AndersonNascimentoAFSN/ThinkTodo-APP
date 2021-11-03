import React from 'react';
import { Header, Title, TaskTable, TaskForm } from '../../components';

const Todo = () => (
  <div>
    <Header />
    <Title title="Gerenciador de Tarefas" />
    <TaskTable />
    <TaskForm />
  </div>
);

export default Todo;
