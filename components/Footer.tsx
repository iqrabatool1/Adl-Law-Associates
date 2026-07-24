
import Link from 'next/link';

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-zinc-500">
              Connect
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#c5a059]" />
                <p className="text-zinc-300">hazratrifat@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#c5a059]" />
                <p className="text-zinc-300">0345-9588005</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c5a059] mt-0.5" />
                <p className="text-zinc-400 leading-relaxed">
                  Office No.16, Farhan Plaza,<br />
                  G-11 Markaz, Islamabad
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61592148581823" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-zinc-400 hover:text-[#c5a059] transition-colors">
                <Facebook size={20} />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-[#c5a059] transition-colors">
                <Instagram size={20} />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 hover:text-[#c5a059] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

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
