let button = document.getElementById("saveUrl")

button.addEventListener('click', function() {
    console.log("coucou")
    console.log(document)
    console.log(window)

    function wordCount(words) {
        var count = 0
        for (var i = 0; i < words.length; i++) {
            count += words[i].innerText.split(" ").length
        }
        return count
    }
    console.log(wordCount())

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url);
        let wordsInPost = document.querySelectorAll("div").innerText
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: wordCount,
            args: [wordsInPost]
        }, 
        (result) => {
            console.log(result)
            result = wordCount(result)
            console.log(result)
         })
        setStorageKey(url)
    });

    // let words = chrome.tabs.executeScript({
    //     code: `var wordsInPost = wordCount(document.querySelectorAll("p"))
    //     console.log(wordsInPost) `
    // })

    // words.then(wordCount)
    // var wordsInPost = wordCount(document.querySelectorAll("p"))
    // console.log(wordsInPost)
    
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