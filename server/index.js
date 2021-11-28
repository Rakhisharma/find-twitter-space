const needle = require('needle');
const express = require('express');

let port = 8483; // set our port
let app = express();

const token = process.env.TWITTER_TOKEN;

const endpointUrl = `https://api.twitter.com/2/spaces/search`;

const getRequest = async () => {
    const params = {
        query: 'web3', // Replace the value with your search term
        'space.fields':
            'creator_id,ended_at,host_ids,id,lang,participant_count,scheduled_start,speaker_ids,started_at,state,title,topic_ids',
        expansions: 'invited_user_ids,speaker_ids,creator_id,host_ids',
        'user.fields':
            'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld',
        'topic.fields': 'description,id,name'
    };

    const res = await needle('get', endpointUrl, params, {
        headers: {
            'User-Agent': 'v2SpacesSearchJS',
            authorization: `Bearer ${token}`
        }
    });

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
};

(async () => {
    try {
        // Make request
        const response = await getRequest();
        console.dir(response, {
            depth: null
        });
    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();

// START THE SERVER
// =============================================================================
app.listen(port);
