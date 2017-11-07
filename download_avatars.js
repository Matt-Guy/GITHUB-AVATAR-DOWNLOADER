var secret = require('./secrets.js')

function getRepoContributors(repoOwner, repoName, cb) {

 console.log('Welcome to the GitHub Avatar Downloader!');

 var request = require('request');


var options = {

  url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
  headers: {
    'User-Agent' : secret.GITHUB_TOKEN
  }
  };

  request(options, function(err, res, body) {
    if(err) {
      cb(err)
    } else {
      cb(null, JSON.parse(body));
    }
  });
}





getRepoContributors("jquery", "jquery", function(err, result) {
  if (err) {
    console.error("Request function failed");
    return
  }
  for (let i = 0; i < result.length; i++ ) {
      console.log(result[i].avatar_url)
  }
  //console.log("Errors:", err);
  //console.log("Result:", result);
  console.log()
});
