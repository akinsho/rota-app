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
    findUser: (root, args) => {
      console.log('args', args);
      db
        .query(`SELECT * FROM users WHERE users.firstname = $1`, [
          args.firstname,
        ])
        .then(res => console.log('res', res))
        .catch(err => console.log('err', err));
    },
  },
  Mutation: {
    addUser: (root, args) => {
      return db
        .query(
          `INSERT INTO users(firstname, surname, grade) VALUES ($1, $2, $3);`,
          [args.firstname, args.surname, args.grade]
        )
        .then(res => console.log('res', res));
    },
  },
};
