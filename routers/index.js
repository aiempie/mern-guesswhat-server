const healthCheck = require("../middleware/healthCheck");
const authRoutes = require("./authRoute/authRoute");
const aovRouter = require("./aov/index");
const lolRouter = require("./lol/index");

const routes = (app) => {
  const apiRoute = (routeName) => `/api/v1/${routeName}`;

  app.use("/health", healthCheck);
  app.use(apiRoute("auth"), authRoutes);
  app.use(apiRoute("aov"), aovRouter);
  app.use(apiRoute("lol"), lolRouter);
};

module.exports = routes;
