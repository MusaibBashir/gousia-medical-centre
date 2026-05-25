'use client';

import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp message
    const text = `Hello, I'm ${formData.name}. ${formData.message}. Phone: ${formData.phone}`;
    window.open(`https://wa.me/919797990594?text=${encodeURIComponent(text)}`);
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Get in Touch</h2>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="font-bold text-foreground mb-2">Call Us</h3>
            <a href="tel:+919797990594" className="text-sm text-secondary hover:text-secondary/80 font-semibold block mb-1">
              +91 9797990594
            </a>
            <a href="tel:+916005493973" className="text-sm text-secondary hover:text-secondary/80 font-semibold block">
              +91 6005493973
            </a>
          </div>

          {/* WhatsApp */}
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.19-.98C9.89 23.28 10.88 24 12 24c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.36-3.88-.99l-.28-.15-2.89.46.47-2.83-.18-.29C4.26 14.75 4 13.42 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-foreground mb-2">WhatsApp</h3>
            <a href="https://wa.me/919797990594" className="text-sm text-secondary hover:text-secondary/80 font-semibold">
              Message us directly
            </a>
          </div>
        </div>

        {/* Quick Contact Form */}
        <form onSubmit={handleSubmit} className="bg-muted/30 rounded-lg p-6 sm:p-8 border border-border space-y-4">
          <h3 className="text-2xl font-black text-foreground tracking-tight">Quick Contact</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <textarea
            placeholder="Tell us about your concern..."
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
