const fetch = require('node-fetch');

const token = process.env.TWITTER_TOKEN;

let myHeaders = new Headers();

myHeaders.append('Authorization', `Bearer ${token}`);

const baseUrl = 'https://api.twitter.com/2/spaces';
const querParam =
    'space.fields=creator_id,host_ids,id,lang,scheduled_start,speaker_ids,state,title&expansions=speaker_ids,creator_id,host_ids&user.fields=id,name,profile_image_url,username';

let requestOptions = {
    method: 'GET',
    headers: myHeaders
};
const handler = async function (event) {
    const searchItem = event.headers.search;

    try {
        const response = await fetch(
            `${baseUrl}/search?query=${searchItem}&${querParam}`,
            requestOptions
        );
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText };
        }
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        };
    } catch (error) {
        // output to netlify function log
        console.log(error);
        return {
            statusCode: 500,
            // Could be a custom message or object i.e. JSON.stringify(err)
            body: JSON.stringify({ msg: error.message })
        };
    }
};

module.exports = { handler };
