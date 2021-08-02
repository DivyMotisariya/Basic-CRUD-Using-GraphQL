const graphql = require("graphql");
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLID,
	GraphQLString,
} = graphql;

module.exports.BookSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "BookQuery",
		description: "Book Query",
		fields: () => {
			const { Book } = require("../models");
			const { BookType } = require("../types");
			return {
				book: {
					type: BookType,
					description: "Get book by book ObjectID",
					args: {
						id: { type: GraphQLID, description: "Book ObjectID" },
					},
					resolve(parent, args) {
						return Book.findById(args.id);
					},
				},
				books: {
					type: new GraphQLList(BookType),
					description: "Get all books",
					resolve() {
						return Book.find();
					},
				},
			};
		},
	}),
	mutation: new GraphQLObjectType({
		name: "BookMutation",
		description: "Book Mutation",
		fields: () => {
			const { Book } = require("../models");
			const { BookType } = require("../types");
			return {
				addBook: {
					type: BookType,
					description: "Add new book",
					args: {
						name: { type: GraphQLString, description: "Book Name" },
						genre: { type: GraphQLString, description: "Book Genre" },
						authorId: {
							type: GraphQLString,
							description: "Book Author ObjectID",
						},
					},
					resolve(parent, args) {
						const { name, genre, authorId } = args;
						let book = new Book({ name, genre, authorId });
						return book.save();
					},
				},
			};
		},
	}),
});
