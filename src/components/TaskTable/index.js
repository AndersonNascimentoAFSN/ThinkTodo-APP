import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import mockData from '../../utils/mockDataTable';

const TaskTable = () => (
  <table>
    <Thead />
    {mockData && mockData.map((data, index) => (
      <Tbody
        key={ index }
        name={ data.name }
        description={ data.description }
        creationDate={ data.creationDate }
        status={ data.status }
      />
    ))}
  </table>
);

export default TaskTable;
