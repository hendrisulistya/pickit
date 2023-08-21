import { Product } from "./productData";
import mustard from './image/jilbab/mustard.jpg'
import mocca from './image/jilbab/mocca.jpg'
import maroon from './image/jilbab/maroon.jpg'
import dustypink from './image/jilbab/dustypink.jpg'

export const jilbabProducts: Product[] = [
    {
        id: 1,
        name: 'Jilbab Mustard',
        category: 'Jilbab',
        image: mustard,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        name: 'Jilbab Mocca',
        category: 'Jilbab',
        image: mocca,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 3,
        name: 'Jilbab Maroon',
        category: 'Jilbab',
        image: maroon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 4,
        name: 'Jilbab Dusty Pink',
        category: 'Jilbab',
        image: dustypink,
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
  ];