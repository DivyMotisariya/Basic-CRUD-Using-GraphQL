const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

module.exports.BookType = new GraphQLObjectType({
	name: "Book",
	description: "Book Type",
	fields: () => {
		const { Author } = require("../models");
		const { AuthorType } = require(".");
		return {
			id: { type: GraphQLID, description: "Book ObjectID" },
			name: { type: GraphQLString, description: "Book Name" },
			genre: { type: GraphQLString, description: "Book Genre" },
			author: {
				type: AuthorType,
				description: "Book Author",
				resolve(parent) {
					return Author.findById(parent.authorId);
				},
			},
		};
	},
});
