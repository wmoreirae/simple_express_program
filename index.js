const express = require('express');

app = express()

app.get('/', (req, res) => {
  const { min, max} = req.query;
  let txt = ''
  for (let i = Number(min); i <= Number(max); i++){
    if (i % 2 == 0){
      txt += `${i}\n`;
    }
  }
  res.send(txt);
});

app.listen(3000);
