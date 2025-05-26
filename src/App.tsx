import { useState, useRef, useEffect } from 'react';
import './index.css';
import Services from './Components/Services'
import ServicesSection from './Components/ServiceSection'
import FinancialServicesSection from './Components/FinanceServices'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection'

export default function TruckRoutingApp() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Create refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const trackingRef = useRef<HTMLElement>(null);
  const budgetsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ContactsRef = useRef<HTMLElement>(null);
  
  // Use effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: 'home', ref: homeRef },
        { name: 'about', ref: aboutRef },
        { name: 'tracking', ref: trackingRef },
        { name: 'budgets', ref: budgetsRef },
        { name: 'testimonials', ref: testimonialsRef },
        { name: 'Contacts', ref: ContactsRef }
      ];
      
      const scrollPosition = window.scrollY + 100; // Add offset for header
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop;
          
          if (scrollPosition >= sectionTop) {
            setActiveTab(section.name as any);
            break;
          }
        }
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
          <div className="flex flex-col md:mb-0 relative">
            <div className='flex items-center'>
            <h1 className="md:text-3xl text-[24px] font-bold text-[#181E4B]">GIT <span className="text-[#181E4B] pl-1"> sys.</span></h1>
            <div className="h-3 w-3  bg-[#D98B1C] rounded-full ml-1 mb-2"></div>

            </div>
            <div className='absolute bottom-[-10px] right-[50px] md:right-[60px] '>
            <img className='h-5 w-8 ' src="/logoImg.png"/>

            </div>
          </div>
          
<nav className="flex justify-center items-center bg-gray-50 rounded-full p-1 shadow-inner mt-1 md:mt-0 border border-gray-200 gap-1 sm:gap-2">
  <button 
    onClick={() => handleTabChange('home')}
    className={`w-[55px] sm:w-auto sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
      activeTab === 'home' 
        ? 'bg-[#181E4B] text-white shadow-lg transform scale-105' 
        : 'text-[#181E4B] hover:bg-white hover:shadow-md hover:scale-102'
    }`}
  >
    Home
  </button>

  <button 
    onClick={() => handleTabChange('about')}
    className={`w-[55px] sm:w-auto sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
      activeTab === 'about' 
        ? 'bg-[#181E4B] text-white shadow-lg transform scale-105' 
        : 'text-[#181E4B] hover:bg-white hover:shadow-md hover:scale-102'
    }`}
  >
    About
  </button>
  
  <button 
    onClick={() => handleTabChange('tracking')}
    className={`w-[55px] sm:w-auto sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
      activeTab === 'tracking' 
        ? 'bg-[#181E4B] text-white shadow-lg transform scale-105' 
        : 'text-[#181E4B] hover:bg-white hover:shadow-md hover:scale-102'
    }`}
  >
    Tracking
  </button>

  <button 
    onClick={() => handleTabChange('budgets')}
    className={`w-[55px] sm:w-auto sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
      activeTab === 'budgets' 
        ? 'bg-[#181E4B] text-white shadow-lg transform scale-105' 
        : 'text-[#181E4B] hover:bg-white hover:shadow-md hover:scale-102'
    }`}
  >
    Budgets
  </button>
  
  <button 
    onClick={() => handleTabChange('testimonials')}
    className={`w-[59px] sm:w-auto sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
      activeTab === 'testimonials' 
        ? 'bg-[#181E4B] text-white shadow-lg transform scale-105' 
        : 'text-[#181E4B] hover:bg-white hover:shadow-md hover:scale-102'
    }`}
  >
    Testimonial
  </button>

  <button 
    onClick={() => handleTabChange('Contacts')}
    className={`w-[55px] sm:w-auto sm:px-4 py-2 ml-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out flex-shrink-0 ${
      activeTab === 'Contacts' 
        ? 'bg-[#181E4B] text-white shadow-lg transform scale-105' 
        : 'text-[#181E4B] hover:bg-white hover:shadow-md hover:scale-102'
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