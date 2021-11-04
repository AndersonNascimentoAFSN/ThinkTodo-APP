import React, { useState } from 'react';

const OrderingTask = () => {
  const [ordering, setOrdering] = useState('');

  return (
    <div>
      <h2>Ordenação</h2>
      <select
        onChange={ (e) => setOrdering(e.target.value) }
        value={ ordering }
      >
        <option value="alphabetical">Ordem Alfabética</option>
        <option value="creation">Data de Criação</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
};

export default OrderingTask;
