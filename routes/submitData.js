const express = require("express");

const router = express.Router();


const { handleCustomerData } = require("../controllers/handleCustomerData")

router.post("/submitData", handleCustomerData)


module.exports = router