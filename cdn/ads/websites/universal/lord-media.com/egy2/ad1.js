var scripta = document.createElement('script');
scripta.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
scripta.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scripta);

var mainranddiv = Math.floor(Math.random() * 1000);
//console.log(mainranddiv);
var adranddiv = Math.floor(Math.random() * 1000);
//console.log(adranddiv);

var divaya=document.createElement("div");
divaya.id=mainranddiv;
divaya.innerHTML = '<div style=""> <a href="https://lord-media.com/" target="_blank"> <img style="max-width: 25px;" src="https://i63.servimg.com/u/f63/19/35/39/93/27743110.jpg"> Ads By Lord Media</a> </div> <div id="'+ adranddiv + '"></div> ';
document.getElementsByTagName("body")[0].appendChild(divaya);  

window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
googletag.defineSlot('/22561025441/lord-media.com', [336, 280],  ''+adranddiv+'' ).addService(googletag.pubads());
googletag.enableServices();
googletag.display(''+adranddiv+'');
});
