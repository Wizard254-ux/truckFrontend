import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Real-Time Weather Updates",
      description: "Get live weather conditions along your routes to plan safer trips and avoid hazardous driving conditions.",
      iconPlaceholder: "/weather.png"
    },
    {
      id: 2,
      title: "AI Route Intelligence",
      description: "Advanced machine learning algorithms optimize your routes by analyzing traffic patterns, road conditions, and fuel efficiency.",
      iconPlaceholder: "/ai2.png"
    },
    {
      id: 3,
      title: "Smart Fuel Tracking",
      description: "Get fuel station locations in real-time, track expenses, and receive insights to reduce costs and improve efficiency.",
      iconPlaceholder: "/fuel.png"
    },
    {
      id: 4,
      title: "Dynamic Route Optimization",
      description: "Automatically calculate the most efficient routes considering traffic, delivery schedules, and vehicle specifications.",
      iconPlaceholder: "/routes.png"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const decorativeVariants = {
    hidden: { 
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const dotsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
        >
          <motion.p 
            className="text-[#5E6282] text-xs sm:text-sm font-medium mb-2 tracking-wide"
            variants={headerVariants}
          >
            Smart Fleet Management
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14183E] px-4" 
            style={{ fontFamily: 'Volkhov, serif' }}
            variants={headerVariants}
          >
            We Offer Best Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={gridVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="relative bg-white flex justify-center items-center flex-col rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm transition-shadow duration-300"
              variants={cardVariants}
            >
              {/* Orange decorative element for first and last items */}
              {(index === 0 || index === 3) && (
                <motion.div 
                  className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#D98B1C] rounded-tl-2xl sm:rounded-tl-3xl rounded-br-xl sm:rounded-br-2xl opacity-80"
                  variants={decorativeVariants}
                />
              )}
              
              {/* Icon placeholder */}
              <motion.div 
                className="mb-4 sm:mb-6"
                variants={iconVariants}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center">
                  <img src={service.iconPlaceholder} alt="" className='w-full h-full object-contain'/>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="space-y-3 sm:space-y-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.h3 
                  style={{ fontFamily: 'Poppins, sans-serif' }} 
                  className="text-base sm:text-lg lg:text-xl font-semibold text-[#1E1D4C] leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  style={{ fontFamily: 'Poppins, sans-serif', width: '28ch' }} 
                  className="text-[#5E6282] text-xs sm:text-sm leading-relaxed px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative dots */}
        <motion.div 
          className="flex justify-center mt-12 sm:mt-16 space-x-2"
          variants={dotsVariants}
        >
          <motion.div 
            className="w-2 h-2 bg-[#D98B1C] rounded-full"
            variants={dotVariants}
          />
          <motion.div 
            className="w-2 h-2 bg-gray-300 rounded-full"
            variants={dotVariants}
          />
          <motion.div 
            className="w-2 h-2 bg-gray-300 rounded-full"
            variants={dotVariants}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;