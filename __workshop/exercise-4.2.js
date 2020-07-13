const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({
      uri: 'https://api.tronalddump.io/random/quote',
      headers: { 'Accept': 'application/json' }
    });
    const quote = JSON.parse(response).value;
    console.log(quote);
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

getTronaldDumpQuote();