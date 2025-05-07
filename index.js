// index.js is the entry point of the server
// console.log("hey backend!");
require('dotenv').config()

const express = require('express')
const app = express() //express ke fxns app me store kr di humne
const port = process.env.PORT; //65535 ports are free...khi par bhi listen krlo like 4000


const githubData = {
    "login": "shaktipriya13",
    "id": 127470506,
    "node_id": "U_kgDOB5kLqg",
    "avatar_url": "https://avatars.githubusercontent.com/u/127470506?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shaktipriya13",
    "html_url": "https://github.com/shaktipriya13",
    "followers_url": "https://api.github.com/users/shaktipriya13/followers",
    "following_url": "https://api.github.com/users/shaktipriya13/following{/other_user}",
    "gists_url": "https://api.github.com/users/shaktipriya13/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shaktipriya13/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shaktipriya13/subscriptions",
    "organizations_url": "https://api.github.com/users/shaktipriya13/orgs",
    "repos_url": "https://api.github.com/users/shaktipriya13/repos",
    "events_url": "https://api.github.com/users/shaktipriya13/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shaktipriya13/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shakti Priya",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": "Pre-final year Btech(Computer Science & Engineering) student at IIIT Ranchi.\r\n",
    "twitter_username": null,
    "public_repos": 64,
    "public_gists": 0,
    "followers": 4,
    "following": 42,
    "created_at": "2023-03-10T05:13:23Z",
    "updated_at": "2025-05-06T09:44:41Z"
}

app.get('/shakti', (req, res) => {
    res.json(githubData);
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('about me')
    // this is a calllback fxn
})
app.get('/contact', (req, res) => {
    res.send('we are using cookies......conatact us in future!')
})
app.get('/login', (req, res) => {
    res.send('<h1>Login Here</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`My app listening on port ${port}`)
})
