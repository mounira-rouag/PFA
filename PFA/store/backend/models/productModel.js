import mongoose from 'mongoose';
// Définit un objet de schéma qui spécifie la structure de l'entité "produit" et les propriétés de chaque champ. Le schéma définit un certain nombre de champs qui ont des types spécifiques (par exemple, "name" doit être de type String et est requis).
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  //    Ces champs suivent les dates de création et de mise à jour du document respectivement.
  {
    timestamps: true,
  }
);
// Crée un modèle MongoDB appelé "Product" à partir du schéma "productSchema". Le modèle peut être utilisé pour interagir avec la base de données MongoDB à travers Mongoose.
const Product = mongoose.model('Product', productSchema);
export default Product;
// ce code est utilisé pour définir la structure de la base de données et fournir une interface d'accès à celle-ci pour l'entité "produit" dans une application Node.js.
