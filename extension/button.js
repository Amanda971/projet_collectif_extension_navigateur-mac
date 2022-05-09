let button = document.getElementById("saveUrl")



function storeURLS() {
    console.log("coucou")

    // for (i=0; )
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url);
        setStorageKey(url)
    });

    function setStorageKey(savedUrl) {
        chrome.storage.sync.set({"url": savedUrl}, function() {
        console.log(`Mon url sauvegardé est `+ savedUrl)
        getStoredUrl()
     })
    
    function getStoredUrl() {
        chrome.storage.sync.get(["url"], function(items){
        console.log('Value currently is ' + items.url)
        document.getElementById("myUrl").innerHTML = items.url
            //items = [ { "yourBody": "myBody" } ]
         });
    }
 
}}

button.addEventListener('click', storeURLS())
