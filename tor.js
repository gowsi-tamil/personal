const WebTorrent = require('webtorrent')

const client = new WebTorrent()
const magnetURI = 'magnet:?xt=urn:btih:662643CE8E94A03C4DC6F7BC60D10712B1130AEB'

client.add(magnetURI, function (torrent) {
  // Got torrent metadata!
  console.log('Client is downloading:', torrent.infoHash)

 // torrent.files.forEach(function (file) {
    // Display the file by appending it to the DOM. Supports video, audio, images, and
    // more. Specify a container element (CSS selector or reference to DOM node).
   // file.appendTo('body')
 // })
})