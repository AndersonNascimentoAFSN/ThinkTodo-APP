import React from 'react';
import { Header, Title } from '../../components';

const Home = () => (
  <div>
    <Header />
    <Title title="Gerenciador de Tarefas" />
    <h2>
      Está tendo problema com a organização das tarefas?
      Que tal usar um aplicativo que te ajude com isso?
    </h2>
    <a href="#Todo">Utilize-o agora mesmo!</a>
  </div>
);

export default Home;
