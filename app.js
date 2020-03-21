var express = require('express');
var app = express();

app.get('/',function (req,res){
    res.sendFile(__dirname+'/static/index.html')
});
app.get('/about',function (req,res){
    res.sendFile(__dirname+'/static/about/index.html')
});
app.get('/about/allan-kardec',function (req,res){
    res.sendFile(__dirname+'/static/about/allankardec.html')
});
app.get('/about/eric-binsfeld',function (req,res){
    res.sendFile(__dirname+'/static/about/ericbinsfeld.html')
});
app.get('/about/kevson-filipe',function (req,res){
    res.sendFile(__dirname+'/static/about/kevsonfilipe.html')
});
app.get('/about/pablo-miranda',function (req,res){
    res.sendFile(__dirname+'/static/about/pablomiranda.html')
});
app.get('/about/wanghley-martins',function (req,res){
    res.sendFile(__dirname+'/static/about/wanghleymartins.html')
});

app.get('/error/404',function (req,res){
    res.sendFile(__dirname+'/static/error/404.html')
});

app.get('/about/about.css',function (req,res){
    res.sendFile(__dirname+'/static/about/CSS/about.css')
});

app.use('/img',express.static(__dirname + '/static/img'));
app.use('/css',express.static(__dirname + '/static/css'));
app.use('/bootstrap',express.static(__dirname + '/static/bootstrap'));
app.use('/fonts',express.static(__dirname + '/static/fonts'));
app.use('/js',express.static(__dirname + '/static/js'));
app.use('/error',express.static(__dirname + '/static/error'));

app.listen(process.env.PORT || 5000,function(){
    console.log('Running done!')
});