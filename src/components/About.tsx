import { motion } from 'framer-motion';
import { Camera, MapPin, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Ripple & Lighting accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] pointer-events-none -z-10">
        <div className="ripple-circle w-full h-full border-blue-500/5"></div>
        <div className="ripple-circle w-full h-full border-blue-500/5" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photographer Image with Overlays */}
          <div className="col-span-1 lg:col-span-5 relative h-[500px] sm:h-[600px] w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm sm:max-w-md h-[450px] sm:h-[550px]"
            >
              {/* Backglow and background cards */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-orange-100/50 blur-2xl rounded-[40px] -z-20" />
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-3xl bg-blue-100/70 border border-blue-200/30 transform rotate-6 scale-100 -z-10" />
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-3xl bg-orange-50/70 border border-orange-200/30 transform -rotate-3 scale-100 -z-10" />

              {/* Main Profile Image */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
                <div className="absolute inset-0 bg-slate-200 animate-pulse">
                  {/* High quality portrait placeholder */}
                  <img
                    src="/images/im20.jpeg"
                    alt="Jayvee Joy Nacua - Vivid Memories"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onLoad={(e) => {
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) parent.classList.remove('animate-pulse');
                    }}
                  />
                </div>
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Floating badges for authenticity */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -left-4 sm:-left-8 top-1/4 p-4 rounded-2xl glass-light border border-white shadow-lg flex items-center gap-3"
              >
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 uppercase tracking-wide">Based In</h5>
                  <p className="text-sm font-medium text-slate-600">Cagayan de Oro City</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -right-4 sm:-right-8 bottom-1/4 p-4 rounded-2xl glass-light border border-white shadow-lg flex items-center gap-3"
              >
                <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-xl shadow-md">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-800 uppercase tracking-wide">Experience</h5>
                  <p className="text-sm font-medium text-slate-600">Active Since 2025</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: About Text */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-wider self-start"
              >
                <Heart className="w-3 h-3 fill-current" />
                <span>Behind the Lens</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
              >
                Hi, I’m <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Jayvee Joy Nacua</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-sm font-semibold text-blue-600 uppercase tracking-widest flex items-center gap-2"
              >
                <span>24 Years Old</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Freelance Photographer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                <span>Creative Behind VM</span>
              </motion.p>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-5 text-slate-600 font-light text-base md:text-lg leading-relaxed border-l-2 border-blue-100 pl-6 md:pl-8">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                What started as a simple hobby has grown into a true passion and profession. Photography began as something I genuinely enjoyed—capturing moments, experimenting with angles, and finding beauty in everyday scenes.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                What was once just a personal interest became something more meaningful when someone encouraged me to take it seriously. That idea stayed with me, and in 2025, I decided to pursue photography as a freelance career.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Since then, I’ve been dedicated to improving my craft and telling stories through my lens. I believe that every photo has the power to preserve emotions, memories, and details that words sometimes cannot express. Whether it’s a candid moment, a special event, or a carefully planned shoot, I aim to create images that feel authentic and timeless.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="font-medium text-slate-800"
              >
                Vivid Memories is more than just a name—it represents my goal of capturing life’s most meaningful moments in a way that feels real, vibrant, and unforgettable.
              </motion.p>
            </div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 md:p-8 rounded-2xl glass-light border border-blue-200/50 shadow-md flex gap-4 relative overflow-hidden group"
            >
              {/* Backglow for the quote */}
              <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-blue-600 to-orange-500 rounded-l-2xl" />
              <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
              
              <div className="text-4xl text-blue-300 font-serif font-black leading-none select-none">“</div>
              <div className="flex flex-col gap-2">
                <blockquote className="text-xl md:text-2xl font-display font-medium italic text-slate-800">
                  Photography, for me, is more than just taking pictures—it’s about capturing real moments and turning them into lasting memories.
                </blockquote>
                <cite className="not-italic text-xs font-bold uppercase tracking-widest text-slate-500 mt-2 block">— Jayvee Joy Nacua</cite>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
