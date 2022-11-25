const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            return await User.findById(args.id).populate('savedBooks');
        }
    },
    Mutation: {
        // TODO: CHECK HOW TO USE AUTH IN THE BELOW MUTATIONS
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user};
        },
        saveBook: async (parent, { input }) => {
            return await User.findOneAndUpdate
        },
        removeBook: async (parent, { bookId }) => {
            return await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId } } },
                { new: true }
            )
        }
    }
}

module.exports = resolvers;