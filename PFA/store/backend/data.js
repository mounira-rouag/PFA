import bcrypt from 'bcryptjs';
//define data as Object
const data = {
  //product as a array of object

  users: [
    {
      name: 'Malak',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //propeties
      //_id: '1',
      name: 'Mangeoire intelligente ',
      slug: 'Mangeoire intelligente pour animaux de compagnie', //apparait dans l'URL
      category: 'Mangeoire ',
      image: '/images/img.webp', // 679px × 829px
      price: 120,
      countInStock: 10, //nombre des  items qui trouve dans le stock
      brand: 'Tuya',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality ',
    },
    {
      //_id: '2',
      name: 'sacs de merde  pour chat',
      slug: 'sacs de merde  pour chat',
      category: 'sac',
      image: '/images/img1.webp',
      price: 250,
      countInStock: 20,
      brand: ' PVC',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'poussière naturelle a chat',
      slug: 'poussière naturelle en usine pour chat',
      category: 'poussière ',
      image: '/images/img2.webp',
      price: 25,
      countInStock: 15,
      brand: 'OEM',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'arbre à chat',
      slug: 'meuble de maison, arbre à chat, cadre descalade',
      category: 'maison',
      image: '/images/img3.webp',
      price: 65,
      countInStock: 5,
      brand: 'Hamaca',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality ',
    },
  ],
};
export default data;
