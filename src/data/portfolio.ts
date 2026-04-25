export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Birthday' | 'Event' | 'Custom Shoots' | 'Portrait';
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'b1',
    title: 'Birthday Girl',
    category: 'Birthday',
    imageUrl: '/images/im1.jpeg',
    aspect: 'portrait',
    description: 'Capturing milestone celebrations with warmth, joy, and vibrant energy.'
  },
  {
    id: 'e1',
    title: 'Grand Ballroom Toast',
    category: 'Event',
    imageUrl: '/images/im10.jpeg',
    aspect: 'landscape',
    description: 'Capturing the peak of celebrations with warmth and elegant lighting.'
  },
  {
    id: 'cs1',
    title: 'Vintage Nostalgia',
    category: 'Custom Shoots',
    imageUrl: '/images/im11.jpeg',
    aspect: 'portrait',
    description: 'A creative concept shoot.'
  },
  {
    id: 'p1',
    title: 'Serene Musings',
    category: 'Portrait',
    imageUrl: '/images/im14.jpeg',
    aspect: 'square',
    description: 'Soft lighting portrait exploring emotional depths and serene expressions.'
  },
  {
    id: 'b2',
    title: 'Birthday Girl',
    category: 'Birthday',
    imageUrl: '/images/im2.jpeg',
    aspect: 'portrait',
    description: 'A fun and lively birthday party filled with laughter and colorful moments.'
  },
  {
    id: 'p2',
    title: 'Golden Hour Glow',
    category: 'Portrait',
    imageUrl: '/images/im15.jpeg',
    aspect: 'portrait',
    description: 'Embracing natural sunlight to highlight genuine expressions and warmth.'
  },
  {
    id: 'cs2',
    title: 'Vintage Nostalgia',
    category: 'Custom Shoots',
    imageUrl: '/images/im12.jpeg',
    aspect: 'landscape',
    description: 'Creative conceptual photography with lights and deep contrasts.'
  },
  {
    id: 'e2',
    title: 'Candid',
    category: 'Event',
    imageUrl: '/images/im8.jpeg',
    aspect: 'landscape',
    description: 'Spontaneous moments preserved forever in crystalline detail.'
  },
  {
    id: 'b3',
    title: 'Birthday Girl',
    category: 'Birthday',
    imageUrl: '/images/im4.jpeg',
    aspect: 'portrait',
    description: 'A heartwarming birthday celebration full of smiles and sweetness.'
  },
  {
    id: 'p3',
    title: 'Urban Soul',
    category: 'Portrait',
    imageUrl: '/images/im19.jpeg',
    aspect: 'portrait',
    description: 'Candid street portrait capturing personality and style in motion.'
  },
  {
    id: 'cs3',
    title: 'Ethereal Reflections',
    category: 'Custom Shoots',
    imageUrl: '/images/im16.jpeg',
    aspect: 'landscape',
    description: 'reflections merged with cinematic lighting effects.'
  },
  {
    id: 'e3',
    title: 'Highlights',
    category: 'Event',
    imageUrl: '/images/im7.jpeg',
    aspect: 'square',
    description: 'Documenting the most meaningful moments.'
  },
  {
    id: 'p4',
    title: 'Golden Hour Glow',
    category: 'Portrait',
    imageUrl: '/images/im17.jpeg',
    aspect: 'portrait',
    description: 'Classic portrait focusing on raw emotion and texture.'
  },
  {
    id: 'b4',
    title: 'Birthday Girl',
    category: 'Birthday',
    imageUrl: '/images/im5.jpeg',
    aspect: 'landscape',
    description: 'The pure excitement and genuine surprise captured in one unforgettable frame.'
  },
  {
    id: 'e4',
    title: 'Unforgettable Nights',
    category: 'Event',
    imageUrl: '/images/im9.jpeg',
    aspect: 'portrait',
    description: 'Dynamic event photography full of energy, emotion, and vivid colors.'
  },
  {
    id: 'cs4',
    title: 'Vintage Nostalgia',
    category: 'Custom Shoots',
    imageUrl: '/images/im18.jpeg',
    aspect: 'landscape',
    description: 'A retro-inspired concept shoot using authentic styling and warm filters.'
  },
];
