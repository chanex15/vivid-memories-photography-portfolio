import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, MapPin, Copy, CheckCircle } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 2.5-6.315 6.022-6.315 1.686 0 3.134.125 3.556.181v4.123h-2.44c-1.983 0-2.366.942-2.366 2.324v3.267h4.56l-.594 3.667h-3.966v7.98h-4.772z" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'essential',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const phoneNum = '09051425224';
  const emailAddr = 'vividmemories.cdo@gmail.com';
  const fbLink = 'https://www.facebook.com/share/1M36hxyFyY/?mibextid=wwXIfr';

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        package: 'essential',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Parallax background flowing gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-blue-50/10 to-orange-50/10 select-none pointer-events-none" />
      
      {/* Ripples */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] pointer-events-none select-none opacity-20">
        <div className="ripple-circle w-full h-full border-blue-500/20" />
        <div className="ripple-circle w-full h-full border-blue-500/20" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Phone className="w-3 h-3" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
          >
            Let’s Capture Your <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Next Story</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Ready to secure your date? Or have a custom vision in mind? Send me a message below, or contact me directly through my socials. Let's make it unforgettable!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Cards (4 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-slate-800 border-b pb-4 border-slate-100"
            >
              Contact Information
            </motion.h3>

            <p className="text-slate-500 font-light text-sm -mt-2">
              Based in Cagayan de Oro City. Available for travel across Northern Mindanao and surrounding regions for custom shoots.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mt-2">
              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group p-5 rounded-2xl glass-light border border-slate-200/60 flex items-center gap-5 shadow-sm hover:shadow-md hover:border-blue-200/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Phone / Mobile</span>
                  <a href={`tel:${phoneNum}`} className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                    {phoneNum}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(phoneNum, 'phone')}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors relative"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <CheckCircle className="w-4 h-4 text-green-500 animate-bounce" /> : <Copy className="w-4 h-4" />}
                </button>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group p-5 rounded-2xl glass-light border border-slate-200/60 flex items-center gap-5 shadow-sm hover:shadow-md hover:border-blue-200/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="p-3.5 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Email Address</span>
                  <a href={`mailto:${emailAddr}`} className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors truncate block">
                    {emailAddr}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(emailAddr, 'email')}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <CheckCircle className="w-4 h-4 text-green-500 animate-bounce" /> : <Copy className="w-4 h-4" />}
                </button>
              </motion.div>

              {/* Facebook Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group p-5 rounded-2xl glass-light border border-slate-200/60 flex items-center gap-5 shadow-sm hover:shadow-md hover:border-blue-200/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="p-3.5 rounded-xl bg-blue-100 text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300 shadow-sm flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Facebook Page</span>
                  <a href={fbLink} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5">
                    <span>Vivid Memories</span>
                    <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-1.5 py-0.5 rounded border border-blue-100 group-hover:bg-white transition-colors">Visit</span>
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group p-5 rounded-2xl glass-light border border-slate-200/60 flex items-center gap-5 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="p-3.5 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Base Location</span>
                  <span className="text-base font-semibold text-slate-700">
                    Cagayan de Oro City
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="col-span-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateX: 1, rotateY: -1 }}
              className="p-8 sm:p-10 rounded-[2rem] glass-light border border-slate-200/70 shadow-xl relative overflow-hidden"
            >
              {/* Backglow inside form */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl" />

              <h3 className="text-2xl font-display font-bold text-slate-800 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative">
                
                {/* Name and Email in Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jayvee"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-sm text-slate-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jayvee@example.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Phone and Package */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone Number (Optional)</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="09123456789"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-sm text-slate-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="package" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Interested Package</label>
                    <select
                      id="package"
                      name="package"
                      value={formState.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-sm text-slate-700 cursor-pointer"
                    >
                      <option value="essential">Essential Memories (3K - 2Hrs)</option>
                      <option value="cinematic">Cinematic Storyteller (5K - 4Hrs)</option>
                      <option value="birthday">Birthday Photography</option>
                      <option value="event">Event Coverage</option>
                      <option value="custom">Custom Shoots</option>
                      <option value="portrait">Portrait Photography</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Shoot Details & Vision</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your shoot! Date, location, and any specific ideas or questions you have..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-sans text-sm text-slate-800 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md overflow-hidden relative group ${
                    isSubmitted
                      ? 'bg-green-500 shadow-green-200'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-blue-500/10 hover:shadow-lg'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
