
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1015')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center lg:justify-start text-white">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-[#F8BABA]">Increíble</span><br />Aventura en Colombia
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Descubre vistas impresionantes y experiencias inolvidables. Deja que nuestro guía de IA te ayude a planificar el viaje perfecto a la hermosa Colombia.
            </p>
            <button className="mt-8 bg-transparent border-2 border-white rounded-full text-white uppercase font-bold px-8 py-3 hover:bg-[#F8BABA] hover:text-[#2E5A4E] hover:border-[#F8BABA] transition-all duration-300">
              Reserva Ahora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;