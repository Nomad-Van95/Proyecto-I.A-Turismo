import React, { useState } from 'react';

const locations = [
  {
    id: 1,
    name: 'Cartagena de Indias',
    description: 'Descubre la magia de la ciudad amurallada, con su arquitectura colonial, vibrantes plazas y una rica historia que te transportará en el tiempo.',
    imageUrl: 'https://picsum.photos/400/300?image=1043',
    coords: { top: '15%', left: '35%' },
  },
  {
    id: 2,
    name: 'Parque Nacional Tayrona',
    description: 'Un paraíso donde la selva se encuentra con el mar Caribe. Disfruta de playas de arena blanca, aguas cristalinas y senderos ecológicos únicos.',
    imageUrl: 'https://picsum.photos/400/300?image=1015',
    coords: { top: '12%', left: '45%' },
  },
  {
    id: 3,
    name: 'Bogotá, D.C.',
    description: 'La vibrante capital de Colombia. Explora el histórico barrio de La Candelaria, el impresionante Museo del Oro y el Cerro de Monserrate.',
    imageUrl: 'https://picsum.photos/400/300?image=1059',
    coords: { top: '50%', left: '48%' },
  },
  {
    id: 4,
    name: 'Medellín',
    description: 'Conocida como la "Ciudad de la Eterna Primavera", Medellín te sorprenderá con su innovación, su sistema de transporte y la amabilidad de su gente.',
    imageUrl: 'https://picsum.photos/400/300?image=201',
    coords: { top: '40%', left: '40%' },
  },
  {
    id: 5,
    name: 'Eje Cafetero (Salento)',
    description: 'Sumérgete en la cultura del café colombiano. Visita fincas cafeteras, admira las palmas de cera gigantes en el Valle de Cocora y disfruta de pueblos coloridos.',
    imageUrl: 'https://picsum.photos/400/300?image=431',
    coords: { top: '48%', left: '38%' },
  },
   {
    id: 6,
    name: 'Amazonas (Leticia)',
    description: 'Una aventura en la selva más grande del mundo. Navega por el río Amazonas, conoce comunidades indígenas y descubre una biodiversidad asombrosa.',
    imageUrl: 'https://picsum.photos/400/300?image=535',
    coords: { top: '90%', left: '70%' },
  },
];

const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explora <span className="text-[#2E5A4E]">Colombia</span> en el Mapa Interactivo
          </h2>
          <p className="text-gray-600 mt-2">
            Haz clic en los destinos para descubrir más sobre los tesoros de nuestro país.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Area */}
          <div className="w-full lg:w-2/3 h-96 lg:h-[500px] relative rounded-2xl shadow-lg overflow-hidden bg-[#E6F0EE]">
             <div 
              className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-20"
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Colombia_in_South_America.svg/1200px-Colombia_in_South_America.svg.png')" }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#E6F0EE]/50 to-transparent" />

            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                style={{ top: loc.coords.top, left: loc.coords.left }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-full bg-white shadow-md transition-all duration-300 hover:scale-125 z-10"
                aria-label={`Ver ${loc.name}`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    selectedLocation.id === loc.id ? 'bg-[#F8BABA] ring-4 ring-[#F8BABA]/50' : 'bg-[#2E5A4E]'
                  }`}
                ></div>
              </button>
            ))}
          </div>

          {/* Info Panel */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col">
              {selectedLocation ? (
                <>
                  <img
                    src={selectedLocation.imageUrl}
                    alt={selectedLocation.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-[#2E5A4E] mb-2">{selectedLocation.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {selectedLocation.description}
                  </p>
                   <button className="mt-4 w-full bg-[#2E5A4E] text-white rounded-full font-bold px-6 py-3 hover:bg-[#F8BABA] hover:text-[#2E5A4E] transition-all duration-300">
                     Aprende Más
                   </button>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Selecciona un punto en el mapa.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;