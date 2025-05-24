import { useState, useRef } from 'react';
import './index.css';
import Services from './Components/Services'
import ServicesSection from './Components/ServiceSection'
import FinancialServicesSection from './Components/FinanceServices'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection'

// Mock components for demonstration
// const HeroSection = () => <div className="h-screen bg-blue-100 flex items-center justify-center"><h2 className="text-4xl">Hero Section</h2></div>;
// const Services = () => <div className="h-screen bg-green-100 flex items-center justify-center"><h2 className="text-4xl">About Section</h2></div>;
// const ServicesSection = () => <div className="h-screen bg-yellow-100 flex items-center justify-center"><h2 className="text-4xl">Tracking Section</h2></div>;
// const FinancialServicesSection = () => <div className="h-screen bg-purple-100 flex items-center justify-center"><h2 className="text-4xl">Financial Services</h2></div>;
// const Testimonials = () => <div className="h-screen bg-pink-100 flex items-center justify-center"><h2 className="text-4xl">Testimonials</h2></div>;
// const Footer = () => <div className="h-64 bg-gray-800 flex items-center justify-center"><h2 className="text-4xl text-white">Footer / Contacts</h2></div>;

export default function TruckRoutingApp() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Create refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const trackingRef = useRef<HTMLElement>(null);
  const budgetsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ContactsRef = useRef<HTMLElement>(null);
  
  const handleTabChange = (tab: 'home' | 'about' | 'tracking' | 'budgets' | 'testimonials' | 'Contacts') => {
    setActiveTab(tab);

    if (tab === 'home') {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      return;
    }
    
    
    // Scroll to the corresponding section
    const refs = {
      home: homeRef,
      about: aboutRef,
      tracking: trackingRef,
      budgets: budgetsRef,
      testimonials: testimonialsRef,
      Contacts: ContactsRef
    };

    
    const targetRef = refs[tab];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className="min-h-screen overflow-clip bg-white">
      {/* Header / Navigation */}
      <header className="px-4 md:py-6 py-4 sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center md:mb-0">
            <h1 className="md:text-3xl text-[24px] font-bold text-[#181E4B]">GIT<span className="text-[#181E4B]">sys.</span></h1>
            <div className="h-3 w-3 bg-[#D98B1C] rounded-full ml-1 mb-2"></div>
          </div>
          
          <nav className="flex justify-center gap-1 sm:gap-4">
            <button 
              onClick={() => handleTabChange('home')}
              className={`w-[55px] text-[#181E4B] sm:w-[96px] h-[40px] rounded-[5px] text-xs sm:text-base transition-all border flex-shrink-0 ${
                activeTab === 'home' 
                  ? 'bg-gray-100 border-[#181E4B] border-[2px] font-medium' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              Home
            </button>

            <button 
              onClick={() => handleTabChange('about')}
              className={`w-[55px] text-[#181E4B] sm:w-[96px] h-[40px] rounded-[5px] text-xs sm:text-base transition-all border flex-shrink-0 ${
                activeTab === 'about' 
                  ? 'bg-gray-100 border-[#181E4B] border-[2px] font-medium' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              About
            </button>
            
            <button 
              onClick={() => handleTabChange('tracking')}
              className={`w-[55px] text-[#181E4B] sm:w-[96px] h-[40px] rounded-[5px] text-xs sm:text-base transition-all border flex-shrink-0 ${
                activeTab === 'tracking' 
                  ? 'bg-gray-100 border-[#181E4B] border-[2px] font-medium' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              Tracking
            </button>

            <button 
              onClick={() => handleTabChange('budgets')}
              className={`w-[55px] text-[#181E4B] sm:w-[96px] h-[40px] rounded-[5px] text-xs sm:text-base transition-all border flex-shrink-0 ${
                activeTab === 'budgets' 
                  ? 'bg-gray-100 border-[#181E4B] border-[2px] font-medium' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              Budgets
            </button>
            
            <button 
              onClick={() => handleTabChange('testimonials')}
              className={`w-[57px] text-[#181E4B] sm:w-[96px] h-[40px] rounded-[5px] text-xs sm:text-base transition-all border flex-shrink-0 ${
                activeTab === 'testimonials' 
                  ? 'bg-gray-100 border-[#181E4B] border-[2px] font-medium' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              Testimonial
            </button>

            <button 
              onClick={() => handleTabChange('Contacts')}
              className={`w-[55px] text-[#181E4B] sm:w-[96px] h-[40px] rounded-[5px] text-xs sm:text-base transition-all border flex-shrink-0 ${
                activeTab === 'Contacts' 
                  ? 'bg-gray-100 border-[#181E4B] border-[2px] font-medium' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              Contacts
            </button>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="">
        {/* Home */}
        <section ref={homeRef}>
          <HeroSection  handleTabChange={handleTabChange}/>
        </section>

        {/* About */}
        <section ref={aboutRef}>
          <Services/>
        </section>
      
        {/* Tracking */}
        <section ref={trackingRef}>
          <ServicesSection/>
        </section>

        {/* Budgets */}
        <section ref={budgetsRef}>
          <FinancialServicesSection/>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef}>
          <Testimonials/>
        </section>
      </main>
      
      {/* Contacts */}
      <section ref={ContactsRef}>
        <Footer/>
      </section>
    </div>
  );
}