const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const views = fs.readdirSync(path.join(__dirname, "views"));

const data = require("./data.json");
//console.log("data: ", data)

views.forEach((view) => {
  ejs.renderFile(
    path.join(__dirname, "views", view),
    data,
    {},
    (err, rendered) => {
      if (err) throw err;
      fs.writeFileSync(
        path.join(__dirname, view.replace("ejs", "html")),
        rendered
      );
    }
  );
});
