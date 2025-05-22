import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Travel Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it.",
      iconPlaceholder: "/weather.png"
    },
    {
      id: 2,
      title: "Personalized Support",
      description: "Engrossed listening. Park gate sell they west hard use for the.",
      iconPlaceholder: "/support1.png"
    },
    {
      id: 3,
      title: "Track Fuel Consumption",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      iconPlaceholder: "/fuel.png"
    },
    {
      id: 4,
      title: "Route Optimization",
      description: "We deliver outsourced aviation services for military customers.",
      iconPlaceholder: "/routes.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm font-medium mb-2 tracking-wide">
            Route Tracking
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="relative bg-white flex justify-center items-center flex-col rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Orange decorative element for first and last items */}
              {(index === 0 || index === 3) && (
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400 rounded-tl-3xl rounded-br-2xl opacity-80"></div>
              )}
              
              {/* Icon placeholder */}
              <div className="mb-6">
                <div className="w-24 h-24  rounded-lg flex items-center justify-center">
                    <img src= {service.iconPlaceholder} alt="" className='w-full h-full'/>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative dots */}
        <div className="flex justify-center mt-16 space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;