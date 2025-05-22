import React from 'react';
import { Truck, MapPin, CreditCard } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, bgColor }) => {
  return (
    <div className="flex items-start gap-4 mt-6">
      <div className={`p-4 rounded-lg ${bgColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg text-navy-900">{title}</h3>
        <p className="text-gray-600 mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 ">
      <div className=" mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Phone mockups */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 bg-[rgba(0,0,0,0.05)] p-3 rounded-md">
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-20 blur-xl -z-10"></div>
              <img 
                src="/phoneTruck.png" 
                alt="Phone mockups showing truck tracking app" 
                className="relative z-10 max-w-full"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                Track Your Trucks<br />Rides With Our App
              </h2>
            </div>
            
            <div className="space-y-6">
              <ServiceCard 
                icon={<MapPin size={24} className="text-white" />}
                title="Sign Up | Register"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                bgColor="bg-yellow-400"
              />
              
              <ServiceCard 
                icon={<CreditCard size={24} className="text-white" />}
                title="Make Payment"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                bgColor="bg-red-500"
              />
              
              <ServiceCard 
                icon={<Truck size={24} className="text-white" />}
                title="Lets help you from Routes to Budgets"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                bgColor="bg-teal-600"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute right-0 bottom-0 opacity-20">
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