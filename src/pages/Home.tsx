import React, {useState} from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import AppointmentModal from "../layout/AppointmentModal";


const HeroSection: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-500 opacity-5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 opacity-5 rounded-tr-full"></div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-5 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-blue-900 leading-tight mb-6">
                            Expert Kidney Care with Dr. Raj Deb Saha
                        </h1>
                        <p className="text-lg text-gray-700 mb-8 max-w-xl">
                            Specialized nephrology care focusing on personalized treatment plans and cutting-edge interventional procedures.
                        </p>



                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                onClick={openModal}
                                to="#"
                                className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors text-center font-medium">
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                    <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

                    {/* Interactive 3D Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto lg:mx-0 lg:ml-auto"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Main Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-20 border-t border-l border-gray-100">
                                <div className="text-center mb-6">
                                    <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        {/* <span className="text-3xl font-bold text-blue-700">RDS</span> */}
                                        <img src="/images/doc.png" className="w-30 h-30" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">Dr. Raj Deb Saha</h2>
                                    <p className="text-blue-600">Associate Consultant, Nephrology</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-blue-900 mb-2">Specialties</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Kidney Transplant</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Interventional Nephrology</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Diabetic Kidney Disease</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-blue-900 mb-2">Education</h3>
                                        <p className="text-sm text-gray-700">DM (Nephrology) - KMC, Manipal</p>
                                        <p className="text-sm text-gray-700">Interventional Nephrology Fellowship (ISN)</p>
                                    </div>

                                    <Link to="/about" className="block text-center text-blue-600 hover:text-blue-800 font-medium">
                                        View Full Profile →
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 left-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
                            <div className="absolute top-8 left-8 w-full h-full bg-blue-100 rounded-2xl -z-20"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Feature Bar */}
            <motion.div
                className="bg-white shadow-lg rounded-xl max-w-5xl mx-auto relative -mt-12 z-20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Expert Care</h3>
                        <p className="text-gray-600">Specialized treatment for all kidney-related conditions</p>
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Advanced Procedures</h3>
                        <p className="text-gray-600">Cutting-edge interventional nephrology techniques</p>
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">Personal Approach</h3>
                        <p className="text-gray-600">Individualized treatment plans for every patient</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const Home: React.FC = () => {

    return (
        <HeroSection />
    )
}

export default Home;