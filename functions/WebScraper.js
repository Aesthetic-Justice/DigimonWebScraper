const fetch = require('node-fetch');
const fs = require('node:fs');

let uri = "https://en.digimoncard.com/cardlist/?search=true&category=508901#page-1";

async function grabCard() {
    const response = await fetch(uri);
    const data = await response.text();
    
    try{
      fs.writeFileSync('./cards/cards.txt',data.toString());
    } catch (err){
      console.log(err);
    }
}

function makeArrayOfCards(){
    try {
      const data = fs.readFileSync('./cards/cards.txt','utf8');
      list = data.split('<li class="image_lists_item data page-1">');
      list.shift();
      card1=list[0].split(/\r?\n/);
      console.log(card1[0],card1[1],card1[2]);
    } catch (err) {
      console.log(err);
    }
}

module.exports = {grabCard, makeArrayOfCards};