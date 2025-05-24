import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Brain } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bgColor, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex items-start gap-3 sm:gap-4 mt-4 sm:mt-6"
      variants={cardVariants}
    >
      <motion.div 
        className={`p-3 sm:p-4 rounded-lg ${bgColor} flex-shrink-0`}
        variants={iconVariants}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6">
          {React.cloneElement(icon as React.ReactElement, { 
            // size: 24, // Fixed size instead of dynamic sizing
            // className: "text-white w-full h-full"
          })}
        </div>
      </motion.div>
      <motion.div 
        className="flex-1 min-w-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
      >
        <motion.h3 
          className="font-semibold text-sm sm:text-base lg:text-lg text-[#5E6282] mb-1 sm:mb-2" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-[#5E6282] text-xs sm:text-sm lg:text-base leading-relaxed" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const leftSideVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightSideVariants = {
    hidden: { 
      opacity: 0, 
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const phoneVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const decorativeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: {
        duration: 1,
        delay: 1
      }
    }
  };

  const serviceCardsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  return (
    <motion.div 
      className="w-full bg-white py-8 sm:py-12 lg:py-16 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="mb-6 sm:mb-8 block md:hidden"
            variants={titleVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#14183E] mb-4 leading-tight" 
                style={{ fontFamily: 'Volkhov, serif' }}>
              Track Your Trucks<br />Rides With Our App
            </h2>
          </motion.div>

          {/* Left side - Phone mockups */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 bg-[rgba(0,0,0,0.05)] p-2 sm:p-3 rounded-md"
            variants={leftSideVariants}
          >
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-full opacity-20 blur-xl -z-10"></div>
              <motion.img 
                src="/phoneTruck.png" 
                alt="Phone mockups showing truck tracking app" 
                className="relative z-10 w-full max-w-[20rem] sm:max-w-[25rem] lg:max-w-[30rem] h-auto"
                variants={phoneVariants}
              />
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-8 xl:pl-12"
            variants={rightSideVariants}
          >
            <motion.div 
              className="mb-6 sm:mb-8 hidden md:block"
              variants={titleVariants}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] lg:mt-6 font-bold text-navy-900 mb-4 leading-tight" 
                  style={{ fontFamily: 'Volkhov, serif' }}>
                Track Your Trucks<br />Rides With Our App
              </h2>
            </motion.div>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={serviceCardsVariants}
            >
              <ServiceCard 
                icon={<MapPin className="text-white" />}
                title="Sign Up & Start Tracking"
                description="Register your account and instantly connect your trucks to our platform. Get real-time location updates and comprehensive fleet visibility in one dashboard."
                bgColor="bg-yellow-400"
                index={0}
              />
              
              <ServiceCard 
                icon={<Brain className="text-white" />}
                title="AI-Powered Route Optimization"
                description="Our advanced AI analyzes traffic patterns, fuel costs, and delivery schedules to find the most efficient routes, helping you save time and money on every trip."
                bgColor="bg-red-500"
                index={1}
              />
              
              <ServiceCard 
                icon={<Truck className="text-white" />}
                title="Smart Financial Management"
                description="Track expenses, manage budgets, and process payments directly through the app. Get insights into fuel costs, maintenance schedules, and profit margins."
                bgColor="bg-teal-600"
                index={2}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute right-0 bottom-0 opacity-20 hidden lg:block"
        variants={decorativeVariants}
      >
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <motion.div 
              key={i} 
              className={`w-6 h-6 ${Math.random() > 0.5 ? 'text-indigo-200' : 'text-transparent'}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: Math.random() > 0.5 ? 0.3 : 0
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
            >
              +
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;