const handler = () =>
    fetch('/.netlify/functions/node-fetch')
        .then(response => response.json())
        .then(result => result);

export default handler;
