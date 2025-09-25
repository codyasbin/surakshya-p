'use client';

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

function validate(formData: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!formData.name.trim()) errors.name = 'Name is required.';
  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    errors.email = 'Invalid email address.';
  }
  if (!formData.company.trim()) errors.company = 'Company is required.';
  if (!formData.message.trim()) errors.message = 'Message is required.';
  return errors;
}

export default function Form() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus('');
      return;
    }

    setFormStatus('Submitting...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
      } else {
        setFormStatus(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Company Field */}
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.company ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Form Status */}
        {formStatus && (
          <div
            className={`mb-4 text-sm ${
              formStatus.includes('success') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {formStatus}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 text-white font-semibold rounded-md ${
            formStatus.includes('Submitting')
              ? 'bg-gray-400'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
          disabled={formStatus.includes('Submitting')}
        >
          {formStatus.includes('Submitting') ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
