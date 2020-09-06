var fs = require("fs");
var path = require("path");
var csv = require("csvtojson");

// Reads csv files from BasicProfile folder and writes it to ../src/shared/profile/*.json
// The data in BasicProfile/ is fetched from LinkedIn Personal Data Archive

// yah I know i can generated ths output filenames, I'm writing this so it is obvious for later debugging `when` it inevitably stops working
var jsonfiles = {
  "Certifications.csv": "certifications.json",
  "Education.csv": "education.json",
  "Honors.csv": "honors.json",
  "Patents.csv": "patents.json",
  "Positions.csv": "positions.json",
  "Projects.csv": "projects.json",
  "Publications.csv": "publications.json",
};

var inputbase = "./BasicProfile/";
var outputbase = "../src/shared/profile/";

for (let file of Object.keys(jsonfiles)) {
  var filePath = path.join(__dirname, inputbase + file);

  csv()
    .fromFile(filePath)
    .then((json) => {
      var outPath = path.join(__dirname, outputbase + jsonfiles[file]);
      fs.writeFileSync(outPath, JSON.stringify(json), "utf8", function (err) {
        console.log(err);
      });
    });
}
