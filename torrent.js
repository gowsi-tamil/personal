'use strict';
const webTorrent =require('webtorrent-hybrid');
const fs =require('fs');
const torrentId = preocess.argv[2];
console.log("Torrent Id: -\t"+torrentId);
const client = new webTorrent();

client.add(torrentId,torrent =>{
    const files = torrent.files;
    let length =files.length;
    console.log("no of files:- \t"+length);
    files.forEach(file =>{
        const source =file.createReadStream();
        const destination=fs.createWriteStream(file.name);
        source.on('end',()=>{
            console.log('file: \t\t',file.name);
            length -=1;
            if(!length) process.exit();


        }).pipe(destination);
    })
})