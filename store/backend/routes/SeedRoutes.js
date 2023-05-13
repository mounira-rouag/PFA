//L'objectif de cette route est de supprimer toutes les données existantes de la base de données et de les remplacer par de nouvelles données pour les utilisateurs et les produits, qui sont stockées dans le module "data.js".

import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
// Cette ligne crée une instance de routeur Express en utilisant la méthode Router() d'Express. Le routeur est stocké dans la variable "seedRouter".
const seedRouter = express.Router();
// Cette méthode GET du routeur Express définit une fonction asynchrone qui sera appelée lorsqu'un client fera une requête GET sur la route "/".
// À l'intérieur de cette fonction, les méthodes deleteMany() de Mongoose sont utilisées pour supprimer toutes les données existantes de la collection de produits et de la collection d'utilisateurs. Ensuite, les méthodes insertMany() sont utilisées pour insérer les nouvelles données à partir du fichier "data.js" dans les collections correspondantes.
// Une fois que les données ont été insérées, un objet JSON contenant les produits et les utilisateurs nouvellement créés est renvoyé en réponse à la requête.
seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
