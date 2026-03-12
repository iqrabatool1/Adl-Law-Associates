// app/page.js
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import Testimonial from '../components/Testimonial'
import StatsBar from '../components/StatsBar' // Add this
import FinalCTA from '../components/FinalCTA' // Add this


export default function Home() {
  const services = [
    { title: 'Criminal Law', description: 'Expert defense in criminal cases with a focus on justice.', icon: '⚖️' },
    { title: 'Civil Law', description: 'Handling disputes, contracts, and civil matters professionally.', icon: '📜' },
     { title: 'EDR (Mediation)', description: 'Professional mediation services for resolving disputes amicably.', icon: '🤝' },
    { title: 'Family Law', description: 'Support for divorce, custody, and family-related legal issues.', icon: '👨‍👩‍👧‍👦' },
     { title: 'Anti Norcotics', description: 'Specialized legal support in anti-narcotics and drug-related cases.', icon: '💊' },
      
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