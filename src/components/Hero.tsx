import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 z-0 opacity-70 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Top Auto Repair & Tires in Boca Raton
        </h2>
        <p className="text-gray-200 text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Affordable, Reliable, Fast.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center bg-red-600 text-white font-medium px-6 py-3 rounded-md text-lg hover:bg-red-700 transition transform hover:scale-105 duration-200"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;