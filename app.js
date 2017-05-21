
function BasicCard(){
    var flashCommands = process.argv[2];

    if(flashCommands === "front"){
        console.log(flashCommands + "This works");
    }
}

BasicCard();
//Only have 1 constructor in 1 file each
//Gets properties (prototypes) basic card has front and back, also clozeCard has front and back
//Object.getOwnPropertyNames(Object.prototype)


//var example {
    //front: Hi i Am George Washington
//}
//console.log(me.toString()));



//argument means parameter
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


var me = new Person ("Erick", "Rivas");
var me = new Person ("Darrell", "Freeman");


