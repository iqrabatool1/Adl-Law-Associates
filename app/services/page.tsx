// components/ServicesSection.tsx
import React from 'react';
import { Scale, Users, Building2, Gavel, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Criminal Law',
      icon: <Gavel className="w-8 h-8" />,
      description:
        'Strategic defense representation for complex criminal matters. We protect your constitutional rights through rigorous advocacy and deep legal expertise.',
      features: ['White Collar Crimes', 'High-Court Appeals', 'Trial Advocacy', 'Bail Matters'],
    },
    {
      title: 'Civil Litigation',
      icon: <Scale className="w-8 h-8" />,
      description:
        'Assertive representation in civil disputes. From property restitution to high-value contract breaches, we secure your interests in every forum.',
      features: ['Property Disputes', 'Contractual Integrity', 'Revenue Law', 'Recovery Suits'],
    },
    {
      title: 'Family Matters',
      icon: <Users className="w-8 h-8" />,
      description:
        'Providing dignified and compassionate legal guidance for sensitive family disputes, ensuring the protection of rights and future security.',
      features: ['Succession Planning', 'Custody Matters', 'Divorce Law', 'Inheritance'],
    },
    {
      title: 'Corporate Advisory',
      icon: <Building2 className="w-8 h-8" />,
      description:
        'Elite legal support for enterprises. We handle the complexities of corporate governance and mergers so you can focus on growth.',
      features: ['Regulatory Compliance', 'M&A Advisory', 'Entity Formation', 'Risk Management'],
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
     
<div className="text-center max-w-3xl mx-auto mb-20">
  <span className="text-[#c5a059] font-bold uppercase tracking-widest text-sm mb-4 block">
    Areas of Expertise
  </span>
  
  {/* Match the font and style of the About Section */}
  <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight" 
      style={{ fontFamily: "'Playfair Display', serif" }}>
    Distinguished Legal <span style={{ color: '#c5a059' }}>Solutions</span>
  </h1>
  
  <div className="w-24 h-1 bg-[#c5a059] mx-auto mb-8"></div>
  
  <p className="text-lg text-gray-600 leading-relaxed">
    Advocate Riffat Jan and the team provide specialized legal counsel 
    tailored to the complexities of modern jurisprudence.
  </p>
</div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 border border-gray-100 bg-[#fafafa] hover:bg-black transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-5 mb-6">
                <div className="text-[#c5a059] group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-600 group-hover:text-gray-300 mb-8 leading-relaxed transition-colors duration-500">
                {service.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-[#c5a059] transition-colors duration-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black group-hover:text-[#c5a059] transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Professional Call-to-Action */}
        <div className="mt-24 border-t border-gray-100 pt-16 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">In Search of Expert Counsel?</h2>
            <p className="text-gray-600 mb-8 italic">Confidentiality and integrity in every consultation.</p>
            <button className="bg-black text-white px-10 py-4 hover:bg-[#c5a059] transition-all duration-300 font-bold uppercase tracking-widest flex items-center gap-3">
              Request a Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}