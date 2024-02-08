const products = [
  {
    id: 1,
    name: "Product 1",
    price: 23,
  },
  {
    id: 2,
    name: "Product 2",
    price: 32,
  },
  {
    id: 3,
    name: "Product 3",
    price: 43,
  },
  {
    id: 4,
    name: "Product 4",
    price: 54,
  },
  {
    id: 5,
    name: "Product 5",
    price: 53,
  },
];

const getallProducts = async (req, res) => {
  try {
    // const result = await products.find().toArray();
    res.json({
      message: "all product is here",
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getallProducts };
