// console.log("Hello World")

// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

//var images = document.getElementsByTagName("img");
var videos= document.getElementsByTagName("img");

for (var i = 0, l = videos.length; i < l; i++) {
  videos[i].src =
    "http://placekitten.com/" + videos[i].width + "/" + videos[i].height;
}
