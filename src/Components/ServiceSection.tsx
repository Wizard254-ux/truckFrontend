
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

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 tracking-wide">
            Smart Fleet Management
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4" 
              style={{ fontFamily: 'Volkhov, serif' }}>
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="relative bg-white flex justify-center items-center flex-col rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Orange decorative element for first and last items */}
              {(index === 0 || index === 3) && (
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-orange-400 rounded-tl-2xl sm:rounded-tl-3xl rounded-br-xl sm:rounded-br-2xl opacity-80"></div>
              )}
              
              {/* Icon placeholder */}
              <div className="mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg flex items-center justify-center">
                    <img src={service.iconPlaceholder} alt="" className='w-full h-full object-contain'/>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 text-center">
                <h3 style={{ fontFamily: 'Poppins, sans-serif' }} 
                    className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', width: '28ch' }} 
                   
                   className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative dots */}
        <div className="flex justify-center mt-12 sm:mt-16 space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;