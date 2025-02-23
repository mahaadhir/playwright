
if (true) {
   
    var xx = "akjhfd";
    let yy = "sdfdgdg";

    console.log(xx);
    console.log(yy);
    
 }
 console.log(xx);

 var genderType = "Male";

 function printGender(){

    let color = "Red";

    if (genderType.startsWith("Male")) {

        var age = 30;
        let colour = "orange"; // Block Scoping
        console.log(`favourite colour of ${genderType} `+ color);
    }
    else{

        var age = 35;
        console.log("favourite colour "+ color);
    }

 console.log(age);
    
}
printGender()
console.log(genderType);

