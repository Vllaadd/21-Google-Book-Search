const router = require("express").Router();

const { findAll, create, remove } = require("../controllers/book.js");

router.get("/", findAll);
router.post("/", create);
router.delete("/", remove);

module.exports = router;