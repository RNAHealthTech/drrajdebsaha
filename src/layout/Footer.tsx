import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone, Mail, Calendar, Instagram, Linkedin, Twitter } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* About Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Dr. Rajdeb Saha</h3>
                        <p className="mb-2">Consultant</p>
                        <p className="mb-4">Nephrologist and Kidney Transplantation</p>
                    </div>

                    {/* Conditions Treated Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Conditions Treated</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services/aki" className="hover:text-blue-300 transition-colors">
                                    Acute Kidney Injury (AKI)
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/ckd" className="hover:text-blue-300 transition-colors">
                                    Chronic Kidney Disease (CKD)
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/glomerulonephritis" className="hover:text-blue-300 transition-colors">
                                    Glomerulonephritis
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/electrolyte-imbalance" className="hover:text-blue-300 transition-colors">
                                    Electrolyte Imbalance
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/diabetic-kidney-disease" className="hover:text-blue-300 transition-colors">
                                    Diabetic Kidney Disease
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/hypertension" className="hover:text-blue-300 transition-colors">
                                    Hypertension
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Procedures Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Procedures Performed</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="hover:text-blue-300 transition-colors">
                                    Kidney Biopsy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-300 transition-colors">
                                    Permcath Insertion
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-300 transition-colors">
                                    AV Fistula
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-300 transition-colors">
                                    Fistuloplasty
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-blue-300 transition-colors">
                                    PD Catheter Insertion
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Key Services Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Key Services</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-2">Kidney Transplant</h4>
                                <ul className="ml-4 space-y-1">
                                    <li>
                                        <Link to="/kidney-doctor-in-siliguri" className="text-white hover:text-blue-300 transition-colors duration-200">
                                            Siliguri
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="font-medium mb-2">Kidney Care</h4>
                                <ul className="ml-4 space-y-1">
                                    <li>
                                        <Link to="/kidney-doctor-in-siliguri" className="text-white hover:text-blue-300 transition-colors duration-200">
                                            Siliguri
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-sm">Private OPD Hours</p>
                                    <p className="text-sm">Mon - Sat: 6 pm - 8 pm</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-sm">Location</p>
                                    <p className="text-sm">Room No: 1236</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-sm">Email</p>
                                    <a href="mailto:rajdeb@live.com" className="hover:text-blue-300 transition-colors text-sm">
                                        rajdeb@live.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div>
                                    <button
                                        onClick={openModal}
                                        className="px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-100 transition-colors inline-block mt-2 text-sm">
                                        Book Appointment
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />


            {/* Languages Section */}
            <div className="border-t border-blue-700 py-6">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="md:flex md:justify-between md:items-center">
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-medium mb-2">Languages Spoken</h4>
                            <p>English, Hindi, Bengali, Marathi, Nepali, Kannada</p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Specialization</h4>
                            <p>Interventional Nephrology, Kidney Transplant, Diabetic Kidney Disease</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-blue-950 py-4">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="md:flex md:justify-between md:items-center text-sm">
                        <p>&copy; {currentYear} Dr. Rajdeb Saha. All rights reserved.</p>
                        <div className="mt-2 md:mt-0">
                            <p className="mr-4 hover:text-blue-300 transition-colors">
                                website by
                                <a href="https://rnahealthtech.com">
                                    {' '} RNA HealthTech
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;