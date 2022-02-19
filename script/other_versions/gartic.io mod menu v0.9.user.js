// ==UserScript==
// @name         gartic.io mod menu
// @name:tr      gartic.io mod menüsü
// @name:az      gartic.io mod menyusu
// @name:ar      قائمة تعديل gartic.io
// @version      0.9
// @homepageURL  https://github.com/anonimbiri/gartic.io-hack
// @supportURL   https://github.com/anonimbiri/gartic.io-hack/issues
// @description  drawing assistant, answer assistant and many more features
// @description:tr çizim yardımcısı, cevap yardımcısı ve daha birçok özellik
// @description:az çizim köməkçisi, cavab köməkçisi və daha çox xüsusiyyət
// @description:ar مساعد الرسم ومساعد الإجابة والعديد من الميزات
// @author       Anonim Biri
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.29/howler.min.js
// @icon         https://gartic.io/static/download/character.png
// @match        https://gartic.io/*
// @grant    GM_setValue
// @grant    GM_getValue
// @grant    GM_deleteValue
// @grant        none
// @namespace http://tampermonkey.net/
// @downloadURL none
// ==/UserScript==

var langlist = {}
var Wordslist = []
var sendfound = []
var woldid = 0;
var lang = 2;
var customurl = "";
setTimeout(function () {
          loadwoldlist();
}, 1000)
this.GM_setValue=function (key,value) { // tr: burası bazı verilerin local Storageye kayıt edilmesi // en: this is where to save some data to local storage
        return localStorage[key]=value;
    };
 this.GM_getValue=function (key,def) {
        return localStorage[key] || def;
    };
    this.GM_deleteValue=function (key) {
        return delete localStorage[key];
    };
