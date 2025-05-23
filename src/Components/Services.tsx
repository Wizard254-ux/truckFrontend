import React from 'react';
import { Truck, MapPin, Brain } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 mt-4 sm:mt-6">
      <div className={`p-3 sm:p-4 rounded-lg ${bgColor} flex-shrink-0`}>
        <div className="w-5 h-5 sm:w-6 sm:h-6">
          {React.cloneElement(icon as React.ReactElement, { 
            size: typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 24,
            className: "text-white"
          })}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-navy-900 mb-1 sm:mb-2" 
            style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed" 
           style={{ fontFamily: 'Poppins, sans-serif' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center">
           <div className="mb-6 sm:mb-8 block md:hidden">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-navy-900 mb-4 leading-tight" 
                  style={{ fontFamily: 'Volkhov, serif' }}>
                Track Your Trucks<br />Rides With Our App
              </h2>
            </div>
          {/* Left side - Phone mockups */}
          <div className="w-full lg:w-1/2 mb-8 sm:mb-10 lg:mb-0 bg-[rgba(0,0,0,0.05)] p-2 sm:p-3 rounded-md">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 rounded-full opacity-20 blur-xl -z-10"></div>
              <img 
                src="/phoneTruck.png" 
                alt="Phone mockups showing truck tracking app" 
                className="relative z-10 w-full max-w-[20rem] sm:max-w-[25rem] lg:max-w-[30rem] h-auto"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-12">
            <div className="mb-6 sm:mb-8 hidden md:block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] lg:mt-6  font-bold text-navy-900 mb-4 leading-tight" 
                  style={{ fontFamily: 'Volkhov, serif' }}>
                Track Your Trucks<br />Rides With Our App
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <ServiceCard 
                icon={<MapPin className="text-white" />}
                title="Sign Up & Start Tracking"
                description="Register your account and instantly connect your trucks to our platform. Get real-time location updates and comprehensive fleet visibility in one dashboard."
                bgColor="bg-yellow-400"
              />
              
              <ServiceCard 
                icon={<Brain className="text-white" />}
                title="AI-Powered Route Optimization"
                description="Our advanced AI analyzes traffic patterns, fuel costs, and delivery schedules to find the most efficient routes, helping you save time and money on every trip."
                bgColor="bg-red-500"
              />
              
              <ServiceCard 
                icon={<Truck className="text-white" />}
                title="Smart Financial Management"
                description="Track expenses, manage budgets, and process payments directly through the app. Get insights into fuel costs, maintenance schedules, and profit margins."
                bgColor="bg-teal-600"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 opacity-20 hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i} 
              className={`w-6 h-6 ${Math.random() > 0.5 ? 'text-indigo-200' : 'text-transparent'}`}
            >
              +
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;