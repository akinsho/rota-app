const {
  db
} = require('./../database/dbConnection');

export const resolvers = {
  Query: {
    users: () =>
      db.query(`SELECT * FROM users`).then(res => res).catch(err => err),
    shifts: () =>
      db
      .query(`SELECT * FROM users,shifts WHERE users.id = shifts.assigned`)
      .then(res => res)
      .catch(err => err),
  },
  Mutation: {
    addUser: (root, args) => {
      // return db.query(`INSERT INTO users VALUES (firs)`, args.firstname, args.lastname, args.grade)
    },
  },
};
