import * as yup from 'yup';

const nameRegex = /[A-zА-яёЁЇїІіЄєҐґ-]/;
const emailRegex =
  /* eslint-disable */
  /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/;
const phoneRegExp = /^(?:\+38)?(0\d{9})$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Your name is too short, min 2 symbols')
    .max(20, 'Your name is too long, max 32 symbols')
    .required('Please enter your name')
    .trim('')
    .strict(true)
    .matches(nameRegex, 'title must be letters'),

  email: yup
    .string()
    .email('The email is incorrect')
    .matches(emailRegex, 'The email is incorrect')
    .required('Please enter your email'),

  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please enter your phone'),

  message: yup
    .string()
    .min(10, 'Text is too short')
    .required('Please enter your message'),
});

export const validationSchemaLogin = yup.object({
  email: yup
    .string()
    .email('The email is incorrect')
    .matches(emailRegex, 'The email is incorrect')
    .required('Please enter your email'),

  password: yup
    .string()
    .min(8, 'Your password is too short, min 8 symbols')
    .matches(passwordRegex, 'Must have at least one number')
    .required('Please enter your password'),
});

export const validationSchemaSubscribe = yup.object({
  email: yup
    .string()
    .email('The email is incorrect')
    .matches(emailRegex, 'The email is incorrect')
    .required('Please enter your email'),
});
