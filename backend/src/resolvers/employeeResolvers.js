const Employee = require('../models/employeeModel');

const resolvers = {
  Query: {
    employees: async () => await Employee.find(),
  },
  Mutation: {
    createEmployee: async (_, { input }) => {
      const newEmployee = new Employee(input);
      await newEmployee.save();
      return newEmployee;
    },
  },
};

module.exports = resolvers;
