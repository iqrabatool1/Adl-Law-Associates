
"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = "923459588005"; 
  const message = "Assalam-o-Alaikum  Riffat jan , I need legal assistance.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        <MessageCircle size={28} />
      </div>
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
}