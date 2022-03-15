import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';
import classes from './ResetPasswordForm.module.css';

function ResetPasswordForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Восстановление пароля</h1>
        <p className={classes.infoText}>Для получения временного пароля необходимо ввести email, указанный при регистрации</p>
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
        <p className={classes.infoText}>Срок действия временного пароля 24 ч.</p>
        <Button type='submit' color="yellow">Отправить</Button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
