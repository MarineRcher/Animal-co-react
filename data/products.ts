export type product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
};

export const products: product[] = [
  {
    id: 1,
    category: 'dog',
    name: 'croquettes',
    description: 'blablaba',
    price: 10,
  },
  {
    id: 2,
    category: 'dog',
    name: 'balle',
    description: 'hwefghwekfj',
    price: 7,
  },
  {
    id: 3,
    category: 'cat',
    name: 'herbe à chat',
    description: 'blablewfewffewwwaba',
    price: 4,
  },
  {
    id: 4,
    category: 'cat',
    name: 'jouet',
    description: 'qqswdwdqqwwdqwblablaba',
    price: 23,
  },
];
