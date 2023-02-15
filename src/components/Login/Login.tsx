import React from 'react';
import { Field, Form, Formik } from 'formik';
import { validationSchemaLogin } from 'utils/validationSchema';

import { useGoogleLogin } from '@react-oauth/google';

import styled from './Login.module.scss';
interface IInitialValues {
  email: string;
  password: string;
}

const initialValues: IInitialValues = {
  email: '',
  password: '',
};
const Login = () => {
  const handleLogin = (values: IInitialValues) => {
    console.log(values);
  };

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });
  return (
    <div className={styled.loginWrap}>
      <h3>Login</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaLogin}
        onSubmit={(values, { resetForm }) => {
          handleLogin(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styled.formWrap}>
              {errors.email && touched.email ? (
                <div className={styled.error}>{errors.email}</div>
              ) : (
                <></>
              )}
              <Field
                className={styled.input}
                id="emailLogin"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={styled.formWrap}>
              {errors.password && touched.password ? (
                <div className={styled.error}>{errors.password}</div>
              ) : (
                <></>
              )}
              <Field
                type="password"
                className={styled.input}
                id="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div className={styled.submitWrap}>
              <button type="submit" className={styled.buttonSubmit}>
                Login
              </button>
              <span>or</span>
              <button
                className={styled.buttonSubmitGoogle}
                onClick={() => login()}
              >
                Sign in with Google 🚀
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export  {Login};
