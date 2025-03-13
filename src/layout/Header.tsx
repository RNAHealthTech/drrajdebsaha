
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import AppointmentModal from "./AppointmentModal";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { 
            name: 'Services', 
            path: '/services',
            hasSubmenu: true,
            submenuItems: [
                { name: 'AKI (Acute Kidney Injury)', path: '/services/aki' },
                { name: 'CKD (Chronic Kidney Disease)', path: '/services/ckd' },
                { name: 'Glomerulonephritis', path: '/services/glomerulonephritis' },
                { name: 'Electrolyte Imbalance', path: '/services/electrolyte-imbalance' },
                { name: 'Diabetic Kidney Disease', path: '/services/diabetic-kidney-disease' },
                { name: 'Hypertension', path: '/services/hypertension' },
                { name: 'Kidney Transplant', path: '/services/kidney-transplant' },
                { name: 'Interventional Procedures', path: '/services/interventional-procedures' }
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' }
    ];

    const submenuVariants = {
        hidden: { opacity: 0, y: -5, height: 0 },
        visible: { opacity: 1, y: 0, height: 'auto', transition: { duration: 0.3 } }
    };

    return (
        <motion.header
            className={`fixed w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-blue-900 bg-opacity-95 backdrop-blur-sm shadow-lg text-white py-3' 
                    : 'bg-gradient-to-b from-blue-900/80 to-blue-900/40 backdrop-blur-sm py-4'
            }`}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/">
                            <div className={`font-bold text-2xl transition-all duration-500 ${
                                isScrolled ? 'text-white' : 'text-white'
                            }`}>
                                Dr. Rajdeb Saha
                            </div>
                            <div className={`text-sm transition-all duration-500 ${
                                isScrolled ? 'text-gray-100' : 'text-blue-100'
                            }`}>
                                Associate Consultant, Nephrology
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                {item.hasSubmenu ? (
                                    <div 
                                        className="flex items-center cursor-pointer"
                                        onMouseEnter={() => setIsServicesMenuOpen(true)}
                                        onMouseLeave={() => setIsServicesMenuOpen(false)}
                                    >
                                        <span className={`font-medium transition-all duration-500 ${
                                            isScrolled 
                                                ? 'text-gray-100 hover:text-gray-500' 
                                                : 'text-white hover:text-blue-200'
                                        }`}>
                                            {item.name}
                                        </span>
                                        <ChevronDown className={`ml-1 w-4 h-4 transition-all duration-500 ${
                                            isScrolled ? 'text-gray-100' : 'text-white'
                                        }`} />
                                        
                                        {/* Services Submenu */}
                                        <AnimatePresence>
                                            {isServicesMenuOpen && (
                                                <motion.div 
                                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-xl py-2 z-50 border border-blue-100"
                                                    variants={submenuVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                >
                                                    {item.submenuItems?.map((subItem, subIndex) => (
                                                        <Link 
                                                            key={subIndex}
                                                            to={subItem.path}
                                                            className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link 
                                        to={item.path}
                                        className={`font-medium transition-all duration-500 border-b-2 ${
                                            isScrolled 
                                                ? 'text-gray-100 hover:text-blue-600 border-transparent hover:border-blue-600' 
                                                : 'text-white hover:text-blue-200 border-transparent hover:border-blue-200'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link 
                            to="#"
                            onClick={openModal}
                            className={`px-4 py-2 rounded-md font-medium transition-all duration-500 ${
                                isScrolled 
                                    ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-md' 
                                    : 'bg-white text-blue-800 hover:bg-blue-100 hover:text-blue-700'
                            }`}
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-full transition-all duration-500 ${
                                isScrolled 
                                    ? 'text-gray-100 hover:bg-blue-100' 
                                    : 'text-white hover:bg-blue-800/20'
                            }`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? 
                                <X className="w-6 h-6" /> : 
                                <Menu className="w-6 h-6" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="px-5 py-4">
                            {navItems.map((item, index) => (
                                <div key={index} className="py-2 border-b border-gray-100 last:border-0">
                                    {item.hasSubmenu ? (
                                        <div>
                                            <button
                                                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                                                className="flex items-center justify-between w-full text-left font-medium text-blue-800 py-2"
                                            >
                                                {item.name}
                                                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                                                    isServicesMenuOpen ? 'transform rotate-180' : ''
                                                }`} />
                                            </button>
                                            
                                            <AnimatePresence>
                                                {isServicesMenuOpen && (
                                                    <motion.div
                                                        className="mt-1 ml-4 space-y-1 bg-blue-50 rounded-md p-3"
                                                        variants={submenuVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="hidden"
                                                    >
                                                        {item.submenuItems?.map((subItem, subIndex) => (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.path}
                                                                className="block py-2 px-3 text-sm rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className="block font-medium text-blue-800 hover:text-blue-600 transition-colors duration-200 py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="mt-4 pt-4">
                                <Link
                                    to="#"
                                    className="block w-full text-center py-3 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-200 shadow-md"
                                    onClick={openModal}
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
        </motion.header>
    );
};

export default Header;