setTimeout(function() {
    var afkk = false;
    var reportt = false;
    var otokickk = false;
    var skipp = false;
    var renklicizim = false;
    var renklicizimms = 1000;
    var autoanswer = false;
    var autoanswerms = 1000;
   
    loop();
    menuns();
     console.log("ooooooooooooooooooolcclloooooooooooooooooooooolcc::::clooooooooooooooooooolc:::::ccloooooooooooooooo\nooooooooooooooooolllooooooooodoooooooooooooolc:::ccclooooooooooooooooooooc:::::ccloooooooooooooooool\nooooooooooooooooooooooooooooooooooooooooolcc::ccloooooooooooooooooooooolc::::cloooooooooooooooooolc:\nloooooooooooooooooodooooooooooooooooooolc:::cllooodoooooooooooooooooolc:::cclooodoooooooooooooolc:::\noooooooooooooooooooooooooooooooooooollc::cclooooooooooooooooooooooolc:::clooooooooooooooooooolc:::::\noooooooooooooooooooooooooooooooooolcc:ccloooooodddddddddddddddddolc::cclooooooooooooooooooolcc::::::\noooooooooooooooooooooooooooooooolc:ccloddxkO00KKXXXXXNNNNNXXXXXK0OOkkkxxddooooooooooooooolcc::::::::\nooooooooooooooooooooooooooooollcccloxO0XNWWMMMWNNNXXXXKKKXXXXNNWWWMMMWWNXK0kxdoodoooooolcc::::::::::\nooooooooooooooooooooooooooolcccldk0XNWMWX0kdol:;;,,'''''''',;;:cclodxk0XWMMWNKOxdooooocc:::::::::cll\nooooooooooodooooooooooooolllldOKNWMWXOd:,.............................,:oxkKWMWN0kdlcc::::::::cclooo\nooooooooooooooooodooooolllokKNWMN0xl;............'',;;;::::::;,'........';:ldkXMMN0oc::::::ccloooooo\nooooollloooooooooooooooodOXWMN0xl:'.......',:lodxkOOOOO0000OOOOkkxdol:,'...,:clkNMWKdc:::clloooooooo\nollccloooooooooodooooodOXWMNOoc;'.....';cdkO00KK000000000000000000O00OOkoc'..'cclKMMXxcclooooooooooo\nc:cloooooooooooooooodkKWMNOol:,....':okO0KKKKKK0000000000000000000000O000Okl'..cclKMMKxooooooooooooo\nclooooooooooooooooodONMW0ool;....,lx0KKKKKK00O00000000000000000000000000000Oo'.,l:xWMWOdoooooooooooo\noooooooooooooooooox0WMNkodc....,lk00000000000O0000O00O0000000000000O00000000k;.'ocdWMWOdoooooooooooo\noooooooooooooooooxKWMXdod;....ckOO0000000OO0000OOkxxxxxxdxxxkO000000000O00O0O:.'cl0MMNkooooooooooooo\nooooooooooooooooxKWMXddd,...,oO00O000000000Okxxxdddollc;;;;;;;;;:cldkO00000Oo'.'ckWMW0dooooooooooool\noooooooooooooood0WMXddx,...;x000000000000OOkxoc:;::ccllooolcc:,'.....,:cllc;...c0WMW0xoooodoooooolcc\noooooooooooooookNMNxdk;...;k000000000KKK0Odc,';lkKXNWMMMMMMMWWNK0xo:'......';lkNMMNOddooooooooolcc::\noooooooooooolloKMMOdOl...,x000000KKKKKOko;..;xXWMMMMMMWNXKK0000KKXNXX0OkkO0XNWMWN0kdooooooooolc:::cc\noooooooollccclkNMNxkx'..'dO00KKKKK00Oxo;...oXMMMNKOkoc:,'.......'',:codkKNXKNMMW0xooooooooolc::ccloo\nooooolccccclod0WM0xOl...cO00KK00000Okc'...dNMWKd:......,;;::::;;;,,,....':lox0WMWKxoooooolcccclooooo\nollcc::clloooxXMWkxO;..'d00000K0000Ol....oNMWk;..';;coxkOOOOOOOkkxxdoc:,...,cokNMWXxdoolcclloooooooo\nc::::clooooookXMWkxx...;kKKKKK00000d'...:KMWk'..'cldO00000000000000OOkxdc'...;cxNMWKxllllooooooooooo\n:::clooooooookNMWkxo...c0KK00000000o....dWMNl...;dxO00000000000O0000000Okd:...':xWMWOooooooooooooooo\ncclooooooodooxXMWkxl...;k000000000Ol....xWMXc...;lldO0O0000000000O0000OO00kc'...:0MMNkoooooooooooooo\nlooooooooooooxKMMOdc...,x0O00000000d'...cXMWk,...,;:ldkOOO0OOOOkkOO00000000Oo....dWMW0dooooooooooooo\noooooooooooood0WMKd:....lO000000OO0k:....oXMW0c.......,;::::;;,''ck000000000O:...cXMMKdooooooooooooo\nooooooooooooodkNMNx:....,x0O0000O000x;....:ONMW0dc:;.............cOK00000000O:...cXMMKdooooooooooooo\nooooooooooooooxKMM0o,....:k00000KK000kc'....:xKNMWWNKOkdool:....:kK000000O00k;...lNMW0dooooooooooool\nooooooooooodoookNMNkc,....:x0KKKK00000Oxl;.....;lxkkO0OOOxl,..'ck00000000O00d'..'kWMNOdooodoooooolcc\noooooooooooollod0WMXkl;....;x00000O000000Oxoc;,'........'',;cokO00000000000x;...cXMMKxooooooooolcc::\noooooooollclooooxKWMXOxl'....cxO0O0000O0OO000OOkxdddooodxkkO0000000000O000k:...;0MMNkdooooooolc:::::\nooooolcccloooooooxXWWX0Od;....'lxO000000O00000000000000000O00000O000O000Od;...:0WMNOdoooooolcc::::cc\noolcccclooooooooookKWMNXKOc.....':dkO000O000O00O0000000000000000000OO00xc'...lKWMNOdodooolc:::cclloo\ncc:cclooooooooooooox0NMWWWXx;......,cdkO00000O0000O0000000000000000K0kl'...:OWMWXkdoooolcccccloooooo\n:clooooooooooooooooodkKWWMMWKxc'......,:oxOO000000000000OO0000000Oxl;....:kNMWN0xoooolcccllooooooooo\nlooooooooooooooooooooodkO0KNWMN0xl;.......';:codkkkkO00Okxxdolc:;'....'lONMWN0xdoooolllooooooooooooo\nooooooooooooooooooodoooooodxk0XWMWN0kdc;'..........'',,''..........,cxKWMWX0xdoooooooooooooooooooooo\nooooooooooooooooooooooooolcc:cok0KNWMMNKOkxoc;,...............';cdOXWMWNKOxooooooooooooooooooooooooo\nooooooooooooooooooooollcc:::cloooddkKNWMMWWNNXK0kxddoooooddxO0XNWMMWXKOxdooooooooooooooooooooooooooo\nooooooooodooooooollcc::::ccloooooooodxkO0KKXNNWWWMMMMMMMMMMWWWNXK0Okddoodooooooooooooooooooooooooooo\noooooooooooooolcc::::::clloodooooooooooooddddxxkkOOOkkkkkOOkkxxddooooooooooooooooooooooooooooooooooo\noooooooooollcc:::::::cloooooooooooooooooooooooooolccc:cloooooooooooooooooooooooooooooooooooooooooooo\noooooollcc::::::::cclooooooooooooooooooooooooolcc:::cloooooooooooooooooooooooooooooooooooooooooooooo\noollcc::::::::::clooooooooooooooooooooooooolcc:::ccloooooooooooooooooooooooooooooooooooooooooooooolc\ncc::::::::::::cloooooooooooooooooooooooolcc::::clooooooooooooooooooooooooooooooooooooooooooooooolc::\n:::::::::::cclooooooooooooooooooooooolcc:::::cloooooooooooooooooooooooooooollccloooooooooooooolc::::\n::::::::::clooooooooooooooooooooooolc:::::::clodooooooooooooooooooooooooolcc::looooooooodooooc::::::");
     console.log('%cdeveloper: %cAnonim Biri', 'font-size: 20px;', "color: yellow; font-size: 30px;");
    (async () => {
  let yenileme = await GM_getValue('yenile');
if(yenileme === "true"){
    setTimeout(function() {
$(".btYellowBig.ic-playHome").click();
GM_deleteValue("yenile");
    }, 1000);
}
})();
function lnkfunc(value) {

}
 document.addEventListener("keydown", e => {
if (!document.querySelector("#popUp #modmenupopUp")){
  if (e.key === "m" && e.ctrlKey) {
    menu();
  }else if (e.key === "M" && e.ctrlKey){
   menu();
  }}else{
 if (e.key === "m" && e.ctrlKey) {
    closemenu();
  }else if (e.key === "M" && e.ctrlKey){
   closemenu();
  }
  }
});

function menuns() {
     setTimeout(function() {
        javascript:(function loops(){
             menuns();
             if (!document.querySelector("#afk")){
// tr: burası ayararı ayarladığımız kısım yani menünün içinde bulunan buttonlar // en: this is the part where we set the settings, that is the buttons inside the menu
$('#modmenupopUp .content .contentPopup.info').append('<h5 style="color:black;">'+langlist.translator+": "+langlist.translator_by+'</h5>');
$('#modmenupopUp .content .contentPopup.info').append('<label class="select lang"><select name="language"><optgroup label="Languages"><option value="23">Azərbaycanca</option><option value="2">English</option><option value="8">Türkçe</option><option value="19">العربية</option><option value="999">Custom</option></optgroup></select></label>');
$('.select.lang').on('change', 'select[name="language"]', function() { lang =document.querySelector('.select.lang select').value; loadwoldlist();});
$('#modmenupopUp .content .contentPopup.info').append('<label class="text" style="width: 100%; height: 40px;"><input class="woldurl" type="text" placeholder="URL (.json)" value=""></label>');
$('.contentPopup.info .text').on('change', '.woldurl', function() { customurl = document.querySelector('.woldurl').value; loadwoldlist();});
$('#modmenupopUp .content .contentPopup.info').append('<div class="fieldset visibleRoom" style="width: 100%; height: 40px;"><img src="https://i.imgur.com/iBPf50O.png" style="position:relative;top:7px;right:5px;height:25px;"><span class="legend">'+langlist.Anti_AFK+': </span><div class="switchFieldCheck" style="float:right;"><input type="checkbox" name="visible" id="afk"><label for="afk"></label></div></div>');
$('.switchFieldCheck').on('change', '#afk', function() { if(afkk==false) { afkk=true; $('.scrollElements:eq(1)').append('<div class="msg system">Anti AFK: <strong>Enabled</strong></div>'); }else{afkk=false; $('.scrollElements:eq(1)').append('<div class="msg system">Anti AFK: <strong>Disabled</strong></div>');} antiafk(); });
$('#modmenupopUp .content .contentPopup.info').append('<div class="fieldset visibleRoom" style="width: 100%; height: 40px;"><img src="https://i.imgur.com/HfLAgAS.png" style="position:relative;top:7px;right:5px;height:25px;"><span class="legend">'+langlist.Auto_kick+': </span><div class="switchFieldCheck" style="float:right;"><input type="checkbox" name="visible" id="otokick"><label for="otokick"></label></div></div>');
$('.switchFieldCheck').on('change', '#otokick', function() { if(otokickk==false) { otokickk=true; $('.scrollElements:eq(1)').append('<div class="msg system">Auto kick: <strong>Enabled</strong></div>');}else{otokickk=false; $('.scrollElements:eq(1)').append('<div class="msg system">Auto kick: <strong>Disabled</strong></div>');} kicks(); });
$('#modmenupopUp .content .contentPopup.info').append('<div class="fieldset visibleRoom" style="width: 100%; height: 40px;"><img src="https://i.imgur.com/it44rZS.png" style="position:relative;top:7px;right:5px;height:25px;"><span class="legend">'+langlist.Auto_Skip+': </span><div class="switchFieldCheck" style="float:right;"><input type="checkbox" name="visible" id="otoskip"><label for="otoskip"></label></div></div>');
$('.switchFieldCheck').on('change', '#otoskip', function() { if(skipp==false) { skipp=true;$('.scrollElements:eq(1)').append('<div class="msg system">Auto skip: <strong>Enabled</strong></div>');}else{skipp=false;$('.scrollElements:eq(1)').append('<div class="msg system">Auto skip: <strong>Disabled</strong></div>');} skip(); });
$('#modmenupopUp .content .contentPopup.info').append('<div class="fieldset visibleRoom" style="width: 100%; height: 40px;"><img src="https://i.imgur.com/VkvLxc0.png" style="position:relative;top:7px;right:5px;height:25px;"><span class="legend">'+langlist.Auto_Report+': </span><div class="switchFieldCheck" style="float:right;"><input type="checkbox" name="visible" id="otoreport"><label for="otoreport"></label></div></div>');
$('.switchFieldCheck').on('change', '#otoreport', function() { if(reportt==false) { reportt=true; $('.scrollElements:eq(1)').append('<div class="msg system">Auto report: <strong>Enabled</strong></div>');}else{reportt=false; $('.scrollElements:eq(1)').append('<div class="msg system">Auto report: <strong>Disabled</strong></div>');} report(); });
$('#modmenupopUp .content .contentPopup.info').append('<div class="Rainbow Drawing" style="width: 100%; height: 40px;"><img src="https://i.imgur.com/MH34Z4h.png" style="position:relative;top:7px;right:5px;height:25px;"><span class="legend">'+langlist.Rainbow_Drawing+': </span><div class="switchFieldCheck" style="float:right;"><input type="checkbox" name="visible" id="renklicizimm"><label for="renklicizimm"></label></div><input name="renklicizimmms" id="renklicizimmms" type="number" style="position:relative;top:8px;float:right;right:5px; width: 20%;" max="100000" step="1" value="1000" class="renklicizimmms" oninput="amount.value=renklicizimmms.value;"></div>');
$('.switchFieldCheck').on('change', '#renklicizimm', function() { if(renklicizim==false) { renklicizim=true; $('.scrollElements:eq(1)').append('<div class="msg system">Rainbow Drawing: <strong>Enabled</strong></div>'); }else{renklicizim=false; $('.scrollElements:eq(1)').append('<div class="msg system">Rainbow Drawing: <strong>Disabled</strong></div>');} rengareknkizim(); });
$('.Rainbow.Drawing').on('change', '.renklicizimmms', function() { renklicizimms = document.querySelector('.renklicizimmms').value;});

$('#modmenupopUp .content .contentPopup.info').append('<div class="Auto Answer" style="width: 100%; height: 40px;"><img src="https://i.imgur.com/ejCouCQ.png" style="position:relative;top:7px;right:5px;height:25px;"><span class="legend">'+langlist.Auto_Answer+': </span><div class="switchFieldCheck" style="float:right;"><input type="checkbox" name="visible" id="autoanswerr"><label for="autoanswerr"></label></div><input name="renklicizimmms" id="renklicizimmms" type="number" style="position:relative;top:8px;float:right;right:5px; width: 20%;" max="100000" step="1" value="1000" class="autoanswerms" oninput="amount.value=autoanswerms.value;"></div>');
$('.switchFieldCheck').on('change', '#autoanswerr', function() { if(autoanswer==false) { autoanswer=true; $('.scrollElements:eq(1)').append('<div class="msg system">Auto answer: <strong>Enabled</strong></div>'); }else{autoanswer=false; $('.scrollElements:eq(1)').append('<div class="msg system">Auto answer: <strong>Disabled</strong></div>');} autoanswerloop(); });
$('.Auto.Answer').on('change', '.autoanswerms', function() { autoanswerms = document.querySelector('.autoanswerms').value;});





                 if(document.querySelector('#afk'))
                 {
                     document.querySelector('#afk').checked = afkk;
                 }
                 if(document.querySelector('#otoreport'))
                 {
                     document.querySelector('#otoreport').checked = reportt;
                 }
                 if(document.querySelector('#otokick'))
                 {
                     document.querySelector('#otokick').checked = otokickk;
                 }
                  if(document.querySelector('#renklicizimm'))
                 {
                     document.querySelector('#renklicizimm').checked = renklicizim;
                 }
                 if(document.querySelector('.renklicizimmms'))
                 {
                     document.querySelector('.renklicizimmms').value = renklicizimms;
                 }
                 if(document.querySelector('#otoskip'))
                 {
                     document.querySelector('#otoskip').checked = skipp;
                 }
                 if(document.querySelector('.contentPopup.info .select.lang select[name="language"]'))
                 {
                     document.querySelector('select[name="language"]').value = lang;
                 }
                 if(document.querySelector('#modmenupopUp .content div #option1'))
                 {

                 }
                  if(document.querySelector('#autoanswerr'))
                 {
                     document.querySelector('#autoanswerr').checked = autoanswer;
                 }
                 if(document.querySelector('.autoanswerms'))
                 {
                     document.querySelector('.autoanswerms').value = autoanswerms;
                 }
                 if(document.querySelector('.woldurl'))
                 {
                     document.querySelector('.woldurl').value = customurl;
                 }

             }
             if (!document.getElementById("author")){
           $('#screens header div .logo').append('<div style="border:1px solid black;border-radius:20px;padding:3px;width:200px;height:20px;font-size: 17px;text-align:center;background-color: 0, 106, 208;color:white;" id="author"></label>'+ langlist.Cheat_İnjected +'<a style="font-weight:bold;color:black;font-size:14px;text-decoration:none;" class="author"></div>');
            }
              })()
            }, 0);
}

    function report() {

        setTimeout(function() {
        javascript:(function loops(){
            if(reportt==true) {
     report();

     let reportbutton = document.querySelector('.denounce');
                if(reportbutton == null){
                }else{
        reportbutton.click();
                }
            let aceeptbutton = document.querySelector('.btYellowBig.smallButton.ic-yes');
                 if(aceeptbutton == null){
                }else{
        aceeptbutton.click();
                }
                }
            })()
            }, 0);
    }
 let blacklist = "";
 function kicks() {
        setTimeout(function() {
        javascript:(function loops(){
             if(otokickk==true) {
     kicks();

                if(document.querySelector('#chat .history .scroll .scrollElements .msg.alert')){
            let KickaAtanText =  $('#chat .history .scroll .scrollElements .msg.alert:last strong:eq(0)').text();
            let KickaAtılanText =  $('#chat .history .scroll .scrollElements .msg.alert:last strong:eq(1)').text();
             let seninnickin =  $('.user.you .infosPlayer .nick').text();
            if(KickaAtılanText === seninnickin){
                 let seninnickin =  $('.user.you .infosPlayer .nick').text();
               if(KickaAtanText === blacklist){
               }else{
                 blacklist = KickaAtanText;
                    document.getElementsByClassName("mousetrap")[0].value=blacklist + KickaAtanText;
                $('#chat .history .scroll .scrollElements .msg.alert:last strong:eq(0)').click()
                $('.buttons .btYellowBig.ic-votekick').click()
               }
            }
          }

             }
            })()
            }, 0);
    }
let colorindex = 0
    function rengareknkizim() {
                setTimeout(function() {
        javascript:(function loops(){
            if(renklicizim==true) {
                rengareknkizim();
if (document.querySelector("#hint button")){

    if(colorindex < 18){
            colorindex += 1;
            $('#tools div .colors .color:eq('+ colorindex +')').click() //18
     }else{
     colorindex = 0;
     }
}
            }
             })()
            }, renklicizimms);
}
    function antiafk() {
        setTimeout(function() {
        javascript:(function loops(){
             if(afkk==true) {
     antiafk();
            let yesbutton = document.querySelector('.btYellowBig.ic-yes');
                   if(yesbutton == null){
                }else{
        yesbutton.click();
                }
             }
             if (document.querySelector("#modmenupopUp")){
             $('#popUp').css({"display": "block"});}
            })()
            }, 0);
    }

    function skip() {
        setTimeout(function() {
        javascript:(function loops(){
             if(skipp==true) {
     skip();
            let skipbutton = document.querySelector('.btYellowBig.ic-drawG'); //hint div button
                   if(skipbutton == null){
                }else{
                    skipbutton.click();
                }
                 if (document.querySelector("#hint button")){
                 $('#hint div button:eq(1)').click(); //btYellowBig smallButton ic-yes
                 $('.buttons .btYellowBig.smallButton.ic-yes').click();
                 }
             }
            })()
            }, 0);
    }
function autoanswerloop() {
    setTimeout(function() {
        javascript:(function loops(){
                  autoanswerloop();
if (document.getElementById("canvas")){
let isinput = document.querySelector('input[name="answer"]').disabled;
     if(isinput==false){
if (woldid < sendfound.length){
  sendmesaj(sendfound[woldid]);
woldid = woldid+1;
}
}
}
           })()
            }, autoanswerms);
    }

}, 0);

