const healthCheck = require("../middleware/healthCheck");
const authRoutes = require("./authRoute/authRoute");
const aovRouter = require("./aov/index");

const routes = (app) => {
  const apiRoute = (routeName) => `/api/v1/${routeName}`;

  app.use("/health", healthCheck);
  app.use(apiRoute("auth"), authRoutes);
  app.use(apiRoute("aov"), aovRouter);
};

module.exports = routes;
