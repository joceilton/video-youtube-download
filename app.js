const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const download = require('./video_download')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'src')

app.use(express.static('src/public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.render('index');
})

app.post('/download', async (req, res) => {
	var execute = await download.baixarVideo(res, req.body.url, "mp4")
	console.log(execute)
})

app.get('/concluido', (req,res) => {
	res.send('<h1> Download Concluido </h1>')
})

app.get('/video/:video_url', (req, res) => {
	var video_url = req.params.video_url
	res.sendFile(__dirname + "/src/video/" + video_url)
})

app.listen(port, ()=> {
	console.log('Servidor inciado na porta 3000')
})
