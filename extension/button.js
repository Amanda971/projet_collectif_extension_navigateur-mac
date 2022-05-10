let button = document.getElementById("saveUrl")

button.addEventListener('click', function() {
    console.log("coucou")

    let allURLS = []

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url);
        setStorageKey(url)
    });

    function setStorageKey(savedUrl) {
        chrome.storage.sync.set({"url": savedUrl}, function() {
        allURLS.push(savedUrl)
        console.log(allURLS)
        getStoredUrl()
     })
    
    function getStoredUrl() {
        chrome.storage.sync.get(["url"], function(items){
        console.log('Value currently is ' + items.url)
        document.getElementById("myUrl").innerHTML = items.url
            //items = [ { "yourBody": "myBody" } ]
         });
    }

}})

