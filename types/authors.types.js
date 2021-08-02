const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require("graphql");

module.exports.AuthorType = new GraphQLObjectType({
	name: "Author",
	description: "Author Type",
	fields: () => {
		const { Book } = require("../models");
		const { BookType } = require("./books.types");
		return {
			id: { type: GraphQLID, description: "Author ObjectID" },
			name: { type: GraphQLString, description: "Author Name" },
			age: { type: GraphQLInt, description: "Author Age" },
			books: {
				type: new GraphQLList(BookType),
				description: "Other books by the author",
				resolve(parent, args) {
					return Book.find({ authorId: parent.id });
				},
			},
		};
	},
});
