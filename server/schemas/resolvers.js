const { User, Book } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            return await User.findById(args.id).populate('savedBooks');
        }
    },
    Mutation: {
        // TODO: CHECK HOW TO USE AUTH IN THE BELOW MUTATIONS
        login: async (parent, { email, password }) => {
            return await Auth.
        },
        addUser: async (parent, { username, email, password }) => {

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