import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Title } from '../../components';

const Home = () => (
  <div>
    <Header />
    <Title title="Gerenciador de Tarefas" />
    <h2>
      Está tendo problema com a organização das tarefas?
      Que tal usar um aplicativo que te ajude com isso?
    </h2>
    <Link to="/todo">Utilize-o agora mesmo!</Link>
  </div>
);

export default Home;
