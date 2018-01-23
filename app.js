var express = require("express");
var app = express();
var rp = require("request-promise");

app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
})


app.get("/results", function(req, res){
    
    var url = "http://api.nbp.pl/api/cenyzlota/";
    
    rp(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    })
})
app.get("/results2", function(req, res){
    
    var url = "http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json";
    
    rp(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results2", {data: data});
        }
    })
})



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("app started");
});