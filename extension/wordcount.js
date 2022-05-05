let paraNumber = document.getElementsByTagName("p")
console.log(paraNumber)
for (i=0; i < paraNumber.length; i++) {
    let htmlpage = paraNumber.innerText
    console.log(htmlpage)
}
// console.log(htmlpage)
// let count = htmlpage.split(/(?:"\r\n"| )+/)
// console.log(count)


wordsByMinute = 250
readingSpeed = 0
pageReadingSpeed = 0