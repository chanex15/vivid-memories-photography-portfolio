import Logo from './Logo';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 2.5-6.315 6.022-6.315 1.686 0 3.134.125 3.556.181v4.123h-2.44c-1.983 0-2.366.942-2.366 2.324v3.267h4.56l-.594 3.667h-3.966v7.98h-4.772z" />
    </svg>
  );

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 relative overflow-hidden border-t border-slate-900">
      {/* Background soft water ripple */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full select-none pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-orange-500/5 rounded-full select-none pointer-events-none border-dashed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-4">
            <Logo size="md" light={true} />
            <p className="text-slate-400 font-light text-sm max-w-sm mt-2 leading-relaxed">
              Capturing life’s most meaningful moments in a way that feels real, vibrant, and unforgettable. Professional photography services based in Cagayan de Oro City.
            </p>
            
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1M36hxyFyY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:vividmemories.cdo@gmail.com"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:09051425224"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-200 font-sans font-bold text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a href="#home" className="text-sm font-light hover:text-blue-400 transition-colors">Home</a>
              <a href="#gallery" className="text-sm font-light hover:text-blue-400 transition-colors">Gallery</a>
              <a href="#about" className="text-sm font-light hover:text-blue-400 transition-colors">About Photographer</a>
              <a href="#services" className="text-sm font-light hover:text-blue-400 transition-colors">Services & Pricing</a>
              <a href="#contact" className="text-sm font-light hover:text-blue-400 transition-colors">Contact / Booking</a>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-200 font-sans font-bold text-sm uppercase tracking-widest">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 font-light text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-500 mt-0.5" />
                <a href="mailto:vividmemories.cdo@gmail.com" className="hover:text-blue-400 transition-colors truncate">
                  vividmemories.cdo@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-500 mt-0.5" />
                <a href="tel:09051425224" className="hover:text-blue-400 transition-colors">
                  09051425224
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Cagayan de Oro City,<br />Northern Mindanao, PH</span>
              </div>
              <div className="flex items-start gap-3 mt-1">
                <a
                  href="https://www.facebook.com/share/1M36hxyFyY/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline"
                >
                  <span>Visit Facebook Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
          <div>
            &copy; {currentYear} <span className="font-semibold text-slate-400">Vivid Memories Photography</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Designed with Passion</span>
            <span className="w-1 h-1 bg-slate-800 rounded-full" />
            <span>Freelance Photography CDO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
