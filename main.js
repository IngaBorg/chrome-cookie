chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.cookies.getAll({domain: "instagram.com"}, function(cookies) {
    console.log(cookies);
  });
},
  {
    url: [{
      hostContains: 'flacless.com'
    }]
  })

