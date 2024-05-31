const fetch = require('node-fetch');
const fs = require('node:fs');
const cheerio = require('cheerio');


//Locally saves a "block" of cards off Bamco's website
async function grabCard() {

  const url = 'https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc';


  const response = await fetch(url, {
    method: 'GET',
    headers : {}
  });

  const data = await response.json();

  try{
    fs.writeFileSync('./cards/cardlist.txt',JSON.stringify(data));
  } catch (err){
    console.log(err);
  }
  
 /*  //Downloads the page
  let uri = "https://en.digimoncard.com/cardlist/?search=true&category=508901#page-1";
    const response = await fetch(uri);
    const data = await response.text();
    
    //then saves it locally as "cards.html"
    try{
      fs.writeFileSync('./cards/cards.html',data.toString());
    } catch (err){
      console.log(err);
    } */
}

//Converts a saved "block" of cards into an array, then adds it to the Database
function makeArrayOfCards(){
  //pulls up the locally saved block of cards
  const data = fs.readFileSync('./cards/cards.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });

  //Create empty array 
  var cardDB = [];
  //Use Cheerio to convert HTML into traversable DOM
  const $ = cheerio.load(data);

  $('li.image_lists_item')

  const cardNames = [];
  $('div.card_name').each(function (i, elem) {
    cardNames[i] = $(this).text().toString();
  });

  const cardNos = [];
  $('li.cardno').each(function (i, elem) {
    cardNos[i] = $(this).text().toString();
  });

}

module.exports = {grabCard, makeArrayOfCards};