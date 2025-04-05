import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import AppointmentModal from "../layout/AppointmentModal";
import DoctorIntroduction from "../layout/DoctorIntroduction";
import ServicesSection from "../layout/ServicesSection";
import CTASection from "../layout/CTASection";
import ImageCarousel from "../layout/ImageCarousel";

const HeroSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('/images/bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/10"></div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-200 opacity-5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200 opacity-5 rounded-tr-full"></div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-5 pt-32 pb-20 md:pt-40 md:pb-32 mt-6 md:mt-12 relative z-10 text-center">
                <motion.div
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <motion.h2
                        className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                        variants={itemVariants}
                    >
                        Advanced Kidney Care & Nephrology Treatment
                    </motion.h2>
                    <motion.h1
                        className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                        variants={itemVariants}
                    >
                        Dr. Rajdeb Saha <span className="text-2xl md:text-3xl font-medium">MD, DM (Nephrology)</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-100 mb-8 mx-auto max-w-2xl drop-shadow-lg"
                        style={{ textShadow: "0 2px 3px rgba(0,0,0,0.4)" }}
                        variants={itemVariants}
                    >
                        Board-certified nephrologist offering cutting-edge interventional procedures and evidence-based kidney treatments for patients of all ages.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={itemVariants}
                    >
                        <Link
                            onClick={openModal}
                            to="#"
                            className="px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all text-center font-medium hover:scale-105 shadow-lg">
                            Schedule Your Kidney Consultation
                        </Link>
                    </motion.div>
                </motion.div>
                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <DoctorIntroduction />
            <ServicesSection />
            <CTASection />
            <div className="max-w-7xl mx-auto mt-20 mb-10">
                <ImageCarousel />
            </div>
        </>
    )
}

export default Home;