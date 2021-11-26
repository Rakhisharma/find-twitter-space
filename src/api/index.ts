let myHeaders = new Headers();
myHeaders.append(
    'Authorization',
    `Bearer AAAAAAAAAAAAAAAAAAAAAJK2WAEAAAAAz4J7KN5igVXLw9FdnUKnIzPwYa4%3DU35LMcCWGcwaH4gxpDHDNc5JTK5EOuyp36zx6bftxTP8YuVWce`
);

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const fetchList = () =>
    fetch(
        'https://api.twitter.com/2/spaces/search?query=web3&space.fields=creator_id,ended_at,host_ids,id,lang,participant_count,scheduled_start,speaker_ids,started_at,state,title,topic_ids&expansions=invited_user_ids,speaker_ids,creator_id,host_ids&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&topic.fields=description,id,name',
        requestOptions as any
    )
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

export default fetchList;
