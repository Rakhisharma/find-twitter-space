import { mapToData } from './utils';

const handler = () =>
    fetch('/.netlify/functions/node-fetch')
        .then(response => response.json())
        .then(result => mapToData(result.data));

export default handler;
