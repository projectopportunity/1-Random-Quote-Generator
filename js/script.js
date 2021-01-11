/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of Objects containing quotes from various places.
***/
const quotes = [
  {quote: `Do, or do not. There is no try.`, source:`Master Yoda`, citation:`The Empire Strikes Back`, year: `1980`, type: `Movie`},
  {quote: `A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.`, source:`Douglas Adams`, citation:`Mostly Harmless`, year: `1992`, type: `Book`},
  {quote: `Dark times lie ahead of us and there will be a time when we must choose between what is easy and what is right.`, source:`Albus Dumbledore`, citation:`Harry Potter and the Sorcerer's Stone`, year: `2001`},
  {quote: `Driver picks the music, shotgun shuts his cakehole.`, source:`Dean Winchester`, citation:`Supernatural`, type: `TV`},
  {quote: `Time is a scary thing. When you lose it you can't find it. When you want it it's not there. When you try to keep it the hourglass turns itself around.`, source:`Nozdormu`, citation:`World of Warcraft`, type:`Video Game`},
  {quote: `Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.`, source:`Theodore Roosevelt`}
];

/***
 * Obtain a random number based on the number of items in the quotes array and use it to return one of the Objects.
***/
function getRandomQuote() {
    
  //variable to store random number based on the number of objects in the quote array
  let qNum = Math.floor( Math.random() * quotes.length);
  
  //return a random quotes Keys and Properties based on the previously generated number
  return quotes[qNum];
  
  //combined into one line but does it meet the instructions?
  //return quotes[Math.floor( Math.random() * quotes.length)]
}
 
/***
 * Print a random quote from the quotes array to the page
***/
function printQuote () {
  //Get a random quote
  let qNum = getRandomQuote();
  
  //Declare html string to display quote
  let html = ``;
 
  //build html string for quote, source, and each additional Key/Property pair that exists
    for (let obj in qNum) {  
      if ( obj === `quote`) {
        html += `<p class="quote">${qNum.quote}</p>`;
      }else if ( obj === 'source' ) {
        html += `<p class="source">${qNum.source}`; //closing p tag intentionally left off in order to add span class elements
      }else {html += `<span class="${obj}">${qNum[obj]}</span>`};
    };

  //add the closing p tag to span class
  html +=`</p>`;            

  //display the quote
  document.getElementById('quote-box').innerHTML = html;

  //change the background to a random color
  color = `${Math.floor( Math.random() *255)}, ${Math.floor( Math.random() *255)}, ${Math.floor( Math.random() *255)}`;
  document.body.style.backgroundColor = `rgb(${color})`;
}

/***
 * Pull a new quote every 10 seconds by triggering the printQuote function
***/
setInterval(function () { printQuote(); }, 10000);

/***
 * Call the printQuote function when the load-quote button is pressed
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
