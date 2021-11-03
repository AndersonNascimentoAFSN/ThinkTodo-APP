import React, { useState } from 'react';

const TaskForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          id="name"
          onChange={ (e) => setName(e.target.value) }
          value={ name }
        />
      </label>
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          onChange={ (e) => setDescription(e.target.value) }
          value={ description }
        />
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
