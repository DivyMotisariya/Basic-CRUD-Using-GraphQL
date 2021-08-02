const graphql = require("graphql");
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} = graphql;

module.exports.AuthorSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "AuthorQuery",
		description: "Author Query",
		fields: () => {
			const { Author } = require("../models");
			const { AuthorType } = require("../types");
			return {
				author: {
					type: AuthorType,
					description: "Get author by author ObjectID",
					args: {
						id: { type: GraphQLID, description: "Author ObjectID" },
					},
					resolve(parent, args) {
						return Author.findById(args.id);
					},
				},
				authors: {
					type: new GraphQLList(AuthorType),
					description: "Get all authors",
					resolve() {
						return Author.find();
					},
				},
			};
		},
	}),
	mutation: new GraphQLObjectType({
		name: "AuthorMutation",
		description: "Author Mutation",
		fields: () => {
			const { Author } = require("../models");
			const { AuthorType } = require("../types");
			return {
				addAuthor: {
					type: AuthorType,
					description: "Add new author",
					args: {
						name: { type: GraphQLString, description: "Author Name" },
						age: { type: GraphQLInt, description: "Author Age" },
					},
					resolve(parent, args) {
						const { name, age } = args;
						let author = new Author({ name, age });
						return author.save();
					},
				},
			};
		},
	}),
});
