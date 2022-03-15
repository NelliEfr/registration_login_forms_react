import React, { useState } from 'react';

import Button from './components/UI/button/Button';
import Modal from './modal/Modal';
import { Link } from 'react-router-dom';

function App() {
  const [modalActive, setModalActive] = useState();
  return (
    <div className="App">
      <Link to='/registration' style={{ textDecoration: 'none' }}>
        <Button color="yellow" onClick={() => setModalActive(true)}>Открыть форму / Зарегистрироваться</Button>
      </Link>  
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
