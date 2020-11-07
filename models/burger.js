var orm = require("../config/orm.js");
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  // orm.updateOne();
  // orm.insertOne();
};

module.exports = burger;
