// app/contact/page.tsx
"use client"; // Add this at the top if you are using Lucide icons or React hooks

import React from 'react';
import { MapPin, Phone, Mail, Send, ChevronDown } from 'lucide-react';

// 1. Ensure the function is named correctly for a page
export default function ContactPage() {
  const gold = "#c5a059";

  return (
    <div className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#c5a059] font-bold uppercase tracking-widest text-sm mb-4 block">
            Consultation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-tight" 
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In <span style={{ color: gold }}>Touch</span>
          </h1>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT side info */}
          <div className="space-y-10">
            <h2 className="text-2xl font-bold mb-8 text-black uppercase tracking-tight">
                Our Headquarters
            </h2>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-black text-[#c5a059] p-4 mr-5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-black uppercase text-xs tracking-widest mb-2">Office Address</h3>
                  <p className="text-gray-600">Office No.16, Farhan Plaza,<br />
      G-11 Markaz, Islamabad</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-black text-[#c5a059] p-4 mr-5">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-black uppercase text-xs tracking-widest mb-2">Phone</h3>
                  <p className="text-gray-600 font-medium">0345-9588005</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT side form */}
          <div className="bg-white p-10 shadow-xl border-t-4 border-black relative">
            <h2 className="text-2xl font-bold mb-8 text-black">Brief Your Case</h2>
            <form 
              action="https://formspree.io/f/mwvnrjqj" 
              method="POST" 
              className="space-y-6"
            >
              <input
                name="first_name"
                type="text"
                required
                className="w-full bg-gray-50 px-0 py-3 border-b-2 border-gray-200 focus:border-[#c5a059] outline-none text-black"
                placeholder="First Name"
              />
              <input
                name="email"
                type="email"
                required
                className="w-full bg-gray-50 px-0 py-3 border-b-2 border-gray-200 focus:border-[#c5a059] outline-none text-black"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-gray-50 px-0 py-3 border-b-2 border-gray-200 focus:border-[#c5a059] outline-none text-black resize-none"
                placeholder="How can we help?"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-all duration-300 flex justify-center items-center gap-3"
              >
                Submit Consultation <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}