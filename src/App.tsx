import { useState } from 'react';
import { Truck, Clock, Shield, Navigation2 } from 'lucide-react';
import './index.css';
import Services from './Components/Services'
import ServicesSection from './Components/ServiceSection'
import FinancialServicesSection from './Components/FinanceServices'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';


export default function TruckRoutingApp() {
  const [activeTab, setActiveTab] = useState('home');
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="mx-auto px-4 py-6 sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center  md:mb-0">
            <h1 className="text-3xl font-bold text-navy-900">GIT<span className="text-blue-900">sys.</span></h1>
            <div className="h-3 w-3 bg-yellow-500 rounded-full ml-1 mb-2"></div>
          </div>
          
         <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 ">
  <button 
    onClick={() => handleTabChange('home')}
    className={`w-[102px] h-[40px] rounded-[5px] text-sm sm:text-base transition-all border ${
      activeTab === 'home' 
        ? 'bg-gray-100 border-gray-300 font-medium' 
        : 'hover:bg-gray-50 border-transparent'
    }`}
  >
    Home
  </button>
  
  <button 
    onClick={() => handleTabChange('tracking')}
    className={`w-[102px] h-[40px] rounded-[5px] text-sm sm:text-base transition-all border ${
      activeTab === 'tracking' 
        ? 'bg-gray-100 border-gray-300 font-medium' 
        : 'hover:bg-gray-50 border-transparent'
    }`}
  >
    Tracking
  </button>

  <button 
    onClick={() => handleTabChange('about')}
    className={`w-[102px] h-[40px] rounded-[5px] text-sm sm:text-base transition-all border ${
      activeTab === 'about' 
        ? 'bg-gray-100 border-gray-300 font-medium' 
        : 'hover:bg-gray-50 border-transparent'
    }`}
  >
    About
  </button>

  <button 
    onClick={() => handleTabChange('partners')}
    className={`w-[102px] h-[40px] rounded-[5px] text-sm sm:text-base transition-all border ${
      activeTab === 'partners' 
        ? 'bg-gray-100 border-gray-300 font-medium' 
        : 'hover:bg-gray-50 border-transparent'
    }`}
  >
    Partners
  </button>

  <button 
    onClick={() => handleTabChange('budgets')}
    className={`w-[102px] h-[40px] rounded-[5px] text-sm sm:text-base transition-all border ${
      activeTab === 'budgets' 
        ? 'bg-gray-100 border-gray-300 font-medium' 
        : 'hover:bg-gray-50 border-transparent'
    }`}
  >
    Budgets
  </button>
</nav>

        </div>
      </header>
      
      {/* Main Content */}
      <main className="mx-auto">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 py-4 ">
        <div className="flex flex-col lg:flex-row items-end justify-between ">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 z-10 ">
            <div className="text-orange-500 font-bold mb-1 text-xl tracking-wide">
              BEST ROUTING PARTNER FOR TRUCK DRIVERS
            </div>
            
            <div className="text-5xl  sm:text-6xl font-bold text-navy-900 leading-tight flex flex-col space-y-6">
              <div className="relative inline-block">
                <span style={{fontFamily: 'Volkhov, serif'}}>Drive,</span>
                <div className="absolute -bottom-3 left-0 w-3/4 h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <div className="relative inline-block ml-6 sm:ml-12">
                <span style={{fontFamily: 'Volkhov, serif'}}>Track</span>
                <div className="absolute -bottom-3 left-0 w-3/4 h-3 bg-yellow-500 rounded-sm"></div>
              </div>
              <div className="relative inline-block ml-12 sm:ml-24">
                <span style={{fontFamily: 'Volkhov, serif'}}>Thrive</span>
                <div className="absolute -bottom-3 left-0 w-3/4 h-3 bg-yellow-500 rounded-sm"></div>
              </div>
            </div>
            
            <p className="text-gray-600 my-8 text-lg max-w-xl">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate
              sell they west hard for the.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors shadow-lg">
                Find out more
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
                Watch demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Map visualization instead of truck */}
        <div className="flex-1 lg:w-1/2 relative ">
  <div className='relative'>
    <img src="/rock.png" className="w-full" />
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10/18 z-10 '>
      <img src="/truck.png" className='w-[25rem] h-[25rem] transform -rotate-0' />
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Decorative background elements */}
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-600 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div> */}
    </section>

    <ServicesSection/>
    <Services/>
            
            {/* Features Section */}
            <section className="bg-gray-50 py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose GITsys?</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Our routing platform is designed specifically for truck drivers to optimize routes, save time, and increase earnings.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Feature 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Navigation2 className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Routing</h3>
                    <p className="text-gray-600">Optimize your routes with real-time traffic and road condition updates.</p>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Truck className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Truck-Specific</h3>
                    <p className="text-gray-600">Routes designed for trucks with height, weight, and restriction awareness.</p>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
                    <p className="text-gray-600">Save hours on each journey with our optimized routing algorithms.</p>
                  </div>
                  
                  {/* Feature 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="text-yellow-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                    <p className="text-gray-600">Navigate safer routes with hazard alerts and driver-friendly paths.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Testimonial Section */}
            <section className=" ">
              <FinancialServicesSection/>
            </section>
            <section className="">
              <Testimonials/>
            </section>
            
       
          </>
        )}
        
        {activeTab === 'tracking' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Tracking</h2>
            <p className="text-lg text-gray-600 mb-8">Tracking content placeholder. This section will include truck tracking features.</p>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-xl">Tracking interface will be implemented here</p>
            </div>
          </div>
        )}
        
        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">About content placeholder. This section will include information about the company.</p>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-xl">About page content will be implemented here</p>
            </div>
          </div>
        )}
        
        {activeTab === 'partners' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
            <p className="text-lg text-gray-600 mb-8">Partners content placeholder. This section will showcase business partners.</p>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-xl">Partners content will be implemented here</p>
            </div>
          </div>
        )}
        
        {activeTab === 'budgets' && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8">Budgets</h2>
            <p className="text-lg text-gray-600 mb-8">Budgets content placeholder. This section will present budget information.</p>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <p className="text-xl">Budget planning tools will be implemented here</p>
            </div>
          </div>
        )}
      </main>

   <Footer/>
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">GIT<span className="text-blue-400">sys.</span></h3>
                <div className="h-2 w-2 bg-yellow-500 rounded-full ml-1 mb-1"></div>
              </div>
              <p className="text-gray-400">The best routing partner for truck drivers.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">contact@gitsys.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 GITsys. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}