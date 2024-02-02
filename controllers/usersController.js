const users = [
  {
    id: 1,
    name: "ali",
    age: 21,
  },
  {
    id: 2,
    name: "Hasan",
    age: 22,
  },
  {
    id: 3,
    name: "Mohabbat",
    age: 23,
  },
];

// get all user
const getAllUser = (req, res) => {
  res.send(users);
};

module.exports = { getAllUser };
