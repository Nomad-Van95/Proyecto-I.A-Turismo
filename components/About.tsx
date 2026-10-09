
import React from 'react';

const AboutCard: React.FC<{ imageUrl: string; title: string; description?: string }> = ({ imageUrl, title, description }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h5 className="text-lg font-bold uppercase">{title}</h5>
      {description && <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>}
    </div>
  </div>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Vacaciones de <span className="text-[#2E5A4E]">Invierno</span></h2>
          <p className="text-gray-600 mt-2">Descubre las mejores experiencias para tu próxima escapada.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-10">
               <AboutCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeQNa_6uT1cyZND-SXc7arhwA31XnW8nJ7pzsJ0fdu96VxHQVdSiPlQDTBMcVEvjbk7AfVd2qkb37laAm6a9nQfQwlX9VvtKEGKwM9jkV&s=10" title="Restaurantes" />
              <AboutCard imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/59/25/75/caption.jpg?w=1200&h=-1&s=1" title="Dónde Alojarse" />
            </div>
            <div className="space-y-6">
                <AboutCard imageUrl="https://jesikamillano.com/wp-content/uploads/2023/09/penol-guatape.png" title="Atracciones" description="Vistas inolvidables te esperan." />
              <AboutCard imageUrl="https://lanotaeconomica.com.co/wp-content/uploads/elementor/thumbs/arturo-calle-mujers-qcnrj04taun03ndgulsb0p548sy2day34sacosr62k.jpg" title="Tiendas" />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="text-2xl font-bold uppercase text-gray-700">Disfruta tus <span className="text-[#2E5A4E]">vacaciones</span></h4>
            <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
              Ofrecemos experiencias curadas para que tu viaje sea fluido e inolvidable. Desde estadías de lujo hasta visitas turísticas de aventura, encuentra todo lo que necesitas para tus vacaciones perfectas. Nuestro asistente de IA está aquí para ayudarte 24/7.
            </p>
            <button className="bg-[#2E5A4E] text-white rounded-full capitalize font-bold px-8 py-3 hover:bg-[#F8BABA] hover:text-[#2E5A4E] transition-all duration-300">
              Reserva Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;