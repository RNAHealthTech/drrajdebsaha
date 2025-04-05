import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';



const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('xqapkolz');
  const [formData, setFormData] = useState({
    name: '',
    // email: '',
    phone: '',
    // date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    handleWhatsAppSubmit();
  }

  const handleWhatsAppSubmit = () => {
    const phoneNumber = '919561409398'; //  number without spaces or special characters

    // Format the message for WhatsApp
    const message = `Hello Dr. Rajdeb,\n\nNew appointment request:\nName: ${formData.name}\nPhone: ${formData.phone}\nQuery: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50">
      <AnimatePresence>

        <>
          {/* Hero Section */}
          <motion.div
            className="relative h-72 md:h-96 overflow-hidden bg-gradient-to-r from-blue-700 to-blue-800 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-purple-600 opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute left-1/4 -bottom-24 w-80 h-80 rounded-full bg-indigo-500 opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [5, 0, 5],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            />

            <motion.div
              className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white p-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight">
                Connect with <span className="text-purple-200">Dr. Rajdeb Saha</span>
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-center max-w-3xl">
                Expert Nephrology Consultation & Care
              </p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

              {/* Left Column - Doctor Info */}
              <motion.div
                className="lg:col-span-5 xl:col-span-4 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Doctor Profile Card */}
                <motion.div
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-r from-blue-700 to-blue-700 p-6 text-white">
                    <h2 className="text-2xl font-bold">Dr. Rajdeb Saha</h2>
                    <p className="text-indigo-100"> Consultant Nephrologist and Kidney Transplantation</p>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* OPD Schedule */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Private OPD Hours</h3>
                        <p className="text-gray-700">Mon - Sat: 6:00 PM - 8:00 PM</p>
                        <p className="text-gray-700">Room No.: 1236</p>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-700">rajdeb@live.com</p>
                        <p className="text-sm text-gray-500 mt-1">For appointment queries and medical information</p>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Languages Spoken</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {['English', 'Hindi', 'Bengali', 'Marathi', 'Nepali', 'Kannada'].map((lang) => (
                            <span key={lang} className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>


              {/* Right Column - Appointment Form */}
              <motion.div
                className="lg:col-span-7 xl:col-span-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule a Consultation</h2>
                    {state.succeeded ? (
                      <p>
                        Thank You for Submitting! We will contact your shortly
                      </p>
                    ) : (
                      <form onSubmit={handleFinalSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name Field */}
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              placeholder="Your full name"
                              required
                            />
                          </div>

                          {/* Email Field */}
                          {/* <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              placeholder="your.email@example.com"
                              required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />

                          </div> */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Phone Field */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              placeholder="Your contact number"
                              required
                            />
                          </div>

                          {/* Date Field */}
                          {/* <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Appointment Date</label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                             
                              required
                            />

                          <ValidationError prefix="Date" field="date" errors={state.errors} />

                          </div> */}
                        </div>

                        {/* Message Field */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information (Optional)</label>
                          <textarea
                            id="message"
                            rows={4}
                            name="message"
                            value={formData.message}

                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            placeholder="Please describe your symptoms or any specific questions you have for Dr. Saha"
                            required
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"

                          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >

                          <span className="flex items-center justify-center">
                            
                            Submit
                          </span>

                        </motion.button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                          You'll receive confirmation via email shortly after booking
                        </p>
                      </form>
                    )}
                  </div>
                </div>

                {/* Location Map */}
                <motion.div
                  className="mt-8 bg-white rounded-xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Clinic Location</h2>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7098091318103!2d77.18697561177014!3d28.638458175559986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02a17db06405%3A0x6f1a6c9d6ede10d0!2sSir%20Ganga%20Ram%20Hospital!5e0!3m2!1sen!2sin!4v1740717894538!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Sir Ganga Ram Hospital Location"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4 flex items-start space-x-4">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Sir Ganga Ram Hospital</h3>
                        <p className="text-gray-600">Room No. 1236, Department of Nephrology</p>
                        <p className="text-gray-600">Rajinder Nagar, New Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </>
      </AnimatePresence>
    </div>
  );
};

export default Contact;