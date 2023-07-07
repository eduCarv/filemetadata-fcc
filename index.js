var express = require('express');
var multer = require('multer');
var cors = require('cors');
var app = express();
require('dotenv').config()

const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'),  (req, res, next) => {
  const arquivo  = req.file;

  console.log(arquivo);
  res.json({
    name: arquivo.originalname,
    type: arquivo.mimetype,
    size: arquivo.size
  })
  
});



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