let blacklist2 = "";
let öncekiyazı = "";
 function loop() {
             setTimeout(function() {
        javascript:(function loops(){
     loop();

            if (document.getElementById("hint")){
                let kelime1 = $('.word:eq(0) span:parent').text();
                let kelime2 = $('.word:eq(1) span:parent').text();
                let kelime3 = $('.word:eq(2) span:parent').text();
                let kelime4 = $('.word:eq(3) span:parent').text();
                let InputText = kelime1.toLowerCase() + " " + kelime2.toLowerCase() + " " + kelime3.toLowerCase() + " " + kelime4.toLowerCase();
                if (document.querySelector("#hint button")){
                if (document.getElementById("ara")){

                }else{
 $('#hint').append('<div class="trbuttontr"></div>');
                $('.trbuttontr').html('<div id="ara"><body><button type="button" onclick="parent.open(\'https://www.google.com/search?tbm=isch&tbs=itp:lineart&q=' + InputText + '\');">'+langlist.search+'</button></body></div>');
                }
            }else{
                $('#trbuttontr').removeClass();
            }
            }


             if(lang == 999)
                 {
                 if (document.querySelector(".contentPopup.info .text")){$('.contentPopup.info .text').css({"display": "block"});}
                 }else{
                  if (document.querySelector(".contentPopup.info .text")){$('.contentPopup.info .text').css({"display": "none"});}
                 }

            if (document.querySelector("#kemlimelistesi #screens")){
                if (!document.querySelector("#__next .contribute .center")){
              $('#__next').prepend('<div class="contribute"><div><div class="center"><span><h3>Gartic.io hack!</h3><p>İf the page does not open, refresh 1 how many times</p></span><a href="https://github.com/anonimbiri/gartic.io-hack" target="_blank">Github source code</a></div></div><div>');
            }}
            if (document.querySelector(".contentPopup .avatar")){
                var bg = $(".contentPopup .avatar").css("background-image")
                 if (bg === "none"){}else{
                bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')//.replace("type=large","type=square").replace("v2.6/","")
                $(".contentPopup .avatar").attr({"onclick": "parent.open(\'" + bg +"\')",});
            }}
            if (!document.getElementById("tamekran")){
               $('.game div:eq(2) div:eq(1)').prepend('<div id="trbuttontr3"></div>');
              $('#trbuttontr3').prepend('<button id="tamekran" class="closing" ><img src="https://i.imgur.com/wm4kFLf.png" style="width:25px;height:25px;" /><span class="tooltip">'+langlist.Full_screen+'</span></button>');
               $('#trbuttontr3').on('click', '#tamekran', function() { showfullscreen(); });
                }
            if (!document.getElementById("modmenu")){
               $('.game div:eq(2) div:eq(1)').prepend('<div id="trbuttontr4"></div>');
              $('#trbuttontr4').prepend('<button id="modmenu" class="closing" ><img src="https://i.imgur.com/4Dk6c7r.png" style="width:25px;height:25px;" /><span class="tooltip">Mod Menu (Ctrl + M)</span></button>');
               $('#trbuttontr4').on('click', '#modmenu', function() { menu(); });
                }
             $('.content').on('click', '.close', function() { closemenu(); });
            if (!document.getElementById("uplatimage")){
               $('.game div:eq(2) div:eq(0)').append('<div id="4trbuttontr"></div>');
              $('#4trbuttontr').append('<button id="uplatimage" class="closing" ><img src="https://i.imgur.com/CU5Gjga.png" style="width:25px;height:25px;" /><span class="tooltip">'+langlist.Upload_image_from_clipboard+'</span></button>');
               $('#4trbuttontr').on('click', '#uplatimage', function() { arakaplanyap(); });
                }
            if (!document.getElementById("odadegis")){
               $('.game div:eq(2) div:eq(0)').append('<div id="5trbuttontr"></div>');
              $('#5trbuttontr').append('<button id="odadegis" class="closing" ><img src="https://i.imgur.com/HZsuXxP.png" style="width:25px;height:25px;" /><span class="tooltip">'+langlist.Change_room+'</span></button>');
               $('#5trbuttontr').on('click', '#odadegis', function() { changeroom(); });
                }
// tr: mobil menü açmak için button // en: button to open mobile menu
if (!document.querySelector(".Mobile.Mod.Menu")){
              $('.actionsMobile').prepend('<button class="Mobile Mod Menu"><img src="https://i.imgur.com/JodxI35.png" style="width:25px;height:25px;" /></button>');
               $('.actionsMobile').on('click', '.Mobile.Mod.Menu', function() { menu(); });
                }
if (!document.querySelector("#popUp .loading #loadingimage")){
 $('#popUp .loading').append('<div id="loadingimage"></div><img src="https://i.imgur.com/oXqL49V.gif" style="position:relative;left:11px;top:-100px;width:80px;height:80px;">');
}

if (!document.getElementById("sensinbu")){
             $('.user.you').append('<div id="sensinbu"></div>');
             $('#sensinbu').html('<img src="https://i.imgur.com/tZ5QPu8.png" style="position:relative;left:-20px;width:30px;height:30px;">')
             }

            if (!document.getElementById("trbuttontr2")){
             $('.content.profile .buttons').append('<div id="trbuttontr2"></div>');
            $('#trbuttontr2').html('<button class="btYellowBig ic-copylink" ><strong>'+langlist.copy_nickname+'</strong></button>')
            }
            $('#trbuttontr2').on('click', '.btYellowBig.ic-copylink', function() { copynickname(); });

// tr: henüz test aşamasında olduğu için çalışmayabilir burası sürükle bırak fonksiyonunun olduğu yer // en: may not work as it is still in testing phase this is where the drag and drop function is
 if (!document.getElementById("sürüklebırak")){
             $(".content").attr({"ondragover": "document.getElementById('sürüklebırak').style.display = \'block\'", "ondragleave": "document.getElementById('sürüklebırak').style.display = \'none\'", "ondragexit":"document.getElementById('sürüklebırak').style.display = \'none\'"});//ondragover dragleave
             $('#events').append('<div id="sürüklebırak" style="display: none; height: 100%; width:100%; background-repeat: no-repeat; background-size: auto; text-align: center;color: white;border:1px solid rgba(93,136,153,255);border-radius:10px;background-color:black; opacity: 50%"><h4 style="margin: auto;text-align: center;padding: 250px;font-size:30px">Coming Soon</h4></div>');
 }

            if(document.querySelector('#answer .history .scroll .scrollElements .msg strong')){
            let yazılanmesaj =  $('#answer .history .scroll .scrollElements .msg:last').text();
            let yazankişi =  $('#answer .history .scroll .scrollElements .msg:last strong').text();
             let seninnickin =  $('.user.you .infosPlayer .nick').text();
            if(yazankişi === seninnickin){
               if(yazılanmesaj === blacklist2){
               }else{
                 blacklist2 = yazılanmesaj;
                  $('#kemlimelistesi button:contains(\''+yazılanmesaj.replace(seninnickin,"").replace(" ","")+'\')').css({"backgroundColor": "green","color": "white" });
                   $('#kemlimelistesi button:contains(\''+yazılanmesaj.replace(seninnickin,"").replace(" ","")+'\')').detach().appendTo("#kemlimelistesi");

               }

            }

          }


             if(document.querySelector('.fieldset.lang .select select[name="language"]'))
                 {
                   lang =  document.querySelector('.fieldset.lang .select select[name="language"]').value;
                 }

if (!document.querySelector("#kemlimelistesi #hit")){
$('#kemlimelistesi').append('<h5 id="hit" style="color:red;">word not found try pressing the refresh button in the corner</h5>');
}
       if (!document.getElementById("kemlimelistesi")){
            if (document.querySelector(".logo")){
           $('.banner').remove();
                 if (document.getElementById("canvas")){
           $('.nextCenter').append('<div id="kemlimelistesi" style="margin-left: auto;margin-right: auto; height: 600px; overflow: scroll; width: 200px;border:1px solid rgba(93,136,153,255);border-radius:10px;padding:20px;background-color: rgba(159,189,201,255);"></div>');
           $('#kemlimelistesi').append('<button class="pin worldlist button" style="margin-right: 0%; float:right; position: relative;" data-toggle="tooltip" title="Pin"><img src="https://i.imgur.com/Bu7ERLd.png"></button>');
           $('#kemlimelistesi').append('<button class="refresh world button" style="margin-right: 2%; float:right; position: relative;" data-toggle="tooltip" title="Refresh Word"><img src="https://i.imgur.com/vwz9J2k.png"></button>');
            }
            }
         $('#kemlimelistesi').on('click', '.pin.worldlist', function() {  (async () => { let pins = await GM_getValue('pinworldlist'); if(pins == null){ GM_setValue("pinworldlist", "true"); $(".pin.worldlist img").attr("src","https://i.imgur.com/AR0yw1X.png");}else{GM_deleteValue("pinworldlist");$(".pin.worldlist img").attr("src","https://i.imgur.com/Bu7ERLd.png");}})();});
         $('#kemlimelistesi').on('click', '.refresh.world', function() {$('#kemlimelistesi #hit').remove(); processCurrentWord(); });


        $('#kemlimelistesi').on('click', 'button', function() { var fired_button = $(this).text(); sendmesaj(fired_button); });
         }

 if (document.getElementById("hint")){
     if (!document.querySelector("#hint button")){
              var len = $('input[name="answer"]').val().length;
              var InputText2 = $('.line').html()
              var InputText =  InputText2.replace(/<span><\/span>/gi, " _ ").replace(/<span>/gi, "").replace(/<\/span>/gi, "").replace(/<div class="word">/gi, "").replace(/<\/div>/gi, " ㅤ "); ///<span></span>/g
              var InputText3 =  InputText2.replace(/<span><\/span>/gi, "_").replace(/<span>/gi, "").replace(/<\/span>/gi, "").replace(/<div class="word">/gi, "").replace(/<\/div>/gi, ""); ///<span></span>/g
              var hitlen = InputText3.length;
              hitlen -= 1;
              hitlen += document.getElementsByClassName("word").length;
              var charCount = len + "/" + hitlen;

         if(len==hitlen)
                { $("#yazım").css({"color": "#2baa2b",});}
                else
                {$("#yazım").css({"color": "#ff5d64",});
            }

         if(öncekiyazı == InputText3){}else{
             öncekiyazı = InputText3;
         processCurrentWord();
         $('#kemlimelistesi').css({"display": "block"});
         }
 if (!document.getElementById("cavapyardımcısı")){
 $('#answer form').append('<div id="cavapyardımcısı"></div>');
 $('#cavapyardımcısı').append('<a id="yazım" style="position:relative;left:10;top:5px;width:30px;height:30px;font-weight:bold;color:black;font-size:20px;text-decoration:none; target=" blank"="">' + InputText + charCount + '</a>')
 }else{
 $("#yazım").text(InputText + charCount);
 }
 }
 }else{
$('#cavapyardımcısı').remove();
     (async () => { let pins = await GM_getValue('pinworldlist'); if(pins == null){
$('#kemlimelistesi').css({"display": "none"});}else{ $(".pin.worldlist img").attr("src","https://i.imgur.com/AR0yw1X.png"); }})();
 }

             })()
            }, 100);
 }

 function copynickname() {
  let nick = document.querySelector('.content.profile .contentPopup .nick');
  navigator.clipboard.writeText(nick.innerHTML)
 $(".close").click();
 }
 function menu() {
 $('#popUp').css({"display": "block"});
 $('#popUp').append('<div id="modmenupopUp"></div>');
 $('#modmenupopUp').append('<div class="content" style="position: absolute;"><button class="close"></button><div class="title"><h3>Mod Menu</h3></div><div class="contentPopup info"></div></div>');
     $('#modmenupopUp .content').append('<a onclick="parent.open(\'https://github.com/anonimbiri/gartic.io-hack\');" style="cursor: pointer;position:relative;top:70px;width:290px;background-color: rgba(64, 120, 192);" class="loginGoogle"><img src="https://i.imgur.com/HVXUQfZ.png" style="position:relative;left:15px;width:25px;height:25px;"><span>'+ langlist.Github_source_code +'</span></a>');
         setTimeout(function() {
         if(!document.querySelector('#modmenupopUp .content div #afk'))
                 {
 $('#modmenupopUp .content').append('<a style="font-weight:bold;color:red;font-size:20px;text-decoration:none; target=" blank"="">menu failed to load please refresh the page and wait a moment</a>');
                 }
 }, 1000);
}
function closemenu() {
 $('#popUp').css({"display": "none"});
 $('#modmenupopUp').remove(); }

