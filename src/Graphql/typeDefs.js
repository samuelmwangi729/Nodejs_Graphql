
const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Institution {
    id: ID!
    name: String!
    email: String
    address: String
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateInstitutionInput {
    name: String!
    email: String
    address: String
  }

  input UpdateInstitutionInput {
    name: String
    email: String
    address: String
    status: String
    }

  type Query {
    institutions: [Institution!]!
    institution(id: ID!): Institution
  }

  type Mutation {
    createInstitution(input: CreateInstitutionInput!): Institution!
    updateInstitution(
        id: ID!
        input: UpdateInstitutionInput!
    ): Institution!
  }
`;

module.exports = typeDefs;
