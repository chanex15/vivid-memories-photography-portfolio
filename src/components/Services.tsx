import { motion } from 'framer-motion';
import { Camera, Image, Users, Sparkles, Check, Clock, Video, FileVideo } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: <Camera className="w-6 h-6 text-orange-600" />,
      title: 'Birthday Photography',
      description: 'Fun, vibrant, and heartfelt birthday coverage that preserves every smile, surprise, and celebration.',
      bg: 'from-orange-500/10 to-amber-500/0'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Event Photography',
      description: 'Comprehensive coverage for celebrations, gatherings, and special occasions that keeps memories alive.',
      bg: 'from-blue-500/10 to-indigo-500/0'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: 'Custom Shoots',
      description: 'Open to creative concepts, unique styling, and artistic collaborations based entirely on your vision.',
      bg: 'from-indigo-500/10 to-purple-500/0'
    },
    {
      icon: <Image className="w-6 h-6 text-blue-600" />,
      title: 'Portrait Photography',
      description: 'Personal, creative, and lifestyle portraits that reflect your unique personality and style.',
      bg: 'from-sky-500/10 to-blue-500/0'
    },
  ];

  const packages = [
    {
      name: 'Essential Memories',
      price: '3,000',
      duration: '2 Hours',
      type: 'Photos Only',
      description: 'Perfect for creative portraits, birthday shoots, or intimate personal sessions.',
      popular: false,
      features: [
        '2 hours of continuous shooting',
        'Unlimited shots captured',
        'High-resolution edited digital copies',
        'Personal online gallery delivery',
        'Professional color grading & enhancing',
        'Birthday, Portrait, or Custom focuses',
        '1-week turnaround time'
      ],
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      gradient: 'from-blue-50 to-sky-50',
      buttonBg: 'bg-white text-blue-700 border border-blue-200 hover:bg-blue-50',
      accent: 'border-blue-200 shadow-blue-100/50'
    },
    {
      name: 'Cinematic Storyteller',
      price: '5,000',
      duration: '4 Hours',
      type: 'Photos + Video',
      description: 'Ideal for events, birthday celebrations, and dynamic storytelling with video.',
      popular: true,
      features: [
        '4 hours of continuous shooting',
        'Unlimited shots captured',
        'Simple cinematic video editing',
        'High-resolution edited digital photos',
        'Personal online gallery delivery',
        'Professional color grading & audio syncing',
        'Event, Birthday, or Custom focuses',
        '5-7 days rapid turnaround time'
      ],
      icon: <Video className="w-8 h-8 text-white" />,
      gradient: 'from-blue-600 to-indigo-700 text-white',
      buttonBg: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-105',
      accent: 'border-blue-400 shadow-blue-500/20 scale-105'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Water element background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 select-none overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[800px] h-[800px] ripple-circle border-blue-500/5" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] ripple-circle border-orange-500/5" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3 h-3" />
            <span>Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
          >
            My <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Crafting tailored visual experiences. From personal portraits to commercial imagery and full event coverages, I bring professionalism and heart to every frame.
          </motion.p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl glass-light border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group overflow-hidden"
            >
              {/* Animated hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

              {/* Icon Container */}
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-300 mb-4 text-center flex items-center justify-center">
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-slate-800 font-sans mb-2">
                {service.title}
              </h3>
              
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight"
          >
            Transparent <span className="text-blue-600">Pricing Packages</span>
          </motion.h2>
          <p className="text-slate-500 text-sm mt-2">No hidden fees. Just authentic memories captured in premium quality.</p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto items-stretch justify-center px-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex-1 flex flex-col rounded-[2rem] border overflow-hidden p-8 sm:p-10 shadow-xl transition-all duration-500 bg-gradient-to-b ${pkg.gradient} ${pkg.accent} group`}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ 
                rotateY: index === 0 ? 3 : -3, 
                rotateX: 3, 
                y: -10,
                boxShadow: pkg.popular ? '0 25px 50px -12px rgba(37, 99, 235, 0.4)' : '0 20px 40px -12px rgba(15, 23, 42, 0.15)'
              }}
            >
              {/* Ribbon for Popular Package */}
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-[10px] uppercase tracking-widest px-8 py-2 rotate-45 translate-x-8 translate-y-3 shadow-sm select-none">
                    Best Value
                  </div>
                </div>
              )}

              {/* Water ripple subtle bg for cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-current opacity-5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-sans tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-1 ${pkg.popular ? 'text-blue-100' : 'text-slate-400'} font-light`}>
                    {pkg.description}
                  </p>
                </div>
                
                <motion.div 
                  style={{ translateZ: 30 }}
                  className={`p-4 rounded-2xl ${pkg.popular ? 'bg-blue-500/20 border border-white/20' : 'bg-blue-50 border border-blue-100'} shadow-inner flex items-center justify-center`}
                >
                  {pkg.icon}
                </motion.div>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline border-b pb-6 border-current border-opacity-10">
                <span className="text-4xl sm:text-5xl font-display font-bold">
                  ₱{pkg.price}
                </span>
                <span className={`text-sm font-medium ml-2 ${pkg.popular ? 'text-blue-200' : 'text-slate-500'}`}>
                  / Session
                </span>
              </div>

              {/* Quick Details */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className={`p-3 rounded-xl flex items-center gap-2.5 ${pkg.popular ? 'bg-white/10 border border-white/10' : 'bg-slate-100 border border-slate-200/50'}`}>
                  <Clock className={`w-4 h-4 ${pkg.popular ? 'text-orange-400' : 'text-blue-600'}`} />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-current opacity-60 block leading-none">Duration</span>
                    <span className="text-xs font-bold font-sans">{pkg.duration}</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-xl flex items-center gap-2.5 ${pkg.popular ? 'bg-white/10 border border-white/10' : 'bg-slate-100 border border-slate-200/50'}`}>
                  {pkg.popular ? (
                    <FileVideo className="w-4 h-4 text-orange-400" />
                  ) : (
                    <Image className="w-4 h-4 text-blue-600" />
                  )}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-current opacity-60 block leading-none">Coverage</span>
                    <span className="text-xs font-bold font-sans">{pkg.type}</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {pkg.features.map((feature, fIndex) => (
                  <motion.li
                    key={fIndex}
                    style={{ translateZ: 15 }}
                    className="flex items-start gap-3 text-sm font-light"
                  >
                    <div className={`mt-0.5 p-0.5 rounded-full ${pkg.popular ? 'bg-orange-500 text-white' : 'bg-blue-100 text-blue-600'}`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-current opacity-90">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Call to Action */}
              <motion.a
                style={{ translateZ: 40 }}
                href="#contact"
                className={`w-full py-4 text-center font-semibold text-sm rounded-xl block transition-all duration-300 ${pkg.buttonBg}`}
              >
                Book This Package
              </motion.a>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
