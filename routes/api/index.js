const router = require("express").Router();
const RxRoutes = require("./Rxs");

// Rx routes
router.use("/Rxs", RxRoutes);

module.exports = router;
