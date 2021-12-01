import { mapToData } from './utils';

const handler = (searchData = 'tech') =>
    fetch('/.netlify/functions/node-fetch', {
        headers: { search: `${searchData}` }
    })
        .then(response => response.json())
        .then(result => mapToData(result.data));

export default handler;
