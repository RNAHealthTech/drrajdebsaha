import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Mail, Calendar, MapPin, Clock, BookOpen, Languages, Stethoscope, Award, Briefcase, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const DoctorIntroduction: React.FC = () => {
    const scrollRef = useRef(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(scrollRef, { once: false, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Tilt effect for the 3D card
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * 10;
        const rotateYValue = ((centerX - x) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const messageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: any) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    const floatingBarVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.9,
                duration: 0.6
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.6,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 overflow-hidden" ref={scrollRef}>
        {/* Background Decorations - make them relative to the container with overflow hidden */}
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-blue-500 opacity-5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500 opacity-5 rounded-tr-full"></div>
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        A Personal Message From Dr. Saha
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-blue-500 mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Old-time messenger roll with doctor messages */}
                    <div className="space-y-8">
                        {/* Message 1 */}
                        <motion.div
                            className="p-6 rounded-lg shadow-md border-2 border-gray-200 max-w-lg"
                            custom={0}
                            initial="hidden"
                            animate={controls}
                            variants={messageVariants}
                          
                        >
                            <div className="flex items-start gap-4">
                                <div>
                                    <h3 className="font-serif text-xl text-blue-900 mb-2">Greetings!</h3>
                                    <p className="font-serif text-blue-800">
                                        I'm Dr. Rajdeb Saha, and I'm dedicated to providing exceptional kidney care with a personalized approach for each patient.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Message 2 */}
                        <motion.div
                            className="p-6 rounded-lg shadow-md border-2 border-gray-300 max-w-lg ml-auto"
                            custom={1}
                            initial="hidden"
                            animate={controls}
                            variants={messageVariants}
                           
                        >
                            <div className="flex items-start gap-4">
                               
                                <div>
                                    {/* <h3 className="font-serif text-xl text-blue-900 mb-2">My Philosophy</h3> */}
                                    <p className="font-serif text-blue-800">
                                        With over a decade of specialized training, I believe in combining advanced medical knowledge with compassionate care for comprehensive kidney treatment.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Message 3 */}
                        <motion.div
                            className="p-6 rounded-lg shadow-md border-2 border-gray-100 max-w-lg"
                            custom={2}
                            initial="hidden"
                            animate={controls}
                            variants={messageVariants}
                        >
                            <div className="flex items-start gap-4">
                               
                                <div>
                                    {/* <h3 className="font-serif text-xl text-blue-900 mb-2">My Commitment</h3> */}
                                    <p className="font-serif text-blue-800">
                                        I focus on interventional nephrology and kidney transplantation, ensuring you receive the most advanced care available for your kidney health needs.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Interactive 3D Card */}
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            transformStyle: 'preserve-3d'
                        }}
                        className="mx-auto lg:mx-0"
                        variants={cardVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Main Card */}
                            <div
                                className="bg-white rounded-2xl shadow-xl p-8 relative z-20 border-t border-l border-gray-100"
                                style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                            >
                                <div className="text-center mb-6">
                                    <div
                                        className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden"
                                        style={{ transform: 'translateZ(40px)' }}
                                    >
                                        <img src="/images/home.JPG" alt='doctor' className="w-full h-full object-cover" />
                                    </div>
                                    <h2
                                        className="text-2xl font-bold text-gray-900"
                                        style={{ transform: 'translateZ(30px)' }}
                                    >
                                        Dr. Rajdeb Saha
                                    </h2>
                                    <p
                                        className="text-blue-600"
                                        style={{ transform: 'translateZ(25px)' }}
                                    >
                                        Consultant Nephrologist and Kidney Transplantation
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg"
                                        style={{ transform: 'translateZ(15px)' }}
                                    >
                                        <h3 className="font-medium text-blue-900 mb-2">Specialties</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Kidney Transplant</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Interventional Nephrology</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Diabetic Kidney Disease</span>
                                        </div>
                                    </div>

                                    <div style={{ transform: 'translateZ(10px)' }}>
                                        <h3 className="font-medium text-blue-900 mb-2">Education</h3>
                                        <p className="text-sm text-gray-700">DM (Nephrology) - KMC, Manipal</p>
                                        <p className="text-sm text-gray-700">Interventional Nephrology Fellowship (ISN)</p>
                                    </div>

                                    <Link
                                        to="/about"
                                        className="block text-center text-blue-600 hover:text-blue-800 font-medium"
                                        style={{ transform: 'translateZ(25px)' }}
                                    >
                                        View Full Profile →
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div
                                className="absolute top-4 left-4 w-full h-full bg-blue-200 rounded-2xl -z-10"
                                style={{ transform: 'translateZ(10px)' }}
                            ></div>
                            <div
                                className="absolute top-8 left-8 w-full h-full bg-blue-100 rounded-2xl -z-20"
                                style={{ transform: 'translateZ(0px)' }}
                            ></div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Feature Bar - moved from hero section */}
                <motion.div
                    className="bg-white shadow-lg rounded-xl max-w-5xl mx-auto mt-16 z-20 overflow-hidden">
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
        </div>
    );
};

export default DoctorIntroduction;