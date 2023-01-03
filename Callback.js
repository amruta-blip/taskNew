const fs = require("fs");

const file = "file.txt"

const firstCallBack = (err, data) =>{
    if(err) {
        return console.log(err);
    }
    console.log("Function successfully executed");
    console.log(data.toString());
};

fs.readFile(file, firstCallBack);