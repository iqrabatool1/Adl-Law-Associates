import ServicesSection from '../../components/ServicesSection';
import FAQSection from '../../components/FAQSection';

export const metadata = {
  title: 'Legal Services in Islamabad | ADL Law Associates',
  description:
    'Explore legal services in Islamabad — criminal law, civil litigation, family law, and corporate advisory with Advocate Riffat Jan.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <FAQSection />
    </>
  );
}
