
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex flex-col lg:flex-row items-end justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 z-10">
            <div className="text-orange-500 font-bold mb-1 text-sm sm:text-xl tracking-wide">
              BEST ROUTING PARTNER FOR TRUCK DRIVERS
            </div>
            
            <div className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight flex flex-col space-y-0">
              <div className="relative inline-block">
                <span style={{fontFamily: 'Volkhov, serif'}}>Drive,</span>
                <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-3/6 h-2 sm:h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <div className="relative inline-block ml-3 sm:ml-6 lg:ml-12">
                <span style={{fontFamily: 'Volkhov, serif'}}>Track</span>
                <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-3/5 h-2 sm:h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <div className="relative inline-block ml-6 sm:ml-12 lg:ml-24">
                <span style={{fontFamily: 'Volkhov, serif'}}>Thrive</span>
                <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-3/4 h-2 sm:h-3 bg-yellow-500 rounded-sm"></div>
              </div>
            </div>
            
            <p className="text-gray-600 my-4 sm:my-8 text-sm sm:text-lg max-w-xl">
              Transform your trucking business with AI-powered route optimization, real-time tracking, and smart financial management. Save fuel, reduce costs, and maximize profits with our all-in-one platform designed for modern truck drivers.
            </p>
            
            <div className="flex flex-col sm:flex-row ">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors shadow-lg text-sm sm:text-base">
                Find out more
              </button>
            </div>
          </div>
          
          {/* Right Content - Map visualization with truck */}
          <div className="flex-1 lg:w-1/2 relative mt-18">
            <div className='relative'>
              <img src="/rock.png" className="w-full" alt="Map background" />
              <div className='absolute top-0 left-1/2 transform -translate-x-1/5 -translate-y-10/18 z-10'>
                <img 
                  src="/truck.png" 
                  className='w-[10rem] h-[12rem] sm:w-[16rem] sm:h-[19rem] transform rotate-0 scale-x-[2.4]' 
                  alt="Truck" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;