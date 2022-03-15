import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';
import classes from './RegistrationForm.module.css';

import { Link } from 'react-router-dom';

function RegistrationForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Регистрация</h1>
        <Input 
          {...register('email', {
            required: 'Обязательное поле',
            pattern: {
             value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             message: "Email не соответствует формату электронной почты"
            }
            })}
          id="email"
          type="text"
          placeholder="Email" 
          />
        <div>
          {errors?.email && <p className={classes.errorMessage}>{errors?.email?.message}</p>}
        </div>
        <Input 
          {...register('password', {
            required: 'Обязательное поле',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: " Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
             }
          })}
          id="password"
          type="password" 
          placeholder="Пароль" 
          />
        <div>
          {errors?.password && <p className={classes.errorMessage}>{errors?.password?.message}</p>}
        </div>
        <p className={classes.infoText}>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</p>
        <Button type='submit' color="yellow">Зарегистрироваться</Button>
        <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button type='button' color="white">Войти</Button>
        </Link>
      </form>
    </div>
  );
}

export default RegistrationForm;
