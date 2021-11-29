const fetch = require('isomorphic-fetch');

const token = process.env.TWITTER_TOKEN;

let myHeaders = new Headers();

myHeaders.append('Authorization', `Bearer ${token}`);

let requestOptions = {
    method: 'GET',
    headers: myHeaders
};
const handler = async function () {
    try {
        const response = await fetch(
            'https://api.twitter.com/2/spaces/search?query=tech&space.fields=creator_id,host_ids,id,lang,scheduled_start,speaker_ids,state,title&expansions=speaker_ids,creator_id,host_ids&user.fields=id,name,profile_image_url,username',
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
