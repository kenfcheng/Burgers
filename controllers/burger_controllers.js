let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
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
  burgers.create(["name", "eaten"], [req.body.name, req.body.eaten], function (
    result
  ) {
    console.log(result);
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update(
    {
      eaten: req.body.eaten,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // 404 error
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
