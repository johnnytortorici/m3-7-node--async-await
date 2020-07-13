const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const response = await request('https://geek-jokes.sameerkumar.website/api?format=json');
    const joke = JSON.parse(response).joke;
    console.log(joke);
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

getGeekJoke();
