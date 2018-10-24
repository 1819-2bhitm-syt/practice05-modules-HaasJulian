let waitTime3=10;
let waitTime2=20;
let waitTime1=15;

 exports.startProgram = function(program, waitTime, programName){
    console.log("***Program "+programName+" will start in" + waitTime);
    require("./app");

};

