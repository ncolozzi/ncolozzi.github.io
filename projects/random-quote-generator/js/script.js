/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of quote objects that contain 
 * a quote, 
 * a source, 
 * tags, 
 * and if the quote has a citation or year those are included as well.  
***/
const quotes = [
  {
      quote:'The fool doth think he is wise, but the wise man knows himself to be a fool.',
      source:'William Shakespeare',
      citation:'As You Like It',
      year:'1599',
      tags:'wisdom'
  },
  {
      quote:'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.',
      source:'Maurice Switzer',
      citation:'Mrs. Goose, Her Book',
      year:'2015',
      tags:'wisdom, remaining-silent'
  },
  {
      quote:'The only true wisdom is in knowing you know nothing.',
      source:'Socrates',
      tags:'knowledge, wisdom'
  },
  {
      quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      source:'Albert Einstein',
      tags:'human-nature, humor, infinity, philosophy, science, stupidity, universe'
  },
  {
      quote:"Knowing yourself is the beginning of all wisdom.",
      source:"Aristotle",
      tags:'introspection, self-discovery, wisdom'
  },
  {
      quote:"It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
      source:"J.R.R. Tolkien",
      citation:'The Lord of the Rings',
      year:'1954',
      tags:'wisdom, life, fantasy'
  },
  {
      quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
      source:"Winston S. Churchill",
      tags:'success, courage, failure, inspirational, bravery'
  },
  
 
];

// Array of colors for random background color function

const backgroundColors = ['#6699ff', '#ff5050', '#cc00cc' , '#ff33cc', '#003366', '#00ff00'];

/***
 * This function creates a random number between 0 and the lenght of the quotes array.
 * The number is then used to access an index in the quote array and returns an random quote object.
***/
function getRandomQuote(){
  const randomIndex = Math.floor(Math.random() * (quotes.length +1));
  return quotes[randomIndex]; 
}



/***
 * This function calls the getRandomQuote function stores it in a variable.
 * Then creates a string of the propteries from the quote object and HTML tags.
 * The function then returns the string and inserts it into the quote-box div element.
***/
function printQuote () {
   const randomQuoteObject = getRandomQuote();
   let message = 
    `<p class="quote">${randomQuoteObject.quote}</p>
     <p class ="source">${randomQuoteObject.source}`;
   if ( randomQuoteObject.hasOwnProperty('citation') ){
        message += `<span class = "citation">${randomQuoteObject.citation}</span>`;
   } 
   if ( randomQuoteObject.hasOwnProperty('year') ){
        message += `<span class = "year">${randomQuoteObject.year}</span>`;
   }
   message += `</p>`;
   if ( randomQuoteObject.hasOwnProperty('tags') ){
        message += `<p><span class = "tags">Tags: ${randomQuoteObject.tags}<span></p>`;
   }
   getRandomBackgroundColor();
   return document.getElementById('quote-box').innerHTML = message;
}
/*** 
 * This function creates a random number between 0 and the length of the backgroundColors array.
 * Then uses that number to access an index in the array.
 * Then uses the hexadecimal string to change the body elements css style background-color property to that hexidecimal. 
***/
function getRandomBackgroundColor () {
    const randomIndex = Math.floor(Math.random() * (backgroundColors.length +1));
    let randomColor = backgroundColors[randomIndex];
    
    return document.querySelector('body').style.backgroundColor = randomColor; 
}

/***
 *   This method executes the printQuote function every 15 seconds.
 ***/
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);