var backgroundimage = false;
 function arakaplanyap() {
     if(backgroundimage === false){
         backgroundimage = true;
 $("#uplatimage img").attr({"src" : "https://i.imgur.com/StaXwxO.png"});
 $("#uplatimage .tooltip").text("Remove Background");
  navigator.clipboard.readText().then(clipText =>

 $('#drawing canvas:eq(0)').css({"background-image": "url('" + clipText + "')", "background-repeat":"no-repeat", "background-position":"center", "background-size":"contain"}));
     }else{
         backgroundimage = false;
 $("#uplatimage img").attr({"src" : "https://i.imgur.com/CU5Gjga.png"});
 $("#uplatimage .tooltip").text("Upload İmage From Clipboard");
 $('#drawing canvas:eq(0)').css({"background-image": "", });
     }
}
 function changeroom() {
 $("#exit").click();
 $(".btYellowBig.smallButton.ic-yes").click();
GM_setValue("yenile", "true");
     setTimeout(function() {
 location.reload().then(() => {
  $(".btYellowBig.ic-playHome").click();
  }, error => {
    console.error('onRejected function called: ' + error.message);
  });

     }, 1000);
}

 function sendpopup(title,text,img) {
     if (!document.getElementById("uyarıpopUp")){
 $('#popUp').css({"display": "block"});
 $('#popUp').append('<div id="uyarıpopUp"></div>');
 $('#uyarıpopUp').append(`<div class="content" style="position: absolute;"><div class="title"><h3>${title}</h3></div><div class="contentPopup confirm"><div class="lottie"><img src="${img}" style="width:150px;height:150px;"></div><span class="legend">${text}</span></div><div class="buttons"><button class="btYellowBig ic-yes ic-okeys"><strong>${langlist.ok}</strong></button></div></div>`);
$('.content').on('click', '.ic-okeys', function() {  $('#popUp').css({"display": "none"}); $('#uyarıpopUp').remove();  });
 $('#modmenupopUp').remove();}
 }

 function loadwoldlist() { // tr: burası github sayfamdan kelime listesini yüklediğimiz yer eski sürümlerde buradan yüklemiyorduk // en: this is where we loaded the wordlist from my github page we didn't load it from here in older versions
     let listtext = "https://raw.githubusercontent.com/Mortyyy137/gartic.io-hack/main/world_list/en.json";
     if (lang==999){
     if(customurl){
          $.getJSON(customurl, function(data) {
         Wordslist = data;
         console.log( `%cCustom wordlist loaded:%c ${customurl}`, "background: green;", "background: none;");
                }).fail(function(jqXHR, textStatus, errorThrown) { customurl=null; sendpopup("Error",`Encountered a problem loading the word list\nerror description: ${textStatus}`, "https://i.imgur.com/JQGPXAb.gif");});}
     }else{
     if (lang==8){
             listtext = "https://raw.githubusercontent.com/Mortyyy137/gartic.io-hack/main/world_list/tr.json";
         }else if (lang==23){
             listtext = "https://raw.githubusercontent.com/Mortyyy137/gartic.io-hack/main/world_list/az.json";
         }else if (lang==19){
             listtext = "https://raw.githubusercontent.com/Mortyyy137/gartic.io-hack/main/world_list/ar.json";
         }else{
             listtext = "https://raw.githubusercontent.com/Mortyyy137/gartic.io-hack/main/world_list/en.json";
         }
       $.getJSON(listtext, function(data) {
    console.log( `%cLoad worldlist url:%c ${listtext}`, "background: green;", "background: none;");
    Wordslist = data.world_list;
         langlist = data.lang;
         });
         }
 }
 function sendmesaj(word) { // tr: mesajı gönderdiğimiz yani cevapları gönderdiğimiz yer // en: where we send the message, that is, where we send the replies
     if(word){
let input = document.querySelector('input[name="answer"]');
     if(input){
let isinput = document.querySelector('input[name="answer"]').disabled;
     if(isinput==false){
let lastValue = input.value;
input.value = word;
let event = new Event('input', { bubbles: true });
var event2 = new Event("submit", { bubbles: true });
event.simulated = true;
event2.simulated = true;
let tracker = input._valueTracker;
if (tracker) {
  tracker.setValue(lastValue);
}
input.dispatchEvent(event);
input.form.dispatchEvent(event2);
     }
     }
 }
 }
