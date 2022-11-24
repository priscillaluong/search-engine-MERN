const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
}

type Auth {
    token: String
    user: User
}

type Query {
    me(id: ID!): User
    books: [Book]
}

type Mutation {
    login
}
`;

module.exports = typeDefs;