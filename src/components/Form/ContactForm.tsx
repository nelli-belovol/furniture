import React from 'react';

import { Field, Form, Formik } from 'formik';
import { validationSchema } from 'utils/validationSchema';

import styled from './ContactForm.module.scss';

interface IInitialValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: IInitialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const handleSubmit = (values: IInitialValues) => {
    console.log(values);
  };

  return (
    <div className={styled.section}>
      <h2>Contact us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styled.formWrap}>
              {errors.name && touched.name ? (
                <div className={styled.error}>{errors.name}</div>
              ) : (
                <></>
              )}
              <Field
                className={styled.input}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className={styled.formWrap}>
              {errors.email && touched.email ? (
                <div className={styled.error}>{errors.email}</div>
              ) : (
                <></>
              )}
              <Field
                className={styled.input}
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={styled.formWrap}>
              {errors.phone && touched.phone ? (
                <div className={styled.error}>{errors.phone}</div>
              ) : (
                <></>
              )}
              <Field
                className={styled.input}
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className={styled.formWrap}>
              {errors.message && touched.message ? (
                <div className={styled.error}>{errors.message}</div>
              ) : (
                <></>
              )}
              <Field
                className={`${styled.input} ${styled.message}`}
                as="textarea"
                name="message"
                id="message"
                placeholder="Message"
              />
            </div>
            <button type="submit" className={styled.buttonSubmit}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
