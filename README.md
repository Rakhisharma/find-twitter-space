# Search Twitter Spaces

Get all the twitter spaces in one webapp. This tool provides you with the functionality to search for all twitter spaces that are live or scheduled. You can search by category or the title and join the space directly from the webapp.  

Link to site: [searchtwitterspaces](https://searchtwitterspaces.com/)

## Features

-   Search by Text
-   Search by Category
-   Link to join space
-   Information about the organizer of space(profile picture and user name)
-   Title of space
-   scheduled time of space

## Contributing

Contributions are always welcome!

See [contributing.md](https://github.com/Rakhisharma/find-twitter-space/blob/main/CONTRIBUTING.md) for ways to get started.

## Tech Stack

-   Typescript

-   React

-   Node.js

-   Materail UI

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rakhisharma/find-twitter-space.git
```

Go to the project directory

```bash
  cd find-twitter-space
```

Install dependencies

```bash
  npm install
```

```bash
  npm run start
```

Start the netlify server if you have token you token at place to get data locally.

```bash
  netlify dev
```

## Run Server Locally

If you are tyring to fetch twitter data locally, you will see CORS issue. To avoid that I am using Netlify's serveless functions. To fetch the data locally, you will need to generate `TWITTER_AUTHENTICATION_TOKEN` also called `Bearer Token`. Once you have the token, you can replace this line of code with your token [here](https://github.com/Rakhisharma/find-twitter-space/blob/1f53be77e3710bca534cf7fb3bcc801b9665115a/functions/node-fetch/node-fetch.js#L3). Please make sure you are not sending your token when opening PR.

```bash
const token = process.env.YOUR_TWITTER_TOKEN;
```

## Feedback

If you have any feedback, please reach out to me on Twitter [@atbrakhi](https://twitter.com/atbrakhi)

## License

[MIT](https://github.com/Rakhisharma/find-twitter-space/blob/main/LICENCE)
