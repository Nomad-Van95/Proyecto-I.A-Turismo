
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E5A4E] text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8 space-x-6">
          <a href="#" className="text-white hover:text-[#F8BABA] text-xl"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white hover:text-[#F8BABA] text-xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white hover:text-[#F8BABA] text-xl"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-white hover:text-[#F8BABA] text-xl"><i className="fab fa-google-plus-g"></i></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Contact Us */}
          <div>
            <h4 className="font-bold uppercase mb-4">Contáctanos</h4>
            <p className="text-gray-300 leading-relaxed text-sm">
              123 Second Street Fifth Avenue,<br />
              Bogotá, Colombia<br />
              +987 654 3210
            </p>
          </div>
          {/* Additional Links */}
          <div>
            <h4 className="font-bold uppercase mb-4">Enlaces adicionales</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#F8BABA]">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F8BABA]">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F8BABA]">Política de privacidad</a></li>
            </ul>
          </div>
          {/* Recent Posts */}
          <div>
             <h4 className="font-bold uppercase mb-4">Publicaciones recientes</h4>
             <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-[#F8BABA]">Explorando la Costa Caribe</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#F8BABA]">Top 5 destinos en Colombia</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#F8BABA]">Guía para la selva amazónica</a></li>
             </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase mb-4">Boletín</h4>
            <form>
              <input type="text" placeholder="Nombre" className="w-full bg-white/20 border-0 rounded-md p-2 mb-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F8BABA]" />
              <input type="email" placeholder="Correo Electrónico" className="w-full bg-white/20 border-0 rounded-md p-2 mb-4 text-white placeholder-gray-300 focus:ring-2 focus:ring-[#F8BABA]" />
              <input type="submit" value="Enviar" className="w-full bg-[#F8BABA] text-[#2E5A4E] cursor-pointer rounded-md font-bold py-2 hover:bg-white transition-all duration-300" />
            </form>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>Copyright 2024 Diseñado por un Ingeniero Frontend React Senior de Clase Mundial</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;