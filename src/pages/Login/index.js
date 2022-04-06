import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { signIn } from '../../redux/actions/authActions';
import logo from '../../assets/Logo/hanas-logo.png';
import style from './index.module.scss';

const Login = () => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleOnSubmit = async ({ email, password }) => {
    dispatch(signIn(email, password));
  };

  return (
    <div className={style.formContainer}>
      <Form className={style.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <center className="d-flex flex-column align-items-center">
          <img src={logo} className={style.logo} alt="Hanas Logo" />
          <span className={style.adminText}>Admin</span>
          <h3 className={style.formTitle}>Log In to Admin</h3>
          <span className={style.formMessage}>
            Enter your email and password below
          </span>
        </center>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={style.inputLabels}>EMAIL</Form.Label>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field: { onChange, value, ref } }) => (
                <Form.Control
                  ref={ref}
                  value={value}
                  maxLength={50}
                  onChange={onChange}
                  className={style.inputFields}
                  isInvalid={!!error}
                  type="email"
                  placeholder="e.g. johndoe@gmail.com"
                  autoComplete="email"
                  required
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3 position-relative"
            controlId="formBasicPassword"
          >
            <Form.Label className={style.inputLabels}>PASSWORD</Form.Label>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { onChange, value, ref } }) => (
                <Form.Control
                  ref={ref}
                  value={value}
                  maxLength={20}
                  onChange={onChange}
                  className={style.inputFields}
                  isInvalid={!!error}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="min of 8 characters"
                  autoComplete="current-password"
                  required
                />
              )}
            />
            <FaEye
              onClick={() => setShowPassword(false)}
              className={
                showPassword
                  ? error
                    ? style.adjustedFaEyeIcon
                    : style.faEyeIcon
                  : 'd-none'
              }
            />
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className={
                !showPassword
                  ? error
                    ? style.adjustedFaEyeIcon
                    : style.faEyeIcon
                  : 'd-none'
              }
            />
            <Form.Text className={style.forgotPassword}>
              Forgot Password?{' '}
              <Link to="/forgot-password" className={style.clickHereLink}>
                Click Here
              </Link>
            </Form.Text>
          </Form.Group>
        </div>
        <Button className={style.loginButton} type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
