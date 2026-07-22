import React from 'react';
import Script from 'next/script';

const faqs = [
  {
    question: 'What areas of law does ADL Law Associates practice?',
    answer:
      'ADL Law Associates handles criminal law, civil litigation, family law, corporate advisory, anti-narcotics cases, and mediation (ADR), based in Islamabad.',
  },
  {
    question: 'Who is the lead advocate at ADL Law Associates?',
    answer:
      'Advocate Riffat Jan leads ADL Law Associates, with over 10 years of combined legal experience across criminal, civil, and corporate matters.',
  },
  {
    question: 'Where is ADL Law Associates located?',
    answer:
      "The firm's office is located at Office No.16, Farhan Plaza, G-11 Markaz, Islamabad.",
  },
  {
    question: 'How can I book a consultation with ADL Law Associates?',
    answer:
      'You can contact ADL Law Associates by phone, email, or WhatsApp to schedule a confidential consultation with Advocate Riffat Jan.',
  },
];

export default function FAQSection() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-2 text-black">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
