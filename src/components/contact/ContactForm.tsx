import React, { useState } from 'react';
import AnimatedButton from '../navigations/AnimatedBottonProps';

interface FormData {
  name: string;
  email: string;
  zipCode: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    zipCode: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="
        bg-slate-400
        backdrop-blur-sm 
        shadow-2xl 
        p-4 sm:p-6 md:p-8 
        w-[90%] max-w-[300px] md:max-w-[500px]  
        mx-auto 
      "
    >
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
        Get a technical Consultation
      </h3>

      <p className="text-gray-600 text-sm mb-4 sm:mb-6 text-center">
        web app solutions.
      </p>

      <div className="space-y-4 sm:space-y-6">
        {/* Name field */}
        <div>
          <div className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="
              w-full px-3 py-2 sm:py-3 
              border border-black rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
              transition-all duration-200
              placeholder-gray-500
              bg-slate-200
              font-montserrat
            "
            placeholder="Your name"
          />
        </div>

        {/* Email and Phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="
                w-full px-3 py-2 sm:py-3 
                border border-black rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                transition-all duration-200
                placeholder-gray-500
                 bg-slate-200
                 font-montserrat
              "
              placeholder="your@email.com"
            />
          </div>

          <div>
            <div className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </div>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="
                w-full px-3 py-2 sm:py-3 
                border border-black rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                transition-all duration-200
                placeholder-gray-500
                 bg-slate-200
                 font-montserrat
              "
              placeholder="+234 813 345 8141"
            />
          </div>
        </div>

        {/* Message field */}
        <div>
          <div className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </div>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="
              w-full px-3 py-2 sm:py-3 
              border border-black-200 rounded-md
              focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent 
              transition-all duration-200 
              resize-vertical
              placeholder-gray-500
               bg-slate-200
               font-montserrat
            "
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit button */}
        <AnimatedButton>
          <button
            onClick={handleSubmit}
            className="
              w-full bg-inherit
              text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
              shadow-lg relative
              before:content-[''] before:mr-2
              hover:before:content-['───>'] transition-[before]
            "
          >
            Send Message
          </button>
        </AnimatedButton>
      </div>
    </div>
  );
};