const WebTorrent = require('webtorrent')
const client = new WebTorrent()

const torrentId = 'magnet:?xt=urn:btih:662643CE8E94A03C4DC6F7BC60D10712B1130AEB'

client.add(torrentId, function (torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  const file = torrent.files.find(function (file) {
    return file.name.endsWith('.mp4')
  })

  // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
  file.appendTo('body')
})