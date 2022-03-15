import React from 'react';
import './modal.css';
import { Routes, Route } from 'react-router-dom'

import RegistrationForm from '../components/forms/registration/RegistrationForm';
import LoginForm from '../components/forms/login/LoginForm';
import ResetPasswordForm from '../components/forms/password/ResetPasswordForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function Modal({ active, setActive, children }) {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
      <FontAwesomeIcon icon={faXmark} className="crossIcon" onClick={() => setActive(false)} />
        <Routes>
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/reset-password' element={<ResetPasswordForm />} />
          {children}
        </Routes>
      </div>
    </div>
  );
}

export default Modal;



