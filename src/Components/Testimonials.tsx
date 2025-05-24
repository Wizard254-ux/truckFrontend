import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const testimonials = [
    {
      id: 0,
      name: "Mike taylor",
      position: "Lahore, Pakistan",
      text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 1,
      name: "Chris Thomas",
      position: "CEO of Red Button",
      text: "Amazing service and great results. The team exceeded our expectations and delivered exactly what we needed for our business growth.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Director",
      text: "Professional, reliable, and innovative. Working with this team has been a game-changer for our company's digital presence.",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const handleTestimonialChange = (index:number) => {
    setSelectedTestimonial(index);
    setIsDropdownOpen(false);
  };

  return (
    <motion.div 
      className="bg-gray-50 pt-0 px-4 relative py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center md:mb-9">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              className="text-[#5E6282] text-sm font-medium tracking-wide uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              TESTIMONIALS
            </motion.p>
            <motion.h2
              className="md:text-[50px] text-[28px] font-bold text-[#14183E] leading-[100%] tracking-normal mb-8"
              style={{ fontFamily: 'Volkhov, serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              What People Say About Us.
            </motion.h2>

            {/* Dots Navigation */}
            <motion.div 
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    selectedTestimonial === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main Testimonial Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 relative z-10"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedTestimonial}
                    src={testimonials[selectedTestimonial].avatar}
                    alt={testimonials[selectedTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={selectedTestimonial}
                      className="text-[#5E6282] leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      "{testimonials[selectedTestimonial].text}"
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Dropdown for testimonial selection */}
            <div className="mt-6 relative">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedTestimonial}
                      src={testimonials[selectedTestimonial].avatar}
                      alt={testimonials[selectedTestimonial].name}
                      className="w-8 h-8 rounded-full object-cover"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  </AnimatePresence>
                  <div className="text-left">
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={`${selectedTestimonial}-name`}
                        className="font-semibold text-[#5E6282]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonials[selectedTestimonial].name}
                      </motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={`${selectedTestimonial}-position`}
                        className="text-sm text-[#5E6282"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                      >
                        {testimonials[selectedTestimonial].position}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleTestimonialChange(index)}
                        className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        whileHover={{ backgroundColor: "rgb(249 250 251)", x: 5 }}
                      >
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="text-left">
                          <p className="font-semibold text-[#5E6282]">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-[#5E6282]">
                            {testimonial.position}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-50 via-yellow-30 to-transparent rounded-tr-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.div>
  );
}