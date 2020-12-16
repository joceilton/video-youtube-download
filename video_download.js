const youtubedl = require('youtube-dl')
const fs = require('fs')
var path = require('path');
var EventEmitter = require('events')
var porcentagem
var size
var filename
var output
var url
 
function baixarVideo(res, url, formato) {
	
porcentagem = 0

var ee = new EventEmitter()
ee.on('message', function (porcentagem) {
  console.log(porcentagem)
})

if (url == "") {
  res.send("Digite uma Url")
  return false
}
 
const video = youtubedl(url,
  // Optional arguments passed to youtube-dl.
  
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })
 
video.on('error', function error(err) {
    console.log('error 2:', err);
  });
 
  var size = 0;

  video.on('info', function(info) {
    size = info.size;
    filename = info._filename
    url = info.url
    res.send(url)
    //output = path.join(__dirname + '/src/video/', filename);
    //video.pipe(fs.createWriteStream(output));
  });


/*var pos = 0;
  video.on('data', function data(chunk) {
    pos += chunk.length;
    // `size` should not be 0 here.
    if (size) {
      var percent = (pos / size * 100).toFixed(2);
      process.stdout.cursorTo(0);
      process.stdout.clearLine(1);
      process.stdout.write(percent + '%');
    ee.emit('message', percent)
    }
  });*/
  
 //video.pipe(fs.createWriteStream(__dirname + "/src/video/" + filename + "." + formato))

/*video.on('complete', function complete(info) {
  'use strict'
  res.send('filename: ' + info._filename + ' already downloaded.')
})*/

video.on('end', function(info) {
  //res.send('finished downloading!' + '<a href="'+ "/video/myvideo" + "." + formato + '"> View </a>')
  res.send(url)
})

}

module.exports = {
	baixarVideo
}