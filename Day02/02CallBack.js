function checkAvailability(movieName, call){
console.log("Checking the movie name");

setTimeout(() => {
    console.log(`Movie ${movieName} is loading`);
    call();
    }, 2000)
}

function playMovie(){

    console.log("Now playing this movie")
}

checkAvailability("Avatar", playMovie)