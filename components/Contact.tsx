
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=10')" }}>
      <div className="absolute inset-0 bg-[#2E5A4E]/80" />
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ponte en Contacto</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <input type="text" placeholder="Nombre" className="w-full p-3 rounded-full bg-white/90 border-transparent focus:ring-2 focus:ring-[#F8BABA] focus:border-transparent transition" />
            <input type="email" placeholder="Correo Electrónico" className="w-full p-3 rounded-full bg-white/90 border-transparent focus:ring-2 focus:ring-[#F8BABA] focus:border-transparent transition" />
            <input type="text" placeholder="Teléfono" className="w-full p-3 rounded-full bg-white/90 border-transparent focus:ring-2 focus:ring-[#F8BABA] focus:border-transparent transition" />
            <textarea placeholder="Mensaje" rows={5} className="w-full p-3 rounded-2xl bg-white/90 border-transparent focus:ring-2 focus:ring-[#F8BABA] focus:border-transparent transition"></textarea>
            <div className="text-center">
              <input type="submit" value="ENVIAR" className="bg-[#F8BABA] text-[#2E5A4E] cursor-pointer rounded-full font-bold px-10 py-3 hover:bg-white transition-all duration-300" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;