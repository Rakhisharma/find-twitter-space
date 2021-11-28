let myHeaders = new Headers();
const token = process.env.TWITTER_TOKEN;

myHeaders.append(
    'Authorization',
    'Bearer AAAAAAAAAAAAAAAAAAAAAJK2WAEAAAAAz4J7KN5igVXLw9FdnUKnIzPwYa4%3DU35LMcCWGcwaH4gxpDHDNc5JTK5EOuyp36zx6bftxTP8YuVWce'
);

let requestOptions = {
    method: 'GET',
    headers: myHeaders
};
//netlify/functions/node-fetch/node-fetch.js

const handler = () =>
    fetch('/netlify/functions/node-fetch', requestOptions as any)
        .then(response => response.text())
        .then(result => result);

export default handler;
