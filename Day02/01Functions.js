
function userProfile(name){
    console.log(`Hello, ${name}!`);
    
}

 userProfile("Mahaadhir")

let double=(number)=>{
    
    console.log("double number is "+number);
    
}
 double(234.567);


let timeOut = function(){

    setTimeout(() => {
      console.log("This message is printed after 2 seconds");
        
    }, 2000);

}

// timeOut();

function getUserData( call,age){
    console.log("the data inside getUserData");

    setTimeout(() => {
       console.log("this message is printed after 3 seconds");
       const name = "Mahaadhir";
       call(name); 
    }, 3000);
    
}


getUserData(userProfile, "28");


