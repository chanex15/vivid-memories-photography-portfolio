import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Motion values for mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transforms for various layers
  const bgX = useTransform(springX, [-500, 500], [-15, 15]);
  const bgY = useTransform(springY, [-500, 500], [-15, 15]);
  
  const midX = useTransform(springX, [-500, 500], [-30, 30]);
  const midY = useTransform(springY, [-500, 500], [-30, 30]);
  
  const fgX = useTransform(springX, [-500, 500], [-45, 45]);
  const fgY = useTransform(springY, [-500, 500], [-45, 45]);

  const rotateX = useTransform(springY, [-500, 500], [10, -10]);
  const rotateY = useTransform(springX, [-500, 500], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of screen (-width/2 to width/2)
    const clientX = event.clientX - rect.left - width / 2;
    const clientY = event.clientY - rect.top - height / 2;
    
    mouseX.set(clientX);
    mouseY.set(clientY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/40 overflow-hidden pt-20 perspective-1000"
    >
      {/* Background Water Elements & Flowing Gradients */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        {/* Animated Water Gradient */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-blue-300/30 via-sky-100/10 to-orange-200/20 animate-water-flow" />
        
        {/* Animated Ripples */}
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="ripple-circle w-full h-full" style={{ animationDelay: '0s' }}></div>
          <div className="ripple-circle w-full h-full" style={{ animationDelay: '2s' }}></div>
          <div className="ripple-circle w-full h-full" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2">
          <div className="ripple-circle w-full h-full border-orange-500/10" style={{ animationDelay: '1s' }}></div>
          <div className="ripple-circle w-full h-full border-orange-500/10" style={{ animationDelay: '3s' }}></div>
          <div className="ripple-circle w-full h-full border-orange-500/10" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Floating Abstract Water Blobs */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-blue-300/30 blur-3xl rounded-full"
        />
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute bottom-1/3 left-10 w-80 h-80 bg-gradient-to-r from-sky-200/30 to-blue-100/30 blur-3xl rounded-full"
        />
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-24 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rotate-12 blur-md"
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-120px)] py-12">
          
          {/* Left Column: Text Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center space-y-8 text-center lg:text-left">


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-tight text-slate-900">
                Preserving <span className="relative inline-block text-glow">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">Emotions</span>
                  <svg className="absolute bottom-1 left-0 w-full h-3 text-blue-200/70 -z-10 fill-current" viewBox="0 0 300 20" preserveAspectRatio="none">
                    <path d="M0,15 C50,5 150,5 200,15 C250,25 280,20 300,15 L300,20 L0,20 Z" />
                  </svg>
                </span>
                <br />
                and Turning Moments into <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent text-glow-warm">Memories</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Hi, I'm <span className="font-semibold text-slate-800">Jayvee Joy Nacua</span>. I capture real, vibrant, and unforgettable stories through my lens—whether it's a candid smile, an intimate pre-nup, or a grand event.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              {/* Call to Action 1 */}
              <a
                href="#gallery"
                className="group relative px-8 py-4 w-full sm:w-auto text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg box-glow-blue hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 border border-blue-400/20 overflow-hidden transform-style-3d hover:perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              {/* Call to Action 2 */}
              <a
                href="#services"
                className="px-8 py-4 w-full sm:w-auto text-center font-semibold text-blue-700 glass-light rounded-full shadow-sm hover:shadow-md hover:bg-white/80 border border-blue-200/50 transition-all duration-300"
              >
                View Packages
              </a>
            </motion.div>

            {/* Social / Stats floating bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="text-3xl font-bold text-slate-800 font-display">16+</span>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Showcased Works</p>
              </div>
              <div className="border-x border-slate-200">
                <span className="text-3xl font-bold text-slate-800 font-display">100%</span>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Passion & Drive</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-800 font-display">CDO</span>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Location Base</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Layered Image Parallax */}
          <div className="col-span-1 lg:col-span-6 relative h-[450px] sm:h-[550px] flex items-center justify-center">
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] rounded-3xl shadow-2xl overflow-visible transform-style-3d"
            >
              {/* Backglow behind the main card */}
              <motion.div
                style={{ x: bgX, y: bgY }}
                className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-orange-400/10 blur-2xl rounded-[40px] pointer-events-none -z-10"
              />

              {/* Layer 1: Background Glass Card */}
              <motion.div
                style={{ x: bgX, y: bgY, translateZ: -20 }}
                className="absolute inset-0 rounded-[2.5rem] glass-light border border-white/40 shadow-inner -z-10"
              />

              {/* Layer 2: Main Image Card */}
              <motion.div
                style={{ x: midX, y: midY, translateZ: 20 }}
                className="w-full h-full rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl relative group"
              >
                {/* Main Cinematic Image representing photography (Cinematic Couple / Portrait) */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse">
                  <img
                    src="/images/im21.jpeg"
                    alt="Vivid Memories Photography"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onLoad={(e) => {
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) parent.classList.remove('animate-pulse');
                    }}
                  />
                </div>
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60" />

                {/* Floating camera overlay at the bottom of the card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border border-white/10 flex items-center gap-4 text-white">
                  <div className="p-3 rounded-xl bg-blue-500 shadow-md">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold font-sans">Vivid Memories</h4>
                    <p className="text-xs text-slate-300">Jayvee Joy Nacua Photography</p>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3: Floating Foreground Elements (Parallax) */}
              {/* Floating Image 2: Portrait */}
              <motion.div
                style={{ x: fgX, y: fgY, translateZ: 60 }}
                className="absolute -top-10 -left-12 sm:-left-16 w-36 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 z-20"
              >
                <img
                  src="/images/im6.jpeg"
                  alt="Portrait Photography"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Image 3: Event/Details */}
              <motion.div
                style={{ x: fgX, y: fgY, translateZ: 80 }}
                className="absolute -bottom-6 -right-10 sm:-right-16 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white/90 z-20"
              >
                <img
                  src="/images/im2.jpeg"
                  alt="Event Photography"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative Camera Aperture Ring */}
              <motion.div
                style={{ x: fgX, y: fgY, translateZ: 10 }}
                className="absolute top-1/3 -right-6 w-16 h-16 rounded-full glass-light border border-orange-200 shadow-md z-10 flex items-center justify-center animate-[spin_20s_linear_infinite]"
              >
                <div className="w-10 h-10 rounded-full border border-orange-500 border-dashed" />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>


    </section>
  );
}
