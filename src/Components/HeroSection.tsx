import { motion } from 'framer-motion';

const HeroSection = ({ handleTabChange }: { handleTabChange: (tab: 'about') => void }) => {
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
              className="text-orange-500 font-bold mb-1 text-sm sm:text-xl tracking-wide"
              variants={titleWordVariants}
            >
              BEST ROUTING PARTNER FOR TRUCK DRIVERS
            </motion.div>
            
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight flex flex-col space-y-0">
              <motion.div 
                className="relative inline-block"
                variants={titleWordVariants}
              >
                <span style={{fontFamily: 'Volkhov, serif'}}>Drive,</span>
                <motion.div 
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-3/6 h-2 sm:h-3 bg-yellow-500 rounded-sm origin-left"
                  variants={underlineVariants}
                />
              </motion.div>
              
              <motion.div 
                className="relative inline-block ml-3 sm:ml-6 lg:ml-12"
                variants={titleWordVariants}
              >
                <span style={{fontFamily: 'Volkhov, serif'}}>Track</span>
                <motion.div 
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-3/5 h-2 sm:h-3 bg-yellow-500 rounded-sm origin-left"
                  variants={underlineVariants}
                />
              </motion.div>
              
              <motion.div 
                className="relative inline-block ml-6 sm:ml-12 lg:ml-24"
                variants={titleWordVariants}
              >
                <span style={{fontFamily: 'Volkhov, serif'}}>Thrive</span>
                <motion.div 
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-3/4 h-2 sm:h-3 bg-yellow-500 rounded-sm origin-left"
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
              className="flex flex-col sm:flex-row"
              variants={titleWordVariants}
            >
              <motion.button 
                onClick={() => handleTabChange('about')}  
                className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors shadow-lg text-sm sm:text-base"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Find out more
              </motion.button>
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