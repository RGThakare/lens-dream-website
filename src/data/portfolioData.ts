
export interface Photo {
  id: number;
  category: string;
  src: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  story: string;
}

export const categories: Category[] = [
  { 
    id: 'all', 
    name: 'All',
    description: 'Complete collection',
    story: 'Explore our complete portfolio'
  },
  { 
    id: 'prewedding', 
    name: 'Pre-Wedding',
    description: 'Love stories begin',
    story: 'Pre-wedding photography captures the pure excitement and anticipation before the big day. These intimate sessions showcase the couple\'s unique love story in beautiful locations, creating timeless memories that reflect their personality and bond. From romantic sunset shoots to candid moments of laughter, each frame tells the story of love about to be celebrated.'
  },
  { 
    id: 'wedding', 
    name: 'Wedding',
    description: 'Sacred union ceremonies',
    story: 'Wedding day photography is about capturing the most sacred and joyous moments of your life. From the emotional first look to the sacred vows and traditional rituals, every moment is precious. We document the intricate ceremonies, the tears of joy, the blessings of elders, and the celebration of two families becoming one. Each photograph preserves the cultural richness and emotional depth of your special day.'
  },
  { 
    id: 'reception', 
    name: 'Reception',
    description: 'Celebration and festivities',
    story: 'Reception photography captures the pure joy and celebration following the ceremony. The dance floor energy, heartfelt speeches, family gatherings, and moments of unbridled happiness are all preserved forever. From the first dance as a married couple to the traditional games and festivities, we ensure every smile, every laugh, and every precious moment with loved ones is beautifully documented.'
  },
  { 
    id: 'haldi', 
    name: 'Haldi',
    description: 'Traditional pre-wedding rituals',
    story: 'Haldi ceremony photography celebrates one of the most vibrant and joyful pre-wedding traditions. The golden turmeric paste, applied with love by family and friends, creates beautiful, candid moments filled with laughter and blessings. These images capture the warmth of family bonds, the playful interactions, and the rich cultural significance of this auspicious ritual that brings good luck and purification before the wedding.'
  }
];

export const photos: Photo[] = [
  {
    id: 1,
    category: 'prewedding',
    src: '/lovable-uploads/77c8da1c-5163-44fe-b650-2a2106d585ad.png',
    title: 'Perfect Harmony',
    description: 'Beautiful moments before the big day'
  },
  {
    id: 2,
    category: 'prewedding',
    src: '/lovable-uploads/a7593116-39db-4041-b72c-5a047d95aa95.png',
    title: 'Love in Nature',
    description: 'Capturing pure joy and connection'
  },
  {
    id: 3,
    category: 'reception',
    src: '/lovable-uploads/56b00d9d-083a-40f3-b3e0-d96b857e8d34.png',
    title: 'Celebration of Joy',
    description: 'Friends and family sharing the happiness'
  },
  {
    id: 4,
    category: 'wedding',
    src: '/lovable-uploads/0a25f5fd-e755-43c8-bb5b-0825470bd5bd.png',
    title: 'Sacred Rituals',
    description: 'Traditional ceremonies filled with meaning'
  },
  {
    id: 5,
    category: 'wedding',
    src: '/lovable-uploads/3d3cd3c3-8395-434d-a189-cdf1f32941c1.png',
    title: 'Walking Together',
    description: 'The journey begins as one'
  },
  {
    id: 6,
    category: 'wedding',
    src: '/lovable-uploads/aeec02f2-2164-4c9c-8a87-ef3da357cd88.png',
    title: 'Groom Portrait',
    description: 'Handsome in traditional attire'
  },
  {
    id: 7,
    category: 'wedding',
    src: '/lovable-uploads/0aa3dca9-6e69-431c-a5b4-d8362d785ac9.png',
    title: 'Blessed Union',
    description: 'Two hearts becoming one'
  },
  {
    id: 8,
    category: 'wedding',
    src: '/lovable-uploads/9bef5ebc-a5aa-48e1-98a2-62b3ad5e02d7.png',
    title: 'Sacred Vows',
    description: 'Promises made under nature\'s blessing'
  },
  {
    id: 9,
    category: 'wedding',
    src: '/lovable-uploads/1c2c74b4-7fed-4064-834d-d3844d9448c6.png',
    title: 'Radiant Bride',
    description: 'Glowing with happiness and tradition'
  },
  {
    id: 10,
    category: 'wedding',
    src: '/lovable-uploads/ed1c71dd-5d56-45f1-b08b-29531786852d.png',
    title: 'Joyful Moments',
    description: 'Sharing laughter during the ceremony'
  },
  {
    id: 11,
    category: 'wedding',
    src: '/lovable-uploads/bfd6e606-1fca-4913-a83d-9a4a99b41d98.png',
    title: 'Sacred Bonds',
    description: 'Intimate moments during the rituals'
  },
  {
    id: 12,
    category: 'wedding',
    src: '/lovable-uploads/ba55e72f-4541-4185-9c0d-35ba855212e7.png',
    title: 'Family Celebration',
    description: 'Loved ones joining in the festivities'
  },
  {
    id: 13,
    category: 'wedding',
    src: '/lovable-uploads/67477bba-62be-4ffd-9980-b21986ab46b7.png',
    title: 'Sacred Fire',
    description: 'Traditional ceremony around the sacred fire'
  },
  {
    id: 14,
    category: 'prewedding',
    src: '/lovable-uploads/e2188e1c-07cd-48e4-909b-8944a40b628d.png',
    title: 'Elegant Portrait',
    description: 'Sophisticated pre-wedding styling'
  },
  {
    id: 15,
    category: 'reception',
    src: '/lovable-uploads/16229d41-ccb7-4571-b842-2cb8723d98ec.png',
    title: 'Elder Blessings',
    description: 'Grandmothers sharing their wisdom'
  },
  {
    id: 16,
    category: 'haldi',
    src: '/lovable-uploads/bffee3a0-1752-47e7-ac96-49ae289e5cb3.png',
    title: 'Golden Blessings',
    description: 'Traditional haldi ceremony moments'
  }
];
