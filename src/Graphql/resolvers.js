
const institutionController = require("../Controllers/institutionController");

const resolvers = {
    Query: {
        institutions: async () => {
            return await institutionController.getInstitutions();
        },

        institution: async (_, { id }) => {
            return await institutionController.getInstitutionById(id);
        },
    },

    Mutation: {
        createInstitution: async (_, { input }) => {
            return await institutionController.createInstitution(input);
        },

        updateInstitution: async (_, { id, input }) => {
            return await institutionController.updateInstitution(id, input);
        },

    },
};

module.exports = resolvers;
