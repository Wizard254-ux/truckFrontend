import { motion } from 'framer-motion';

export default function FinancialServicesSection() {
  const services = [
    {
      id: 1,
      title: "AI-Powered Financial Planning",
      description: "Our advanced AI analyzes your trucking revenue patterns, seasonal trends, and operational costs to create comprehensive yearly financial plans that maximize your profitability and growth potential.",
      iconPlaceholder: "/plan.png"
    },
    {
      id: 2,
      title: "Smart Budget Generation",
      description: "Automatically generate detailed budgets based on your truck's fuel consumption, maintenance schedules, insurance costs, and route profitability. Stay within budget and optimize spending across all business areas.",
      iconPlaceholder: "/budget.png"
    },
    {
      id: 3,
      title: "Real-Time Expense Tracking",
      description: "Track every dollar spent on fuel, tolls, repairs, and permits in real-time. Get instant insights into your cost per mile, profit margins, and identify areas where you can reduce expenses.",
      iconPlaceholder: "/expense.png"
    }
  ];

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
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -90
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const decorativeVariants = {
    hidden: { 
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 0.1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="py-8 sm:py-12 lg:py-8 px-3 sm:px-4 lg:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mt-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-5 sm:mb-12 lg:mb-8"
          variants={headerVariants}
        >
          <motion.p 
            className="text-[#5E6282] text-xs sm:text-sm font-medium tracking-wide uppercase mb-2 sm:mb-4"
            variants={headerVariants}
          >
            Financially Thriving
          </motion.p>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#14183E]" 
            style={{fontFamily: 'Volkhov, serif'}}
            variants={headerVariants}
          >
            Financial Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
          variants={gridVariants}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="text-center bg-gray-50 p-4"
              variants={cardVariants}
            >
              {/* Icon Placeholder */}
              <motion.div 
                className="flex justify-center mb-4 sm:mb-6"
                variants={iconVariants}
              >
                <div className="bg-orange-50 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
                  <img 
                    src={`${service.iconPlaceholder}`} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
              
              {/* Title */}
              <motion.h3 
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#181E4B] mb-2 sm:mb-4 px-2" 
                style={{fontFamily: 'Volkhov, serif'}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {service.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  width: '100%',
                  maxWidth: '45ch',
                  margin: '0 auto',
                }} 
                className="text-[#5E6282] leading-relaxed text-xs sm:text-sm lg:text-[14px] px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative element on the right */}
        <div className="relative mt-0 sm:mt-12">
          <motion.div 
            className="absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-32 sm:h-48 lg:h-64 opacity-10 hidden sm:block"
            variants={decorativeVariants}
          >
            <div className="w-full h-full bg-gradient-to-b from-orange-200 to-orange-100 rounded-l-full"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}