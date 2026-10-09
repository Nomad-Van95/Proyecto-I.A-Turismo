
import React from 'react';

const StatItem: React.FC<{ icon: string; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="text-center">
    <i className={`${icon} fa-3x text-[#2E5A4E]`}></i>
    <h3 className="text-4xl font-bold mt-4 text-gray-800">{value}</h3>
    <p className="text-gray-600 capitalize">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem icon="fas fa-umbrella-beach" value="425" label="Paseos" />
          <StatItem icon="fas fa-birthday-cake" value="125" label="Años de Experiencia" />
          <StatItem icon="fa fa-home" value="325" label="Cabañas" />
          <StatItem icon="fas fa-glass-cheers" value="120" label="Restaurantes" />
        </div>
      </div>
    </section>
  );
};

export default Stats;