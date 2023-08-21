import { Product } from "./productData";
import bag1 from './image/tas/bag1.jpg'
import bag2 from './image/tas/bag2.jpg'
import bag3 from './image/tas/bag3.jpg'

export const tasProduct: Product[] = [
    {
        id: 301,
        name: 'Product E',
        category: 'Tas',
        image: bag1,
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 302,
        name: 'Product F',
        category: 'Tas',
        image: bag2,
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
        id: 303,
        name: 'Product F',
        category: 'Tas',
        image: bag3,
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
]