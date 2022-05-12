// let htmlpage = document.documentElement.innerText
// console.log(htmlpage)
// let count = htmlpage.split(/"\r\n"| +/)
// console.log(count)

var wordsInPost = wordCount(document.querySelectorAll("div"))

function wordCount(words) {
  var count = 0
  for (var i = 0; i < words.length; i++) {
    count += words[i].innerText.split(" ").length
  }
  return count
}

console.log(wordsInPost)

averageWordsByMinute = 300
pageReadingSpeed = Math.ceil(wordsInPost / averageWordsByMinute)
console.log(`Vous pouvez lire cette page en ${pageReadingSpeed} minutes`)