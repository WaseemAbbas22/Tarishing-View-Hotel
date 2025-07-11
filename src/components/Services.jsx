import { FaWifi, FaTshirt, FaUtensils, FaConciergeBell } from 'react-icons/fa';

const services = [
  { icon: <FaWifi className="text-4xl text-blue-600" />, title: 'Free WiFi' },
  { icon: <FaTshirt className="text-4xl text-yellow-600" />, title: 'Laundry Service' },
  { icon: <FaUtensils className="text-4xl text-red-500" />, title: 'Room Service' },
  { icon: <FaConciergeBell className="text-4xl text-pink-500" />, title: '24/7 Concierge' },
];

const Services = () => {
  return (
    <div className="w-full h-60 flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:scale-105 transition"
            >
              {service.icon}
              <p className="mt-4 text-gray-700 font-medium text-center">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
