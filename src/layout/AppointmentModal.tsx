import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@formspree/react';
import { Calendar, Clock, User, Phone, MessageSquare, X, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  '10:00 AM - 12:00 PM (Morning)',
  '12:00 PM - 02:00 PM (Afternoon)',
  '04:00 PM - 06:00 PM (Evening)',
  '06:00 PM - 08:00 PM (Night)',
];

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm('xqapkolz');
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    timeSlot: TIME_SLOTS[0],
    text: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          phone: '',
          date: todayStr,
          timeSlot: TIME_SLOTS[0],
          text: '',
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose, todayStr]);

  if (!isOpen) return null;

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
    sendWhatsAppMessage();
  };

  const sendWhatsAppMessage = () => {
    const message = `Hello Dr. Rajdeb,\n\nNew Appointment Request:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Preferred Date: ${formData.date}\n• Preferred Time: ${formData.timeSlot}\n• Message: ${formData.text || 'N/A'}`;

    const whatsappNumber = '919561409398';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-100 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900 font-fraunces-slab">Book Appointment</h2>
              <p className="text-sm text-gray-600 mt-1">Select your preferred date & time for consultation</p>
            </div>

            {state.succeeded ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-3 animate-bounce" />
                <h3 className="text-xl font-bold text-gray-800">Booking Submitted!</h3>
                <p className="text-gray-600 text-sm mt-2">Opening WhatsApp to confirm your appointment details...</p>
              </div>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-5 font-work-sans">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-blue-600" /> Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-blue-600" /> Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter 10-digit mobile number"
                    className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  />
                </div>

                {/* Preferred Date (Calendar) */}
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" /> Select Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" /> Select Time Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleSlotSelect(slot)}
                          className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-50 border-blue-600 text-blue-800 shadow-sm font-semibold ring-1 ring-blue-600'
                              : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
                          }`}
                        >
                          <span>{slot}</span>
                          {isSelected && <CheckCircle className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="text" className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-blue-600" /> Message / Symptoms (Optional)
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    rows={3}
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Briefly describe your symptoms or health queries..."
                    className="w-full border border-gray-300 rounded-lg p-2.5 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" /> Book Appointment
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default AppointmentModal;