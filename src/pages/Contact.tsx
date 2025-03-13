import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  condition: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Reset form when submission is successful
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setShowConfirmation(true);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Prepare WhatsApp message (optional functionality)
      const message = `Hello Dr. Rajdeb Saha,\n\nNew consultation request:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nPreferred Date: ${data.date}\nCondition: ${data.condition}\nMessage: ${data.message}`;
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = ''; // Add Dr. Rajdeb's WhatsApp number if available
      
      if (phoneNumber) {
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      }
      
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const conditionOptions = [
    'AKI (Acute Kidney Injury)',
    'CKD (Chronic Kidney Disease)',
    'Glomerulonephritis',
    'Electrolyte Imbalance',
    'Diabetic Kidney Disease',
    'Hypertension',
    'Other (please specify in message)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-50">
      <AnimatePresence>
        {showConfirmation ? (
          <ConfirmationScreen setShowConfirmation={setShowConfirmation} />
        ) : (
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
                    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6 text-white">
                      <h2 className="text-2xl font-bold">Dr. Rajdeb Saha</h2>
                      <p className="text-indigo-100">Associate Consultant, Nephrology</p>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      {/* OPD Schedule */}
                      <div className="flex items-start space-x-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
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
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  
                  {/* Specialties Card */}
                  <motion.div 
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-3 mb-4">
                        Specialties & Procedures
                      </h2>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-indigo-700">Conditions Treated</h3>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {conditionOptions.slice(0, 6).map((condition) => (
                              <motion.div
                                key={condition}
                                className="bg-indigo-50 text-indigo-800 px-3 py-2 rounded-lg text-sm"
                                whileHover={{ scale: 1.03, backgroundColor: '#c7d2fe' }}
                              >
                                {condition.split(' (')[0]}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-indigo-700">Procedures Performed</h3>
                          <ul className="mt-2 space-y-1 text-gray-700">
                            {[
                              'Kidney biopsy',
                              'Permcath Insertion',
                              'AV Fistula',
                              'Fistuloplasty',
                              'PD catheter insertion'
                            ].map((procedure) => (
                              <li key={procedure} className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                {procedure}
                              </li>
                            ))}
                          </ul>
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
                      
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name Field */}
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              {...register("name", { required: "Name is required" })}
                              className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              placeholder="Your full name"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                          </div>
                          
                          {/* Email Field */}
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              {...register("email", { 
                                required: "Email is required", 
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                                }
                              })}
                              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              placeholder="your.email@example.com"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Phone Field */}
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              id="phone"
                              {...register("phone", { required: "Phone number is required" })}
                              className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              placeholder="Your contact number"
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                          </div>
                          
                          {/* Date Field */}
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Appointment Date</label>
                            <input
                              type="date"
                              id="date"
                              {...register("date", { required: "Appointment date is required" })}
                              className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                              min={new Date().toISOString().split('T')[0]}
                            />
                            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
                          </div>
                        </div>
                        
                        {/* Condition Field */}
                        <div>
                          <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                          <select
                            id="condition"
                            {...register("condition", { required: "Please select a condition" })}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.condition ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                          >
                            <option value="" disabled selected>Select your condition</option>
                            {conditionOptions.map((condition) => (
                              <option key={condition} value={condition}>{condition}</option>
                            ))}
                          </select>
                          {errors.condition && <p className="mt-1 text-sm text-red-600">{errors.condition.message}</p>}
                        </div>
                        
                        {/* Message Field */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                          <textarea
                            id="message"
                            {...register("message")}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            placeholder="Please describe your symptoms or any specific questions you have for Dr. Saha"
                          ></textarea>
                        </div>
                        
                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : 'Schedule Consultation'}
                        </motion.button>
                        
                        <p className="text-center text-sm text-gray-500 mt-4">
                          You'll receive confirmation via email shortly after booking
                        </p>
                      </form>
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
            
            {/* Floating WhatsApp Action Button */}
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
            >
              <div className="relative group">
                <motion.a
                  href="https://wa.me/?text=I'd like to schedule an appointment with Dr. Rajdeb Saha" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M5.339 21.286l.415-.262c1.845-1.053 3.32-2.447 4.341-4.089l.255-.408-.161-.441a9.096 9.096 0 0 1-.587-3.322c.017-5.11 4.064-9.169 9.09-9.169 2.431-.017 4.716.931 6.42 2.667a9.33 9.33 0 0 1 2.65 6.472c-.017 5.11-4.064 9.169-9.09 9.169h-.004c-1.576 0-3.124-.397-4.552-1.158l-.425-.24L9.5 20.9l-4.161.387z" fillRule="evenodd" clipRule="evenodd"/>
                  </svg>
                </motion.a>
                <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    <p>Chat on WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Confirmation Screen Component
const ConfirmationScreen: React.FC<{ setShowConfirmation: (show: boolean) => void }> = ({ setShowConfirmation }) => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-24 bg-indigo-100 rounded-full mx-auto flex items-center justify-center"
        >
          <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </motion.div>
        
        <motion.h2
          className="text-3xl font-bold text-gray-800 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Appointment Request Sent!
        </motion.h2>
        
        <motion.p
          className="text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Thank you for your interest in consulting with Dr. Rajdeb Saha. We'll review your request and contact you shortly to confirm your appointment.
        </motion.p>
        
        <motion.button
          className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowConfirmation(false)}
        >
          Schedule Another Appointment
        </motion.button>
        
        </motion.div>
        </motion.div>
  )
}

export default Contact;