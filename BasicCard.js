//Constructor Function For Basic Card

function BasicCard(front, back){
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard ("Who was the first president of the United States?", "George Washington");

//Print out Front and Back Card

console.log(firstPresident);

//Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 
BasicCard();
