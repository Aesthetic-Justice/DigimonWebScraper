const fetch = require('node-fetch');
const fs = require('node:fs');
const cheerio = require('cheerio');

let uri = "https://en.digimoncard.com/cardlist/?search=true&category=508901#page-1";

async function grabCard() {
    const response = await fetch(uri);
    const data = await response.text();
    
    try{
      fs.writeFileSync('./cards/cards.html',data.toString());
    } catch (err){
      console.log(err);
    }
}

function makeArrayOfCards(){
  const data = fs.readFileSync('./cards/cards.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
  const $ = cheerio.load(data);
  const names = $('div.card_name');
  names.each((i, div) => {
    console.log($(div).text());
  })
}

module.exports = {grabCard, makeArrayOfCards};