const EventRegistration = require('../models/eventRegistrationModel');

const eventRegistrationResolvers = {
  Query: {
    getEventRegistrations: async () => {
      try {
        return await EventRegistration.find();
      } catch (error) {
        throw new Error('Error fetching event registrations');
      }
    },
  },
  Mutation: {
    createEventRegistration: async (_, { input }) => {
      try {
        const newEventRegistration = new EventRegistration(input);
        return await newEventRegistration.save();
      } catch (error) {
        throw new Error('Error creating event registration');
      }
    },
  },
};

module.exports = eventRegistrationResolvers;
