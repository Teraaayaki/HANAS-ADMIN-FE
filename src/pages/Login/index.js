import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/Logo/hanas-logo.png';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import style from './index.module.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={style.formContainer}>
      <Form className={style.form}>
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
            <Form.Control
              type="email"
              placeholder="e.g. johndoe@gmail.com"
              autoComplete="email"
              className={style.inputFields}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 position-relative"
            controlId="formBasicPassword"
          >
            <Form.Label className={style.inputLabels}>PASSWORD</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="min of 8 characters"
              autoComplete="current-password"
              className={style.inputFields}
            />
            <FaEye
              onClick={() => setShowPassword(false)}
              className={showPassword ? style.faEyeIcon : 'd-none'}
            />
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className={!showPassword ? style.faEyeIcon : 'd-none'}
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