let regex = /^$/
let possibleWords = []
function processCurrentWord() { // tr: kelimeleri filtrelediğim kısım // en: the part where I filter the words
woldid = 0;
$('#kemlimelistesi #hit').remove();
   if (document.querySelector('.word')){
    var InputText1 = $('.word:eq(0)').html()
    var InputText2 = $('.word:eq(1)').html() || ""
    var InputText3 = $('.word:eq(2)').html() || ""
    var InputText4 = $('.word:eq(3)').html() || ""
    if(!InputText2 == ""){
    InputText1 += " ";
    }else if(!InputText3 == ""){
     InputText2 += " ";
    }else if(!InputText4 == ""){
     InputText3 += " ";
    }
    var text = InputText1 + InputText2 + InputText3 + InputText4;
    var currWord = text.replace(/<span><\/span>/gi, "_").replace(/<span>/gi, "").replace(/<\/span>/gi, "").replace(/<div class="word">/gi, "").replace(/<\/div>/gi, "");//.replace("undefined","");
const container = document.querySelector("#kemlimelistesi")

    let sameLength = Wordslist.filter(w => {
        return w.length === currWord.length;
    })
    let isAlphanumOrSpace = w => w.match(/^[a-z0-9 ]+$/i);
    let found = sameLength.filter(w => {
        let letters = w.split('');

        let b = true;
        for (let i = 0; i < currWord.length; i++) {
            if (isAlphanumOrSpace(currWord[i]) && currWord[i] !== w[i]) b = false;
        }
        return b;
    });
sendfound = found;
 for (let i = 0; i < found.length; i++) {
    const button = document.createElement("button")
    button.innerHTML = found[i];
   // button.setAttribute("onclick","navigator.clipboard.writeText('" + found[i] + "'); this.style.backgroundColor = 'red'; this.style.color = 'white';"); // tr: bu kod yazıyı kopyalamayı sağlar eğer yazı otomatik olarak yazılıp gönderilmiyorsa bu kodu aktif hale getirin // en: this code allows to copy the text, if the text is not written and sent automatically, activate this code
    button.setAttribute("id", "hit");
    button.setAttribute("style", "margin-top:10px;font-size:100%;text-align:center;background-color:Grey;border-radius:8px;  min-width: 15ch;min-height: 20px;box-shadow:03px 5px rgba(0, 0, 0, 0.18);display:flex;");
    container.appendChild(button)
  }
    return found;
       }else{
sendfound = Wordslist;
           for (let i = 0; i < Wordslist.length; i++) {
               const container = document.querySelector("#kemlimelistesi")
    const button = document.createElement("button")
    button.innerHTML = Wordslist[i];
   // button.setAttribute("onclick","navigator.clipboard.writeText('" + found[i] + "'); this.style.backgroundColor = 'red'; this.style.color = 'white';"); // tr: bu kod yazıyı kopyalamayı sağlar eğer yazı otomatik olarak yazılıp gönderilmiyorsa bu kodu aktif hale getirin // en: this code allows to copy the text, if the text is not written and sent automatically, activate this code
    button.setAttribute("id", "hit");
    button.setAttribute("style", "margin-top:10px;font-size:100%;text-align:center;background-color:Grey;border-radius:8px;  min-width: 15ch;min-height: 20px;box-shadow:03px 5px rgba(0, 0, 0, 0.18);display:flex;");
    container.appendChild(button)
  }
       }
}

let dots = [];
function drawImage(x,y) { // tr: still drawing under construction // en: still drawing under construction
let elem = document.querySelector('#events');
var bcr=elem.getBoundingClientRect();
            x+=bcr.left;
            y+=bcr.top;
            elem.dispatchEvent(new MouseEvent("mousedown",{bubbles:true,clientX:x,clientY:y,button:0}));
            elem.dispatchEvent(new MouseEvent("mouseup",{bubbles:true,clientX:x,clientY:y,button:0}));
            elem.dispatchEvent(new MouseEvent("click",{bubbles:true,clientX:x,clientY:y,button:0}));
}

function showfullscreen() {
//Full screen
document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}
      if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
        });
    });
};
//end
}
