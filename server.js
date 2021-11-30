const express = require('express')
const path = require('path')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'lindadxk',
  api_key: '125145568524294',
  api_secret: 'L9ewAOFFLLdA2JRUU0Cf10GLgKA',
  secure: true
});

cloudinary.uploader.explicit(
  'https://res.cloudinary.com/lindadxk/video/upload/v1633948635/sample-video.mp4',
  {
    resource_type: "video",
    type: "upload",
    eager: [
      {
        streaming_profile: "hd",
        format: "m3u8"
      }
    ],
    eager_async: true,
    public_id: "sample-video"
  }
)
  .then((result) => {
    console.log(result);
  })
  .catch(error => console.error(error));

