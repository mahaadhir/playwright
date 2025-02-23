
const browserVersion = "Chrome";

function getBrowserVersion(){
    
    var browserVersion = "Firefox";

 if (browserVersion.match("Chrome")) {
    
    var browserVersion = "Safari";
   
    console.log("Browser inside the block "+browserVersion);
}
 console.log("Browser outside the block "+browserVersion);
 }

 getBrowserVersion();
 console.log("Globally "+browserVersion);