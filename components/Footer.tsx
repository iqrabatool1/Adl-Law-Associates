import Link from 'next/link';
import './Footer.css'; // Import the specific CSS for the gold color
import { Mail, Phone, MapPin } from 'lucide-react';

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">
              <Link href="/">
                ADL Law <span className="gold-text">Associates</span>
              </Link>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Dedicated to providing elite legal representation. Our firm stands for 
              unwavering integrity, strategic defense, and the pursuit of justice 
              across all legal frontiers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="hover:text-zinc-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-zinc-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-zinc-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">
              Connect
            </h3>
            


<div className="space-y-4 text-sm">
  {/* Email */}
  <div className="flex items-center gap-3">
    <Mail size={18} className="text-[#c5a059]" />
    <p className="text-zinc-300">hazratrifat@gmail.com</p>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3">
    <Phone size={18} className="text-[#c5a059]" />
    <p className="text-zinc-300">0345-9588005</p>
  </div>

  {/* Address */}
  <div className="flex items-start gap-3">
    <MapPin size={18} className="text-[#c5a059] mt-0.5" />
    <p className="text-zinc-400 leading-relaxed">
      Office No.16, Farhan Plaza,<br />
      G-11 Markaz, Islamabad
    </p>
  </div>
</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {new Date().getFullYear()} ADL Law <span className="gold-text">Associates</span>. 
          </p>
          <div className="flex gap-6 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="text-zinc-500 hover:text-white transition">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}