const token = process.env.BEARER_TOKEN;
const url = `https://api.twitter.com/2/spaces/search`;

async function api(): Promise<any> {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'v2SpacesSearchJS',
            authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export default api;
