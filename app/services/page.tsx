export default function ServicesSection() {
  const services = [
    {
      title: 'Criminal Law',
      description:
        'Comprehensive defense services for criminal cases, including misdemeanors, felonies, and appeals. Our experienced criminal attorneys provide aggressive representation to protect your rights.',
      features: ['Case evaluation', 'Court representation', 'Plea negotiations', 'Appeals'],
    },
    {
      title: 'Civil Law',
      description:
        'Expert handling of civil disputes including contract disputes, personal injury claims, property matters, and business litigation.',
      features: ['Contract disputes', 'Personal injury', 'Property law', 'Business litigation'],
    },
    {
      title: 'Family Law',
      description:
        'Sensitive and professional assistance with divorce, child custody, child support, adoption, and other family legal matters.',
      features: ['Divorce proceedings', 'Child custody', 'Child support', 'Adoption services'],
    },
    {
      title: 'Corporate Law',
      description:
        'Business formation, contracts, mergers, acquisitions, and ongoing corporate legal support for businesses of all sizes.',
      features: ['Business formation', 'Contract drafting', 'Mergers & acquisitions', 'Corporate governance'],
    },
  ];

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Legal Services</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We provide comprehensive legal services across multiple practice areas,
          ensuring our clients receive expert guidance and representation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>

              <h3 className="text-lg font-semibold mb-3">Key Services:</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white p-10 rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Need Legal Assistance?</h2>
            <p className="mb-6">Contact us today for a free consultation</p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
