const request = require('request-promise');

// getDadJoke
const getDadJoke = () => {
    const joke = new Promise((resolve, reject) => {
        const response = request({
            uri: 'https://icanhazdadjoke.com/',
            headers: { 'Accept': 'application/json' }
        })
            .then((result) => JSON.parse(result))
            .then((result) => result.joke);
        resolve(response);
    })
    return joke;
};

const getJoke = async () => {
    try {
        const joke = await getDadJoke();
        console.log(joke);
    } catch(err) {
        console.log('ERROR: ', err)
    }
}

// 4.1
getJoke();
