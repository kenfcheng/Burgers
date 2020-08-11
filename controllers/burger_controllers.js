const express = require("express");

const router = express.Router();

const burgers = require("../models/burgers.js");

// Create all our routes
router.get("/", function (req, res) {
  burgers.all(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(res.body);
  burgers.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      console.log(result);

      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // 404 Error
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Exports to server.js
module.exports = router;
