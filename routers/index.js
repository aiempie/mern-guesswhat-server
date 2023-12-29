const healthCheck = require("../middleware/healthCheck");
const authRoutes = require("./authRoute/authRoute");
const aovRankRoutes = require("./aov/aovRankRoute/aovRankRoute");
const aovClipRoutes = require("./aov/aovClipRoute/aovClipRoute");

const routes = (app) => {
  const apiRoute = (routeName) => `/api/v1/${routeName}`;
  app.use("/health", healthCheck);
  app.use(apiRoute("auth"), authRoutes);
  app.use(apiRoute("aov/rank"), aovRankRoutes);
  app.use(apiRoute("aov/clip"), aovClipRoutes);
};

module.exports = routes;
