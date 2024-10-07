// src/graphql/resolvers.js
import ProductModel from '../models/Product'; // Adjust the import path as needed

const resolvers = {
  Query: {
    listProducts: async () => {
      // Fetch products from your data source (e.g., DynamoDB)
      return await ProductModel.scan().exec(); // Example for DynamoDB
    },
  },
  Mutation: {
    createProduct: async (_, { input }) => {
      const newProduct = new ProductModel(input);
      await newProduct.save(); // Save to your data source
      return newProduct;
    },
    updateProduct: async (_, { input }) => {
      const updatedProduct = await ProductModel.findByIdAndUpdate(input.id, input, { new: true });
      return updatedProduct;
    },
    deleteProduct: async (_, { input }) => {
      const deletedProduct = await ProductModel.findByIdAndDelete(input.id);
      return deletedProduct;
    },
  },
};

export default resolvers;
