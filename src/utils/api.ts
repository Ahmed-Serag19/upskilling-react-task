// utils/api.ts
import axios from 'axios';
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}
export const sendContactForm = async (formData: ContactFormData) => {
  try {
    const response = await axios.post(
      'http://upskilling-egypt.com:3001/contact',
      formData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || 'Error submitting form'
      );
    }
    throw new Error('Error submitting form');
  }
};
