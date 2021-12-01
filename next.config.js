/** @format */

module.exports = {
  reactStrictMode: true,

  env: {
    appName: "Belajar NextJs",
  },
  async rewrites() {
    return [
      {
        source: "/products",
        destination: "/products/ProductLis",
      },
      {
        source: "/add/products",
        destination: "/products/AddProduct",
      },
      {
        source: "/edit/:id",
        destination: "/products/EditProduct",
      },
    ];
  },
};
