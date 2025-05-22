import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <div className=" bg-gray-50 pt-0 px-4 relative py-16 md:py-24">
        
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center md:mb-9">
          {/* Left Side */}
          <div>
            <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-4">
              TESTIMONIALS
            </p>
           <h2
            className="text-[50px] font-bold text-gray-900 leading-[100%] tracking-normal mb-8"
            style={{ fontFamily: 'Volkhov, serif' }}
            >
            What People Say About Us.
            </h2>

            
            {/* Dots Navigation */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    selectedTestimonial === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative z-10">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonials[selectedTestimonial].avatar}
                  alt={testimonials[selectedTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "{testimonials[selectedTestimonial].text}"
                  </p>
                </div>
              </div>
            </div>

            {/* Dropdown for testimonial selection */}
            <div className="mt-6 relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonials[selectedTestimonial].avatar}
                    alt={testimonials[selectedTestimonial].name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonials[selectedTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[selectedTestimonial].position}
                    </p>
                  </div>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={index}
                      onClick={() => handleTestimonialChange(index)}
                      className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Background decorative element */}
          </div>
        </div>
      </div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-50 via-yellow-30 to-transparent rounded-tr-3xl "></div>
    </div>
  );
}