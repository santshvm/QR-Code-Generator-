import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image"; 


inquirer
  .prompt([
    {
        message: "Type in your URL here: ", 
        name: "URL",
    },
  ])
  .then((answers) => {
    //console.log(answers);
    const url = answers.URL; 
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_code.png'));
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

