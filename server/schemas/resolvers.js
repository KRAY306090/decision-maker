const { Decision, User } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
            const userData = await User.findOne({})
                .select('-__v -password')
                .populate('decisions')

            return userData;
            }
            throw new AuthenticationError('Not Logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('decisions')
        },
        decision: async (parent, { _id }) => {
            return Decision.findOne({ _id });
        },
        decisions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Decision.find(params).sort({ createdAt: -1 });
        },

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            token = signToken(user);
            return { token, user };
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });
            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addDecision: async (parent, args, context) => {
            if(context.user) {
                const decision = await Decision.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { decisions: decision._id } },
                    { new: true }
                );

                return decision;
            }

            throw new AuthenticationError('You need to be logged in!');
        }

    }
}

module.exports = resolvers;
