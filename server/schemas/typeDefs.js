const { gql } = require('apollo-server-express');

const typeDefs = gql`
input userSaveBook {
    authors: [String] 
    description: String 
    title: String! 
    bookId: String! 
    image: String
    link: String
}

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
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: userSaveBook): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;