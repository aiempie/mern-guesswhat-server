const healthCheck = require("../middleware/healthCheck");
const authRoutes = require("./authRoute/authRoute");

const routes = (app) => {
  const apiRoute = (routeName) => `/api/v1/${routeName}`;
  app.use("/health", healthCheck);
  app.use(apiRoute("auth"), authRoutes);
};

module.exports = routes;
