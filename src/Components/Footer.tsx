import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className=" mx-4 bg-gradient-to-tr from-yellow-50  to-transparent relative">
      {/* Newsletter Section */}
      <div className="bg-orange-50 rounded-t-lg px-8 py-12 relative">
        {/* Check icon in top right */}
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-[#D98B1C] rounded-full flex items-center justify-center">
            <img src="/plane.png" alt="" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
       <span
        className="text-[27px] font-semibold text-[#5E6282] leading-[54px] tracking-normal mb-8 text-center"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        >
        Subscribe to get information, latest news and other interesting offers about Gitsys
        </span>


          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D98B1C] focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-[#D98B1C] hover:bg-[#cb882a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white px-8 py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#181E4B]">
                  GIT<span className="text-[#181E4B]">sys</span>
                </h3>
              </div>
           <p className="text-[#5E6282] text-sm leading-relaxed"  style={{ fontFamily: 'Poppins, sans-serif' }}>
              Track your fleet, optimize your routes, maximize your profits.
            </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Company</h4>
              <ul className="space-y-2">
                <li><button className="text-[#5E6282] hover:text-gray-900 text-[16px] text-left">About</button></li>
                <li><button className="text-[#5E6282] hover:text-gray-900 text-[16px] text-left">Careers</button></li>
                <li><button className="text-[#5E6282] hover:text-gray-900 text-[16px] text-left">Mobile</button></li>
              </ul>
            </div>

            {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-[#5E6282] hover:text-gray-900 text-[16px] text-left flex items-center gap-2">
                  <Mail size={16} />
                  support@example.com
                </button>
              </li>
              <li>
                <button className="text-[#5E6282] hover:text-gray-900 text-[16px] text-left flex items-center gap-2">
                  <Phone size={16} />
                  +1 (555) 123-4567
                </button>
              </li>
               <li>
                <button className="text-[#5E6282] hover:text-gray-900 text-[16px] text-left flex items-center gap-2">
                  <img src="/whatsapp.png" alt="" className='w-5 h-5'/>
                   +1 (555) 123-4567
                </button>
              </li>
            </ul>
          </div>
            {/* More Links and Social/Apps */}
            <div>
              <h4 className="font-semibold text-[#080809] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>More</h4>
              <ul className="space-y-2 mb-6">
                <li><button className="text-[#080809] hover:text-gray-900 text-sm text-left">Charges</button></li>
              </ul>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
                  <span className="text-xs font-bold">
                    <img src="/facebook.png" alt="" />
                  </span>
                </div>
                <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-300">
                  <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
                  <span className="text-xs font-bold">
                    <img src="/twitter1.png" alt="" className='p-1' />
                  </span>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
                  <span className="text-xs font-bold">
                    <img src="/linkedIn.png" alt="" />
                  </span>
                </div>
              </div>

              {/* App Download */}
              <div>
                <p className="text-[#5E6282] text-sm mb-2 font-[500px]" style={{ fontFamily: 'Poppins, sans-serif' }} >Discover our app</p>
                <div className="flex space-x-2">
                  <button className="bg-black text-white px-3 py-1 rounded text-xs flex items-center space-x-1 hover:bg-gray-800">
                    <img src="/googlePlay.png" alt="" />
                  </button>
                  <button className="bg-black text-white px-3 py-1 rounded text-xs flex items-center space-x-1 hover:bg-gray-800">
                    <img src="/appStore.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}