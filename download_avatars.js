var secret = require('./secrets.js')
var request = require('request');
var fs = require('fs')


var repowner = process.argv[2];
var repname = process.argv[3];


if ((repname && reowner) !== undefined){

  function downloadImageByURL(url, filePath) {


    request.get(url)
       .on('error', function (err) {                                   // Note 2
          throw err;
     })

  .pipe(fs.createWriteStream(filePath));

}




function getRepoContributors(repoOwner, repoName, cb) {

 console.log('Welcome to the GitHub Avatar Downloader!');

 var request = require('request');


var options = {

  url: "https://api.github.com/repos/" + repowner + "/" + repname+ "/contributors",
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



getRepoContributors(repowner, repname, function(err, result) {
  if (err) {
    console.error("Request function failed");
    return
  }
    for (let i = 0; i < result.length; i++ ) {
       let url = result[i].avatar_url;
       let filePath = `avatars/${result[i].login}.jpg`
       downloadImageByURL(url, filePath)
  }

});


} else {
  console.log('!!!ERROR!!! repname and repowner not specified')
};
