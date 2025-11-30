'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactForm as ContactFormType } from '@/types';
import { SERVICES } from '@/lib/constants';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>();

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
          })}
          className={`w-full px-4 py-3 bg-dark-800 border ${
            errors.name ? 'border-red-500' : 'border-dark-600'
          } rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className={`w-full px-4 py-3 bg-dark-800 border ${
            errors.email ? 'border-red-500' : 'border-dark-600'
          } rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[\d\s\-\+\(\)]+$/,
              message: 'Invalid phone number',
            },
          })}
          className={`w-full px-4 py-3 bg-dark-800 border ${
            errors.phone ? 'border-red-500' : 'border-dark-600'
          } rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500`}
          placeholder="+977 9800000000"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Interest Field */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-black mb-2">
          Service Interest *
        </label>
        <select
          id="serviceInterest"
          {...register('serviceInterest', {
            required: 'Please select a service',
          })}
          className={`w-full px-4 py-3 bg-dark-800 border ${
            errors.serviceInterest ? 'border-red-500' : 'border-dark-600'
          } rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="general">General Inquiry</option>
        </select>
        {errors.serviceInterest && (
          <p className="mt-1 text-sm text-red-500">{errors.serviceInterest.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
          className={`w-full px-4 py-3 bg-dark-800 border ${
            errors.message ? 'border-red-500' : 'border-dark-600'
          } rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500 resize-none`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-green-500 text-sm">
            Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-500 text-sm">
            Oops! Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}
    </form>
  );
}
