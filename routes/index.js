var express = require('express');
var router = express.Router();
var mail="minorhash@gmail.com";

var mar= require('./js/mar');
var feb= require('./js/feb');
var marmail=mar(mail)
var febmail=feb(mail)
var mon,cal

var getMon=function(req, res, next) {
var d=new Date();
mon=d.getMonth()
    if(mon==2){
cal=marmail
    }else if(mon==1){
cal=febmail
    }
next()}

var chk=function(req, res, next) {
console.log(mar(mail))
next()}

var ren=function(req, res, next) {
    res.render('index', { title: 'Express',
mon:mon+1,
cal:cal

});
}

router.get('/',[getMon,chk,ren]);

module.exports = router;
