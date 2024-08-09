const Community = require('../models/communityModel');

const communityResolvers = {
  Query: {
    communities: async () => {
      return await Community.find();
    },
  },
  Mutation: {
    createCommunity: async (_, { input }) => {
      const newCommunity = new Community(input);
      return await newCommunity.save();
    },
    editCommunity: async (_, { id, input }) => {
      return await Community.findByIdAndUpdate(id, input, { new: true });
    },
    deleteCommunity: async (_, { id }) => {
      return await Community.findByIdAndRemove(id);
    },
  },
};

module.exports = communityResolvers;
