// app/page.js
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import Testimonial from '../components/Testimonial'
import StatsBar from '../components/StatsBar' // Add this
import FinalCTA from '../components/FinalCTA' // Add this


export default function Home() {
  const services = [
    { title: 'Availability', description: 'Emergency legal support when you need it most.', icon: '⏰' },
    { title: 'Proven Track Record', description: 'Over 10 years of combined experience winning complex cases.', icon: '🏆' },
     { title: 'Client-Centered', description: 'We prioritize your peace of mind and clear communication.', icon: '💬' },
    { title: 'Transparent Billing', description: 'No hidden fees or surprises. We believe in clear and honest billing practices.', icon: '💰' },
     { title: 'Multidisciplinary Team.', description: 'Our diverse team brings together expertise from various legal fields.', icon: '💊' },
      
  ]

  const testimonials = [
  { 
    name: 'Ahmed ', 
    text: 'Advocate Riffat Jan is a paragon of legal excellence. His deep understanding of corporate law and unwavering commitment to justice helped our firm navigate a complex multi-national dispute with total success.', 
    role: '' 
  },
  { 
    name: 'Haji Muhammad Ibraheem', 
    text: 'Highly professional and a trustworthy advocate of the highest caliber. Riffat Jan handles every case with the precision of a strategist and the heart of a servant to the law. He is truly the voice for the voiceless.', 
    role: 'Private Client' 
  },
  { 
    name: 'Barrister Omar Siddiqui', 
    text: 'Having seen Riffat Jan in the courtroom, I can attest that his strategic approach to civil litigation is unmatched. His ability to dissect complex revenue and land titles is why he remains the first choice for high-stakes cases.', 
    role: 'Senior Legal Consultant' 
  },
];

  return (
    <main>
      <HeroSection />
      <ServiceCards data={services} />
      <Testimonial data={testimonials} />
      <StatsBar />
      <FinalCTA />
 
    </main>
  )
}