// components/FinalCTA.tsx
export default function FinalCTA() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Protect Your Rights?</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Contact our legal experts today for a confidential consultation. 
          We are committed to providing the defense and guidance you deserve.
        </p>
        <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition">
          Schedule a Consultation
        </button>
      </div>
    </section>
  )
}