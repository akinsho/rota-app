const { db } = require('./../database/dbConnection');

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
      console.log('args', args);
      return db
        .query(
          `INSERT INTO users(firstname, surname, grade) VALUES ($1, $2, $3);`,
          [args.firstname, args.surname, args.grade]
        )
        .then(res => console.log('res', res));
    },
  },
};
