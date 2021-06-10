
// using random quotes API to generate an array of quotes

let quotes = []

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    data.forEach(element => {
      quotes.push(element);
    });
  });

// setTimeout(()=>{
//   console.log(quotes.length);
// }, 200)

// BODY STYLING
document.body.style.margin = "0"
document.body.style.padding = "0"

// WRAPPER FOR CONTENT
const wrapper = document.createElement("div")
wrapper.style.width = "30%"
wrapper.style.margin = "30px"
// ------ creating the main wrapper
document.body.appendChild(wrapper)

// TITLE
const title = document.createElement("h1")
title.textContent = "Quote of the day"

// CONTAINER FOR QUOTE AND AUTHOR
const container2 = document.createElement("div")
container2.id = "container"
container2.style.display = "flex"
container2.style.flexDirection = "column"
container2.style.border = "1px solid #4D565D"
container2.style.borderRadius = "5px"
container2.style.padding = "10px"
// QUOTE
const quote = document.createElement("p")
quote.textContent = "I have the craziest dreams when I'm digesting a massive amount. It feels so real, it's psychedelic."
quote.style.alignSelf = "flex-start"
quote.style.alignSelf = "flex-start"
quote.style.marginBlockStart = "0"
quote.style.marginBlockEnd = "10px"
// AUTHOR
const author = document.createElement("cite")
author.textContent = "Joey Chestnut"
author.style.alignSelf = "flex-end"
// ------ creating QUOTE AND AUTHOR inside the CONTAINER
container2.append(quote, author)

// GENERATE QUOTE BUTTON
const button = document.createElement("button")
button.textContent = "Random Quote"
button.style.padding = "10px"
button.style.marginTop = "20px"
button.style.backgroundColor = "#4D565D"
button.style.color = "white"
button.style.borderRadius = "5px"
const undo = document.createElement("i")
undo.classList = "fas fa-undo-alt"
// ------ creating the UNDO icon in front of the BUTTON
button.prepend(undo)

// ------ creating the TITLE, CONTAINER for QUOTE and BUTTON inside of main WRAPPER
wrapper.append(title, container2, button)

// random QUOTE function
function randomQuote(quotes){ 
  setTimeout(()=>{
    let choice = Math.floor(Math.random()*quotes.length)
    // console.log(choice);  
    // console.log(quotes[choice]);
    quote.textContent = quotes[choice].text
    author.textContent = quotes[choice].author
  }, 200)
}

// adding event listener to BUTTON
button.addEventListener("click",()=>{
  console.log("click");
  randomQuote(quotes)
})