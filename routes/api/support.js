const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Support = require("../../models/Support");

//Route: GET api/support - Get all supports - Public Access
router.get("/", async (req, res) => {
  try {
    const supports = await Support.find();
    res.json(supports);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//Route: POST api/support - Create a new support - Public Access
router.post(
  "/",
  [
    //validation check for support information
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("website", "Website url is required")
      .not()
      .isEmpty(),
    check("province", "Province is required")
      .not()
      .isEmpty(),
    check("categories", "Categories are required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    //response to validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      description,
      phone,
      website,
      street,
      city,
      postalcode,
      province,
      country,
      categories
    } = req.body;

    //build support object
    const supportFields = {};
    supportFields.name = name;
    supportFields.website = website;
    supportFields.province = province;
    supportFields.categories = categories
      .split(",")
      .map(category => category.trim());
    if (description) supportFields.description = description;
    if (phone) supportFields.phone = phone;
    if (street) supportFields.street = street;
    if (city) supportFields.city = city;
    if (country) supportFields.country = country;
    if (postalcode) supportFields.postalcode = postalcode;

    console.log(supportFields.categories);

    try {
      //create new support & save to database
      support = new Support(supportFields);
      await support.save();
      res.json(support);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
