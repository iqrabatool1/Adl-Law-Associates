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
    { title: 'Family Law', description: 'Support for divorce, custody, and family-related legal issues.', icon: '👨‍👩‍👧‍👦' },
  ]

  const testimonials = [
    { name: 'John Doe', text: 'Excellent service and dedication to justice.', role: 'Business Client' },
    { name: 'Jane Smith', text: 'Highly professional and trustworthy advocate.', role: 'Private Client' },
    { name: 'Robert Brown', text: 'Strategic approach to civil litigation.', role: 'CEO, TechCorp' },
  ]

  return (
    <main>
      <HeroSection />
      
      <ServiceCards data={services} />

      <Testimonial data={testimonials} />

      {/* New Sections */}
      <StatsBar />
      
      <FinalCTA />
    </main>
  )
}