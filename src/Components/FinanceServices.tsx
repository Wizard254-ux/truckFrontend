export default function FinancialServicesSection() {
  const services = [
    {
      id: 1,
      title: "Yearly Financial Planning",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      iconPlaceholder: "/plan.png"
    },
    {
      id: 2,
      title: "Budget Generation",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      iconPlaceholder: "/budget.png"
    },
    {
      id: 3,
      title: "Expense Tracking",
      description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      iconPlaceholder: "/expense.png"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-4">
            Finacially Thinking
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{fontFamily: 'Volkhov, serif'}}>
            Finacial Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              {/* Icon Placeholder */}
              <div className="flex justify-center mb-6">
                <div className=" bg-orange-50 w-[8rem] h-[8rem] rounded-lg flex items-center justify-center">
                  <img 
                    src={`${service.iconPlaceholder}`} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{fontFamily: 'Volkhov, serif'}}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative element on the right */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-32 h-64 opacity-10">
            <div className="w-full h-full bg-gradient-to-b from-orange-200 to-orange-100 rounded-l-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}