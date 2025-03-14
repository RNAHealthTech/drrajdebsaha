import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from "@formspree/react"

const CTASection: React.FC = () => {
  const [state, handleSubmit] = useForm('xqapkolz');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    //console.log('Form submitted:', formData);
    // Reset form after submission
    handleSubmit(formData);
    handleWhatsAppSubmit();

  };

  const handleWhatsAppSubmit = () => {
    const phoneNumber = '91'; //  number without spaces or special characters

    // Format the message for WhatsApp
    const message = `Hello Dr. Rajdeb,\n\nNew appointment request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nQuery: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };


  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500 opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500 opacity-5 rounded-tr-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Schedule Your Kidney Consultation Today
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Take the first step towards better kidney health with Dr. Rajdeb Saha's expert consultation. Same-day appointments available for urgent cases.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Appointment Board */}
          <motion.div
            className="lg:w-1/3 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-5 text-white">
                <h3 className="text-xl font-bold">Appointment Information</h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Appointment Times */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Consultation Hours</h4>
                    <p className="text-gray-700">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sat: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-700 font-medium text-blue-700 mt-1">Private OPD: Mon - Sat, 6:00 PM - 8:00 PM</p>
                  </div>
                </div>

                {/* Online Consultations */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Telemedicine Available</h4>
                    <p className="text-gray-700">Virtual consultations for follow-ups and non-emergency cases</p>
                    <p className="text-gray-700 text-sm mt-1">Secure video platform with prescription delivery</p>
                  </div>
                </div>

                {/* Emergency Care */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Urgent Care Available</h4>
                    <p className="text-gray-700">Same-day appointments for kidney emergencies</p>
                    <p className="text-gray-700 text-sm mt-1">Direct hospital admission facilitation when necessary</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Contact Form */}
          <motion.div
            className="lg:w-1/3 order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Request Appointment</h3>
                {state.succeeded ? (
                  <p>
                    Thank You for Submitting! We will contact your shortly
                  </p>
                ) : (
                  <form onSubmit={handleFinalSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />

                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your contact number"
                        required
                      />
                    </div>
                    <div>
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

                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Concerns</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Briefly describe your symptoms or concerns"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Appointment
                    </motion.button>

                    <p className="text-center text-xs text-gray-500 mt-2">
                      Your information is secure and will only be used to contact you regarding your appointment
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            className="lg:w-1/3 order-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="p-5 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                <h3 className="text-xl font-bold">Find Us</h3>
              </div>

              <div className="flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7098091318103!2d77.18697561177014!3d28.638458175559986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02a17db06405%3A0x6f1a6c9d6ede10d0!2sSir%20Ganga%20Ram%20Hospital!5e0!3m2!1sen!2sin!4v1740717894538!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  title="Dr. Rajdeb Saha Clinic Location"
                ></iframe>
              </div>

              <div className="p-5">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-gray-800">Sir Ganga Ram Hospital</h4>
                    <p className="text-gray-600 text-sm">Room No. 1236, Department of Nephrology</p>
                    <p className="text-gray-600 text-sm">Rajinder Nagar, New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all font-medium group shadow-md"
          >
            <span>Contact For More Information</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
            Dr. Rajdeb Saha is a board-certified nephrologist specializing in kidney disease management,
            dialysis care, and transplant medicine. Serving patients in Delhi NCR with over 15 years of experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;