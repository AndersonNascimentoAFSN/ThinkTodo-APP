import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tbody = ({ name, description, creationDate, status }) => {
  const [statusTask, setStatusTask] = useState('');

  return (
    <tbody>
      <tr>
        <td>{ name }</td>
        <td>{ description }</td>
        <td>{ creationDate }</td>
        <td>
          <select onChange={ (e) => setStatusTask(e.target.value) } value={ statusTask }>
            { status && status.map((data, index) => (
              <option key={ index } value={ data.value }>{data.name}</option>
            ))}
          </select>
        </td>
        <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    </tbody>
  );
};

export default Tbody;

Tbody.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  status: PropTypes.arrayOf(PropTypes.object).isRequired,
};
