const express = require("express");
const generate = require("../utils/fakeUser")

const router = express.Router();

router.get('/', (req, res) => {
    const products = generate()
    res.json({products: products});
});

module.exports = router;