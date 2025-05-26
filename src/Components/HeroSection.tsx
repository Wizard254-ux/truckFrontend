import { motion } from 'framer-motion';
import { ChevronDown, Smartphone } from 'lucide-react';
import { useState } from 'react';

const HeroSection = ({ handleTabChange }: { handleTabChange: (tab: 'about') => void }) => {
    const [showDropdown, setShowDropdown] = useState(false);

  // Animation variants
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

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const truckVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      rotate: -10 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      className="relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex flex-col lg:flex-row items-end justify-between">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0 z-10"
            variants={leftContentVariants}
          >
            <motion.div 
              className="text-[#D98B1C] font-bold mb-1 text-sm sm:text-xl tracking-wide"
              variants={titleWordVariants}
            >
              BEST ROUTING PARTNER FOR TRUCK DRIVERS
            </motion.div>
            
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#181E4B] leading-tight flex flex-col space-y-0">
              <motion.div 
                className="relative inline-block"
                variants={titleWordVariants}
              >
                <span style={{fontFamily: 'Volkhov, serif'}}>Drive,</span>
                <motion.img
                  src="/driveLine.png"
                    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
                  className="absolute -bottom-1 sm:-bottom-3 left-0 w-3/6 h-2 sm:h-3 rounded-sm origin-left"
                  variants={underlineVariants}
                />
              </motion.div>
              
              <motion.div 
                className="relative inline-block ml-3 sm:ml-6 lg:ml-12"
                variants={titleWordVariants}
              >
                <span style={{fontFamily: 'Volkhov, serif'}}>Track</span>
                <motion.img 
                  src="/trackLine.png"
                    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
                  className="absolute -bottom-1 sm:bottom-1 left-0 w-3/5 h-2 sm:h-3  rounded-sm origin-left"
                  variants={underlineVariants}
                />
              </motion.div>
              
              <motion.div 
                className="relative inline-block ml-6 sm:ml-12 lg:ml-24"
                variants={titleWordVariants}
              >
                <span style={{fontFamily: 'Volkhov, serif'}}>Thrive</span>
                <motion.img 
                  src="/thriveLine.png"
                    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
                  className="absolute bottom-1 sm:bottom-3 left-0 w-3/4 h-2 sm:h-3  rounded-sm origin-left"
                  variants={underlineVariants}
                />
              </motion.div>
            </div>
            
            <motion.p 
              className="text-gray-600 my-4 sm:my-8 text-sm sm:text-lg max-w-xl"
              variants={titleWordVariants}
            >
              Transform your trucking business with AI-powered route optimization, real-time tracking, and smart financial management. Save fuel, reduce costs, and maximize profits with our all-in-one platform designed for modern truck drivers.
            </motion.p>
            
          <motion.div 
      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      variants={titleWordVariants}
    >
      <motion.button 
        onClick={() => handleTabChange('about')}  
        className="px-6 sm:px-8 py-3 sm:py-4 bg-[#D98B1C] text-white font-medium rounded-md hover:bg-yellow-600 transition-colors shadow-lg text-sm sm:text-base"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Find out more
      </motion.button>

      <div className="relative">
        <motion.button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#181E4B] text-white font-medium rounded-md hover:bg-[#1a2254] transition-colors shadow-lg text-sm sm:text-base flex items-center gap-2"
          variants={buttonVariants}
          whileHover="hover"
          // whileTap="tap"
        >
          <Smartphone className="w-4 h-4" />
          Get App
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
        </motion.button>

        {/* Dropdown */}
        {showDropdown && (
          <motion.div 
            className="absolute bottom-13  left-43 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-[7000000]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-2">
              <button 
                onClick={() => {
                  // Handle Play Store click
                  console.log('Opening Play Store');
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Play Store</div>
                  <div className="text-xs text-gray-500">Download for Android</div>
                </div>
              </button>

              <button 
                onClick={() => {
                  // Handle App Store click
                  console.log('Opening App Store');
                  setShowDropdown(false);
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">App Store</div>
                  <div className="text-xs text-gray-500">Download for iOS</div>
                </div>
              </button>
            </div>
          </motion.div>
        )}

        {/* Overlay to close dropdown when clicking outside
        {showDropdown && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowDropdown(false)}
          />
        )} */}
      </div>
    </motion.div>
          </motion.div>
          
          {/* Right Content - Map visualization with truck */}
          <motion.div 
            className="flex-1 lg:w-1/2 relative mt-18"
            variants={rightContentVariants}
          >
            <div className='relative'>
              <motion.img 
                src="/rock.png" 
                className="w-full" 
                alt="Map background"
                variants={mapVariants}
              />
              <motion.div 
                className='absolute top-0 left-1/2 transform -translate-x-1/5 -translate-y-10/18 z-10'
                variants={truckVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src="/truck.png" 
                  className='w-[10rem] h-[12rem] sm:w-[16rem] sm:h-[19rem] transform rotate-0 scale-x-[2.4]' 
                  alt="Truck"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;