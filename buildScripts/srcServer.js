var express = require('express');
var path = require('path');
var open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';


var port = 4000;
var app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'../src/index.html' ))
});

app.listen(port,(err)=>{
    if(err)
        console.error(err)
    else
        open('http://localhost:' + port);
})
