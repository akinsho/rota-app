const { db } = require('./../database/dbConnection');
console.log('db', db);
let nextId = 3;

export const resolvers = {
  Query: {
    users: () => {
      return db.query(`SELECT * FROM users`).then(res => res).catch(err => err);
    },
  },
  Mutation: {
    addUser: (root, args) => {
      // return db.query(`INSERT INTO users VALUES (firs)`, args.firstname, args.lastname, args.grade)
    },
  },
};
