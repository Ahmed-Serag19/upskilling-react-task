// components/ContactUs/ContactUs.tsx
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { contactFormSchema } from '../../../utils/validationSchema';
import { sendContactForm } from '../../../utils/api';
import './ContactUs.css';
import SectionHeader from '../../../utils/SectionHeader/SectionHeader';
import { FaEnvelope } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
}

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactFormSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const mutation = useMutation(sendContactForm, {
    onSuccess: () => {
      console.log('Form submitted successfully');
      setServerError(null);
    },
    onError: (error: Error) => {
      console.error('Error submitting form', error);
      setServerError(error.message);
    },
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <section className="contact py-16 h-screen bg-gray-100 flex flex-col items-center justify-around gap-16">
      <SectionHeader label="Contact Us" />
      <div className=" flex flex-col md:flex-row justify-center gap-12">
        <div className="form-container flex justify-center items-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 min-w-96"
          >
            <div>
              <input
                type="text"
                {...register('name')}
                placeholder="Name"
                className="p-4 w-full rounded-full bg-blue-200 placeholder-black focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                {...register('email')}
                placeholder="Email"
                className="w-full p-4 rounded-full bg-blue-200 placeholder-black focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register('phone')}
                placeholder="Phone"
                className="w-full p-4 rounded-full bg-blue-200 placeholder-black focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-600">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="py-3 px-14 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? 'Submitting...' : 'Send'}
              </button>
            </div>
            {serverError && (
              <p className="text-red-600">{serverError}</p>
            )}
            {mutation.isSuccess && !serverError && (
              <p className="text-green-600">
                Submitted successfully!
              </p>
            )}
          </form>
        </div>
        <div className="contact-info w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href="mailto:upskilling.eg@gmail.com">
              upskilling.eg1&#64;gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdCall />
            <a href="tel:+201154932137">+20 115 493 2137</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
