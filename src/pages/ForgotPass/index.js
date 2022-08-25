import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import {
  forgotPass,
  resetSuccess,
  resetError,
} from "../../redux/actions/authActions";
import logo from "../../assets/Logo/hanas-logo.png";
import style from "./index.module.scss";

const ForgotPass = () => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { success, successMessage } = useSelector((state) => state.auth);

  const handleOnSubmit = async ({ confirmPassword, password }) => {
    if (password.length < 8 || confirmPassword.length < 8) {
      toast.error("Password must be of 8 characters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetError()),
      });
    } else {
      password !== confirmPassword
        ? toast.error("Passwords do not match", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => dispatch(resetError()),
          })
        : dispatch(forgotPass(password));
    }
  };

  useEffect(() => {
    if (success) {
      toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetSuccess()),
      });
    }
  }, [dispatch, success, successMessage]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => dispatch(resetError()),
      });
    }
  }, [dispatch, error]);

  return (
    <div className={style.formContainer}>
      <Form className={style.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <center className="d-flex flex-column align-items-center">
          <img src={logo} className={style.logo} alt="Hanas Logo" />
          <span className={style.adminText}>Admin</span>
          <h3 className={style.formTitle}>Change Password</h3>
          <span className={style.formMessage}>
            Enter and confirm your new password
          </span>
        </center>
        <div>
          <Form.Group
            className="mb-3 position-relative"
            controlId="formPassword"
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
                  type={showPassword ? "text" : "password"}
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
                  : "d-none"
              }
            />
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className={
                !showPassword
                  ? error
                    ? style.adjustedFaEyeIcon
                    : style.faEyeIcon
                  : "d-none"
              }
            />
          </Form.Group>
          <Form.Group
            className="mb-3 position-relative"
            controlId="formConfirmPassword"
          >
            <Form.Label className={style.inputLabels}>
              CONFIRM PASSWORD
            </Form.Label>
            <Controller
              control={control}
              name="confirmPassword"
              defaultValue=""
              render={({ field: { onChange, value, ref } }) => (
                <Form.Control
                  ref={ref}
                  value={value}
                  maxLength={20}
                  onChange={onChange}
                  className={style.inputFields}
                  isInvalid={!!error}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="min of 8 characters"
                  autoComplete="current-password"
                  required
                />
              )}
            />
            <FaEye
              onClick={() => setShowConfirmPassword(false)}
              className={
                showConfirmPassword
                  ? error
                    ? style.adjustedFaEyeIcon
                    : style.faEyeIcon
                  : "d-none"
              }
            />
            <FaEyeSlash
              onClick={() => setShowConfirmPassword(true)}
              className={
                !showConfirmPassword
                  ? error
                    ? style.adjustedFaEyeIcon
                    : style.faEyeIcon
                  : "d-none"
              }
            />
            <Form.Text className={style.forgotPassword}>
              Go Back to{" "}
              <Link to="/login" className={style.clickHereLink}>
                Login
              </Link>
            </Form.Text>
          </Form.Group>
        </div>
        <Button className={style.loginButton} type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ForgotPass;
