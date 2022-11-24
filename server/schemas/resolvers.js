const { User, Book } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            return await User.findById(args.id).populate('books');
        }
    }

}

module.exports = resolvers;