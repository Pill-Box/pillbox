const router = require("express").Router();
const RxController = require("../../controllers/RxController");

// Matches with "/api/Rx"
router.route("/")
  .get(RxController.findAll)
  .post(RxController.create);

module.exports = router;