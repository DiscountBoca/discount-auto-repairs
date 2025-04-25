import { CheckCircle, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1600px] mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Discount Auto Repair & Tires shop" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-700 mb-6 text-lg">
              For over 15 years, Discount Auto Repair & Tires of Boca Raton has been providing 
              top-quality auto repair and tire services at affordable prices. Our ASE-certified 
              mechanics use state-of-the-art equipment to diagnose and fix your vehicle right the first time.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Experienced Technicians:</span> Our mechanics have over 50 years of combined experience
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Quality Parts:</span> We use only OEM or high-quality aftermarket parts
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Fair Pricing:</span> Transparent pricing with no hidden fees or unnecessary repairs
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-semibold">Satisfaction Guaranteed:</span> We stand behind our work with a 12-month/12,000-mile warranty
                </p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center bg-red-600 text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition"
            >
              <Wrench className="mr-2 h-5 w-5" />
              Schedule a Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;