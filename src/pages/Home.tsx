import React, {useState} from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import AppointmentModal from "../layout/AppointmentModal";
import DoctorIntroduction from "../layout/DoctorIntroduction";


const HeroSection: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat" 
             style={{ 
                backgroundImage: `url('/images/bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'

              }}>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/40"></div>

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
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                            Expert Kidney Care with Dr. Raj Deb Saha
                        </h1>
                        <p className="text-lg text-gray-100 mb-8 max-w-xl">
                            Specialized nephrology care focusing on personalized treatment plans and cutting-edge interventional procedures.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                onClick={openModal}
                                to="#"
                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium">
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                    <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

                    {/* Interactive 3D Card */}

                </div>
            </div>
        </div>
    );
};


const Home: React.FC = () => {

    return (
        <>
        <HeroSection />
        <DoctorIntroduction />
        </>
    )
}

export default Home;