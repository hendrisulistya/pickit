// productData.ts

import mustard from './image/jilbab/mustard.jpg'
import mocca from './image/jilbab/mocca.jpg'
import maroon from './image/jilbab/maroon.jpg'
import dustypink from './image/jilbab/dustypink.jpg'


type Product = {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
  };
  
export const productData: Product[] = [
  {
    id: 1,
    name: 'Jilbab Mustard',
    category: 'Jilbab',
    image: mustard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 11,
    name: 'Jilbab Mocca',
    category: 'Jilbab',
    image: mocca,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 12,
    name: 'Jilbab Maroon',
    category: 'Jilbab',
    image: maroon,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 13,
    name: 'Jilbab Dusty Pink',
    category: 'Jilbab',
    image: dustypink,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Product C',
    category: 'Sandal',
    image: 'path/to/productC.jpg',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    name: 'Product D',
    category: 'Sepatu',
    image: 'path/to/productD.jpg',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 5,
    name: 'Product E',
    category: 'Tas',
    image: 'path/to/productE.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    name: 'Product F',
    category: 'Tas',
    image: 'path/to/productF.jpg',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  ];
  