import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin",
    email: "admin@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: "Wolf",
    email: "wolf@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: "Fox",
    email: "fox@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: "Duck",
    email: "duck@email.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;