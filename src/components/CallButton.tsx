import { Phone } from 'lucide-react';

const CallButton = () => {
  return (
    <a
      href="tel:+15614662984"
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 z-50 flex items-center justify-center"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default CallButton;