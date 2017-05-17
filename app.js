
function BasicCard(){
    var flashCommands = process.argv[2];

    if(flashCommands === "front"){
        console.log(flashCommands + "This works");
    }
}

BasicCard();


