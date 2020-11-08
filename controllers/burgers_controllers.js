//Dependencies
var express = require("express");

var burger = require("../models/burger.js");

// Create an instance of for the express.Router app
var router = express.Router();

// Create all the routes and set up logic within those routes where required
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/burgers", function (req, res) {
//   burger.insertOne(["burger"], [req.body.burger], function (result) {
//     //Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });
router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger, false],
    function (result) {
      //Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger_name.update(
    {
      devour: req.body.devour,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        //If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

//Export routes for burger.js to use
module.exports = router;
