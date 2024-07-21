// utils/validationSchema.ts
import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Z\s]{1,30}$/, 'Name must be 1-30 letters only'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Invalid email format'
    )
    .max(30, 'Email must be less than 30 characters'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^01[0-2,5][0-9]{8}$/, 'Invalid Egyptian phone number'),
});
