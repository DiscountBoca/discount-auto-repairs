import { CircleDollarSign, AlertTriangle, MoveHorizontal, Snowflake, Cpu, Circle, AlertCircle } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  'oil-can': <CircleDollarSign className="w-10 h-10 text-red-600" />,
  'circle': <Circle className="w-10 h-10 text-red-600" />,
  'alert-triangle': <AlertTriangle className="w-10 h-10 text-red-600" />,
  'move-horizontal': <MoveHorizontal className="w-10 h-10 text-red-600" />,
  'snowflake': <Snowflake className="w-10 h-10 text-red-600" />,
  'cpu': <Cpu className="w-10 h-10 text-red-600" />,
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional auto repair and tire services at affordable prices. Our experienced mechanics use the latest tools and technology to get you back on the road quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-4">
                  {iconMap[service.icon] || <AlertCircle className="w-10 h-10 text-red-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-red-600 font-semibold">{service.price}</span>
                  <a 
                    href="#contact" 
                    className="inline-block text-sm font-medium text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;