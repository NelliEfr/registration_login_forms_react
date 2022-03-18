import React from 'react';
import './modal.css';
import { Routes, Route } from 'react-router-dom'
import FormItem from '../components/forms/FormItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function Modal({ active, setActive }) {
  return (
    <div className={`modal ${active && 'active'}`}>
      <div className={`modal_content ${active && 'active'}`} onClick={(e) => e.stopPropagation()}>
      <FontAwesomeIcon icon={faXmark} className="crossIcon" onClick={() => setActive(false)} />
        <Routes>
          <Route 
            path='/registration' 
            element={
              <FormItem 
                title={'Регистрация'}
                input={{email: 'Email', password: 'Пароль'}}
                button={{submit: 'Зарегистрироваться', redirect: 'Войти'}}
                infoText={'Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.'}
                link={'/login'}
                formType={'registration'}
              />} />
          
          <Route 
            path='/login' 
            element={
              <FormItem
                title={'Вход'}
                input={{email: 'Email', password: 'Пароль'}}
                button={{submit: 'Войти', redirect: 'Регистрация'}}
                infoText={'Восстановить пароль'}
                link={'/registration'}
                formType={'login'}
              />} />
          
          <Route 
            path='/reset-password' 
            element={
              <FormItem 
                title={'Восстановление пароля'}
                input={{email: 'Email'}}
                button={{submit: 'Отправить'}}
                infoText={'Срок действия пароля 24 ч.'}
                formType={'reset_password'}
                infoTextAdditional={'Для получения временного пароля необходимо ввести email, указанный при регистрации'}
              />} />
        </Routes>
      </div>
    </div>
  );
}

export default Modal;



