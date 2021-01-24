const router = require("express").Router();

const { searchByParam } = require("../controllers/googleAPI");

router.get("/", searchByParam);

module.exports = router;
