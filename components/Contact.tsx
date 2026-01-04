import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xqeagdea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please check your internet and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-paper">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-heading font-bold text-brand-deepBlue mb-8">Request a Proposal.</h1>
            <p className="text-xl text-brand-mutedGray mb-12">
              Tell us your objectives. Whether it’s an election campaign, an Indian film release, a business strategy, or a Tech Support. Our experts are equipped to support you at every stage.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm text-brand-gold">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray mb-1">Email</p>
                  <p className="text-lg font-bold text-brand-deepBlue">emoscept@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm text-brand-gold">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray mb-1">Direct</p>
                  <p className="text-lg font-bold text-brand-deepBlue">9966890704</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm text-brand-gold">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray mb-1">Office</p>
                  <p className="text-lg font-bold text-brand-deepBlue">Hno: 101, Punjagutta, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-2xl rounded-sm">
            {submitted ? (
              <div className="text-center py-20 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-deepBlue mb-2">Proposal Requested</h3>
                <p className="text-brand-mutedGray">An expert from our strategy team will be in touch within 12 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-brand-gold font-bold underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-center gap-3 text-sm">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray">Full Name</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-gold focus:outline-none p-3 transition-colors" 
                      placeholder="Rahul Sharma" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray">Company</label>
                    <input 
                      required 
                      name="company"
                      type="text" 
                      className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-gold focus:outline-none p-3 transition-colors" 
                      placeholder="Aditya Birla Group / Reliance Industries" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray">Vertical</label>
                  <select 
                    name="vertical"
                    className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-gold focus:outline-none p-3 transition-colors"
                  >
                    <option>Business Consulting</option>
                    <option>Political Consulting</option>
                    <option>Entertainment Analytics</option>
                    <option>Platform Demo Request</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-mutedGray">Brief Description</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    required
                    className="w-full bg-brand-paper border-b-2 border-transparent focus:border-brand-gold focus:outline-none p-3 transition-colors" 
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-deepBlue text-white font-bold py-4 uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-deepBlue transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>Processing <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Submit RFP <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;