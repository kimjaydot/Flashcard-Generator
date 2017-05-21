//Constructor Function For Cloze Card

function ClozeCard(text, cloze, partial, fullText ){
    this.text = text;
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;
    this.brokenCloze = "This doesn't work," + "oops";
}

var firstPresidentCloze = new ClozeCard( "George Washington", "... was the first president of the United States.",  "George Washington was the first president of the United States.");

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"

//  var brokenCloze = new ClozeCard("This doesn't work", "oops"); 
// "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText); 
console.log(firstPresidentCloze);
ClozeCard();

