export default function FinancialServicesSection() {
const services = [
    {
      id: 1,
      title: "AI-Powered Financial Planning",
      description: "Our advanced AI analyzes your trucking revenue patterns, seasonal trends, and operational costs to create comprehensive yearly financial plans that maximize your profitability and growth potential.",
      iconPlaceholder: "/plan.png"
    },
    {
      id: 2,
      title: "Smart Budget Generation",
      description: "Automatically generate detailed budgets based on your truck's fuel consumption, maintenance schedules, insurance costs, and route profitability. Stay within budget and optimize spending across all business areas.",
      iconPlaceholder: "/budget.png"
    },
    {
      id: 3,
      title: "Real-Time Expense Tracking",
      description: "Track every dollar spent on fuel, tolls, repairs, and permits in real-time. Get instant insights into your cost per mile, profit margins, and identify areas where you can reduce expenses.",
      iconPlaceholder: "/expense.png"
    }
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mt-6">
        {/* Header */}
        <div className="text-center mb-5 sm:mb-12 lg:mb-8">
          <p className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide uppercase mb-2 sm:mb-4">
            Financially Thinking
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" 
              style={{fontFamily: 'Volkhov, serif'}}>
            Financial Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center bg-gray-50 p-4">
              {/* Icon Placeholder */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-orange-50 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
                  <img 
                    src={`${service.iconPlaceholder}`} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 px-2" 
                  style={{fontFamily: 'Volkhov, serif'}}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  width: '100%',
                  maxWidth: '45ch',
                  margin: '0 auto',
                }} 
                className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-[14px] px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative element on the right */}
        <div className="relative mt-0 sm:mt-12">
          <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-32 sm:h-48 lg:h-64 opacity-10 hidden sm:block">
            <div className="w-full h-full bg-gradient-to-b from-orange-200 to-orange-100 rounded-l-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}