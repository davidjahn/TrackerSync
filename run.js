console.log("starting")
chrome.storage.sync.get("TrackerSyncModel", function(model) {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('main.js');

  s.onload = function() {
    console.log("loaded")
    var s = document.createElement('script');
    var modelJson = JSON.stringify(model)
    var code = "console.log('running main'); main('"+modelJson+"')"
    s.textContent = code
    s.onload = function() {
      console.log("loaded")
    };
    (document.head || document.documentElement).appendChild(s);
  };
  (document.head || document.documentElement).appendChild(s);
})

