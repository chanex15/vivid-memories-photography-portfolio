import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData, PortfolioItem } from '../data/portfolio';
import { Maximize2, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

// 3D Tilt Card Component
function GalleryCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseSpringConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), mouseSpringConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), mouseSpringConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Position relative to the center of the card (-0.5 to 0.5)
    const px = (event.clientX - rect.left) / width - 0.5;
    const py = (event.clientY - rect.top) / height - 0.5;
    
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Define aspect ratio classes
  const aspectClass = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
  }[item.aspect];

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer group border border-slate-100 bg-slate-100`}
    >
      {/* 3D Depth Layers */}
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Water Ripple Accent (on hover) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full opacity-0 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700 ease-out z-10 pointer-events-none" />

      {/* Glassmorphism Content Card */}
      <motion.div
        style={{ translateZ: 30 }}
        className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-light border border-white/20 shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 pointer-events-none"
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/50">
              {item.category}
            </span>
            <h3 className="text-base font-semibold text-slate-800 mt-2 font-sans">{item.title}</h3>
          </div>
          <div className="p-2 rounded-full bg-blue-600 text-white shadow-sm">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-1.5 font-light line-clamp-2">
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Birthday' | 'Event' | 'Custom Shoots' | 'Portrait'>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories: ('All' | 'Birthday' | 'Event' | 'Custom Shoots' | 'Portrait')[] = [
    'All', 'Birthday', 'Event', 'Custom Shoots', 'Portrait'
  ];

  const filteredData = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredData.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredData.length) % filteredData.length);
    }
  };

  const currentItem = selectedItemIndex !== null ? filteredData[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-100/30 to-sky-100/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-orange-100/20 to-blue-50/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Filter className="w-3 h-3" />
            <span>Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
          >
            A Glimpse into <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Vivid Stories</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Explore our curated showcase of emotion, connection, and craftsmanship across various styles. Every image is a moment frozen in time, carefully captured and polished.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl glass-light border border-slate-200/50 shadow-sm max-w-4xl"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                  activeFilter === category
                    ? 'text-blue-700 font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50/50'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-blue-100/50 -z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => {
              // Re-find the index in the filtered list
              const idx = filteredData.findIndex(i => i.id === item.id);
              return (
                <GalleryCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItemIndex(idx)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItemIndex(null)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-6 p-4 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer z-10 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-6 p-4 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer z-10 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Main Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col md:flex-row bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 max-h-[90vh]"
            >
              {/* Image side */}
              <div className="flex-1 bg-black flex items-center justify-center relative overflow-hidden h-[45vh] md:h-auto">
                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text side */}
              <div className="w-full md:w-80 bg-slate-900 p-6 md:p-8 flex flex-col justify-center text-white border-t md:border-t-0 md:border-l border-slate-800 overflow-y-auto">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-950/40 border border-orange-800/50 px-2.5 py-1 rounded-full self-start mb-4">
                  {currentItem.category}
                </span>
                
                <h3 className="text-2xl font-display font-bold text-slate-50">
                  {currentItem.title}
                </h3>
                
                <p className="text-slate-400 font-light mt-4 text-sm leading-relaxed">
                  {currentItem.description}
                </p>

                <div className="border-t border-slate-800 my-6 pt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="w-20 font-medium uppercase text-slate-500">Photographer</span>
                    <span className="text-slate-200">Jayvee Joy Nacua</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="w-20 font-medium uppercase text-slate-500">Location</span>
                    <span className="text-slate-200">Cagayan de Oro City</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="w-20 font-medium uppercase text-slate-500">Gear</span>
                    <span className="text-slate-200">DSLR</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedItemIndex(null)}
                  className="mt-4 block text-center py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-semibold text-sm transition-all shadow-md shadow-blue-500/10 hover:shadow-lg"
                >
                  Book a Similar Shoot
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
