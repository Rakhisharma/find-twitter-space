import { mapToData } from './utils';

const fetchList = (searchData: string) =>
    fetch('/.netlify/functions/node-fetch', {
        headers: { search: searchData ? searchData : 'Tech' }
    })
        .then(response => response.json())
        .then(result => mapToData(result.data));

export default fetchList;
