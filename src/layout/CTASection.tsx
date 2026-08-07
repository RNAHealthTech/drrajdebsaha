import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from "@formspree/react";
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import QRCode from 'react-qr-code';

const TIME_SLOTS = [
  '10:00 AM - 12:00 PM (Morning)',
  '12:00 PM - 02:00 PM (Afternoon)',
  '04:00 PM - 06:00 PM (Evening)',
  '06:00 PM - 08:00 PM (Night)',
];

const CTASection: React.FC = () => {
  const [state, handleSubmit] = useForm('xqapkolz');
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    timeSlot: TIME_SLOTS[0],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSlotSelect = (slot: string) => {
    setFormData(prevData => ({
      ...prevData,
      timeSlot: slot
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    handleWhatsAppSubmit();
  };

  const handleWhatsAppSubmit = () => {
    const phoneNumber = '919561409398';

    const message = `Hello Dr. Rajdeb,\n\nNew Appointment Request:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Preferred Date: ${formData.date}\n• Preferred Time: ${formData.timeSlot}\n• Query: ${formData.message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


  return (

    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Update decorative elements to be smaller */}
      <div className="absolute top-0 right-0 w-1/4 h-1/3 bg-blue-500 opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-500 opacity-5 rounded-tr-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-5 text-white">
                <h3 className="text-xl font-bold">Appointment Information</h3>
              </div>

              <div className="p-6 space-y-6 flex-grow">
                {/* Appointment Times */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Consultation Hours</h4>
                    <p className="text-gray-700">Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p className="text-gray-700 font-medium text-blue-700 mt-1">By Appointment</p>
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
                
                {/* Social & QR Code */}
                <div className="flex items-start space-x-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center w-full justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Follow on Instagram</h4>
                      <a href="https://www.instagram.com/your_go_to_kidney_specialist" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 break-all text-sm font-medium">@your_go_to_kidney_specialist</a>
                    </div>
                    <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm text-center">
                      <QRCode value="https://drrajdebsaha.com/appointment" size={70} />
                      <p className="text-xs text-blue-800 font-bold mt-1">Scan to Book</p>
                    </div>
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
                  <div className="text-center py-6">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-2 animate-bounce" />
                    <h4 className="text-lg font-bold text-gray-800">Booking Submitted!</h4>
                    <p className="text-gray-600 text-xs mt-1">Opening WhatsApp to confirm your appointment details...</p>
                  </div>
                ) : (
                  <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
                    <div>
                      <label htmlFor="cta-name" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-blue-600" /> Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="cta-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cta-phone" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-blue-600" /> Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="cta-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Your 10-digit mobile number"
                        required
                      />
                    </div>

                    {/* Date Picker */}
                    <div>
                      <label htmlFor="cta-date" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-blue-600" /> Select Appointment Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="cta-date"
                        name="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>

                    {/* Time Slot Picker */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-blue-600" /> Select Time Slot <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = formData.timeSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => handleSlotSelect(slot)}
                              className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all text-left flex items-center justify-between ${
                                isSelected
                                  ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-sm font-semibold ring-1 ring-blue-600'
                                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                              }`}
                            >
                              <span>{slot}</span>
                              {isSelected && <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cta-message" className="block text-sm font-semibold text-gray-700 mb-1 flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-blue-600" /> Message / Symptoms (Optional)
                      </label>
                      <textarea
                        id="cta-message"
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Briefly describe your health queries..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center gap-2 text-sm"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Calendar className="w-4 h-4" />
                      Request Appointment Now
                    </motion.button>

                    <p className="text-center text-xs text-gray-500 mt-1">
                      Direct WhatsApp booking confirmation
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