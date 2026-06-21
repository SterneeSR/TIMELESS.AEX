import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      // Ensure you add VITE_EMAILJS_PUBLIC_KEY to your .env file
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!publicKey) {
        console.warn('VITE_EMAILJS_PUBLIC_KEY is missing from .env');
      }

      await emailjs.send(
        'service_fmp9xpt',
        'template_dtjh384',
        templateParams,
        publicKey || 'YOUR_PUBLIC_KEY_HERE'
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full px-margin-mobile md:px-margin-desktop py-24 relative bg-background border-t border-surface-variant/50">
      <div className="absolute inset-0 dot-matrix-bg opacity-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10"
      >
        <div>
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">// SECURE_COMMLINK</span>
          </div>
          <h2 className="text-display-xl font-label-mono text-on-background uppercase drop-shadow-lg mb-8">
            LET'S BUILD SOMETHING THAT LASTS.
          </h2>
          <p className="font-body-md text-secondary-fixed-dim leading-relaxed max-w-md">
            Whether you're launching a brand, building a website, or creating something entirely new, let's talk. Establish a connection to initiate protocol.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex flex-col gap-2">
              <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest">EMAIL_ROUTING</span>
              <a href="mailto:hello@timelessaex.in" className="font-label-mono text-sm md:text-base text-on-surface hover:text-primary transition-colors cursor-crosshair">hello@timelessaex.in</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest">VOICE_COMM</span>
              <a href="tel:+918754856060" className="font-label-mono text-sm md:text-base text-on-surface hover:text-primary transition-colors cursor-crosshair">+91 87548 56060</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest">SOCIAL_LINK</span>
              <a href="https://www.instagram.com/timeless.aex/" target="_blank" rel="noopener noreferrer" className="font-label-mono text-sm md:text-base text-on-surface hover:text-primary transition-colors cursor-crosshair">@timeless.aex</a>
            </div>
          </div>
        </div>

        <div className="bg-[#111] border border-surface-variant p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant">
             <div className={`h-full transition-all duration-1000 ${status === 'transmitting' ? 'w-full bg-primary' : status === 'success' ? 'w-full bg-green-500' : status === 'error' ? 'w-full bg-red-600' : 'w-0'}`}></div>
          </div>
          
          {status === 'success' ? (
            <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center text-center animate-reveal">
              <span className="material-symbols-outlined text-5xl text-green-500 mb-4">task_alt</span>
              <h3 className="font-label-mono text-xl text-green-500 uppercase mb-2">SIGNAL TRANSMITTED</h3>
              <p className="font-label-mono text-xs text-secondary-fixed-dim uppercase tracking-widest">
                AWAITING_RESPONSE // ETA: 24_HOURS
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 font-label-mono text-xs text-on-background border border-surface-variant px-4 py-2 hover:border-primary hover:text-primary transition-colors cursor-crosshair uppercase"
              >
                Reset Commlink
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {status === 'error' && (
                <div className="font-label-mono text-[10px] text-primary bg-primary/10 border border-primary/20 p-3 uppercase tracking-widest">
                  TRANSMISSION FAILED. PLEASE TRY AGAIN.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase tracking-widest">NAME</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'transmitting'}
                    className="bg-surface-container border border-surface-variant px-4 py-3 font-label-mono text-sm text-on-background focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="ID_INPUT"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase tracking-widest">PHONE (OPTIONAL)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'transmitting'}
                    className="bg-surface-container border border-surface-variant px-4 py-3 font-label-mono text-sm text-on-background focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="VOICE_LINK"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase tracking-widest">EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'transmitting'}
                  className="bg-surface-container border border-surface-variant px-4 py-3 font-label-mono text-sm text-on-background focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="ADDRESS_LOCATOR"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-label-mono text-[10px] text-secondary-fixed-dim uppercase tracking-widest">MESSAGE</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'transmitting'}
                  className="bg-surface-container border border-surface-variant px-4 py-3 font-label-mono text-sm text-on-background focus:border-primary focus:outline-none transition-colors min-h-[120px] resize-none disabled:opacity-50"
                  placeholder="TRANSMISSION_DATA..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'transmitting'}
                className="mt-4 py-4 border border-[rgba(172,136,131,0.15)] bg-primary text-on-primary font-label-mono text-label-mono uppercase hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(190,17,17,0.3)] transition-all duration-300 cursor-crosshair tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'transmitting' ? (
                  <>
                    <span className="w-3 h-3 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                    TRANSMITTING...
                  </>
                ) : (
                  'TRANSMIT'
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
