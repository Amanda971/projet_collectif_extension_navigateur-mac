let button = document.getElementById("saveUrl")

button.addEventListener('click', function() {
    console.log("coucou")

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url);
        setStorageKey(url)
    });

    // function setStorageKey(savedUrl) {
    //     chrome.storage.sync.set({"url": savedUrl}, function() {
    //     allURLS.push(savedUrl)
    //     console.log(allURLS)
    //     getStoredUrl()
    //  })
    
    // function getStoredUrl() {
    //     chrome.storage.sync.get(["url"], function(items){
    //     console.log('Value currently is ' + items.url)
    //     document.getElementById("myUrl").innerHTML = items.url
    //         //items = [ { "yourBody": "myBody" } ]
    //      });
    //}



    function setStorageKey(savedUrl){
    chrome.storage.sync.get(["urlLists"], (obj) =>{
        const currentLists = obj.urlLists ? obj.urlLists : [];
        const mergedLists = [...currentLists,...[{urls : savedUrl}]];
        console.log(mergedLists);
        chrome.storage.sync.set({urlLists: mergedLists})
    })
    }
})

chrome.storage.sync.get(["urlLists"], (obj) => {
    console.log(obj.urlLists)
        if(obj.urlLists.length) {
            for (i=0; i <obj.urlLists.length; i++) {
                let divLink = document.createElement("div")
                divLink.className = "website"
                let newLink = document.createElement("a")
                newLink.setAttribute("href", obj.urlLists[i]["urls"])
                newLink.setAttribute("target", "_blank")
                newLink.innerHTML = obj.urlLists[i]["urls"] + "<br />"
                document.getElementById("myUrl").appendChild(divLink)
                divLink.append(newLink)
            }
        }
})

let deleteButton = document.getElementById("deleteUrl")

deleteButton.addEventListener('click', function() {
    chrome.storage.sync.clear()
})