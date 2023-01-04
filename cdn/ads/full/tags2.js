// Create new link Element
var link00 = document.createElement('link');
link00.rel = 'dns-prefetch';     
link00.href = 'https://cdn.jsdelivr.net';
document.getElementsByTagName('head')[0].appendChild(link00);

// Create new link Element
var link0 = document.createElement('link');
link0.rel = 'dns-prefetch';     
link0.href = 'https://securepubads.g.doubleclick.net';
document.getElementsByTagName('head')[0].appendChild(link0);

// Create new link Element
var link1 = document.createElement('link');
link1.rel = 'stylesheet';     
link1.type = 'text/css';     
link1.href = 'https://cdn.jsdelivr.net/gh/mohamedwahedeg/lord-media/cdn/style-lord-media.css';
document.getElementsByTagName('head')[0].appendChild(link1);

var scriptGPT=document.createElement('script');
scriptGPT.src='https://securepubads.g.doubleclick.net/tag/js/gpt.js';
scriptGPT.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(scriptGPT);

window.googletag=window.googletag||{cmd:[]};
var interstitialSlot,anchorSlot,staticSlot;
googletag.cmd.push(function(){
interstitialSlot=googletag.defineOutOfPageSlot('/'+n+'/'+w,googletag.enums.OutOfPageFormat.INTERSTITIAL);
if(interstitialSlot){interstitialSlot.addService(googletag.pubads());googletag.pubads().addEventListener('slotOnload',function(event){
if(interstitialSlot===event.slot){
}
});
console.log(interstitialSlot);
}
  
    
staticSlot=googletag.defineSlot('/'+n+'/'+w,[[336, 280], [300, 250], 'fluid'],'static-ad-1').addService(googletag.pubads());
// start banners //
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia1').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia2').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia3').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia4').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia5').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia6').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w, [[336, 280], [300, 250], 'fluid',[250, 250]], 'lordmedia7').addService(googletag.pubads());
//sticky//
googletag.defineSlot('/'+ n +'/'+ w,[[728,90],[468, 60],[300, 100],[320, 100]],'gpt-passback-lord-media-anchor-sticky-top').addService(googletag.pubads());
googletag.defineSlot('/'+ n +'/'+ w,[[728,90],[468, 60],[300, 100],[320, 100]],'gpt-passback-lord-media-anchor-sticky-buttom').addService(googletag.pubads());

// end sticky //
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});
  
var elemDiv3=document.createElement("div");
elemDiv3.id="static-ad-1";
elemDiv3.style="width: 100px; height: 100px;";
document.getElementsByTagName("body")[0].appendChild(elemDiv3);
  
// sticky top
if(ft == 1){
  var elemDiv=document.createElement("div");
elemDiv.id="lord-media-anchor-sticky-top";
document.getElementsByTagName("body")[0].appendChild(elemDiv);
}

// stucky bottom
if(fb == 1){
var elemDiv2=document.createElement("div");
elemDiv2.id="lord-media-anchor-sticky-buttom";
document.getElementsByTagName("body")[0].appendChild(elemDiv2);
}

if(ft == 1){
document.getElementById('lord-media-anchor-sticky-top').innerHTML="<div class='sticky-ads-close' style='display: none;' onclick='document.getElementById(&quot;lord-media-anchor-sticky-top&quot;).style.display=&quot;none&quot;'><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'/></svg></div> <div id='gpt-passback-lord-media-anchor-sticky-top'></div>";
}

if(fb == 1){
document.getElementById('lord-media-anchor-sticky-buttom').innerHTML="<div class='sticky-ads-close' onclick='document.getElementById(&quot;lord-media-anchor-sticky-buttom&quot;).style.display=&quot;none&quot;'><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'/></svg></div> <div id='gpt-passback-lord-media-anchor-sticky-buttom'></div>";
}  


// show sticy //
var onscrollv=true;
// sticky top //
if(ft == 1){
document.getElementsByClassName("sticky-ads-close")[0].style.display="block";
googletag.display('gpt-passback-lord-media-anchor-sticky-top');
}else{
// don't show sticky top //
}
// sticky bottom //
if(fb == 1){
document.getElementsByClassName("sticky-ads-close")[1].style.display="block";
googletag.display('gpt-passback-lord-media-anchor-sticky-buttom');
}else{
// don't show sticky bottom //
}

// show interstitial //
googletag.cmd.push(function(){
googletag.display(staticSlot);
});
//end interstitial //

// recaptcha //
var recapatcha=document.createElement('script');
recapatcha.src='https://www.google.com/recaptcha/api.js?render=6Ldrpu4cAAAAAKTkA6b0EsiXpPVBO_TpjfryQ07K';
recapatcha.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(recapatcha);

grecaptcha.ready(function() {
grecaptcha.execute('6Ldrpu4cAAAAAKTkA6b0EsiXpPVBO_TpjfryQ07K', {action: 'homepage'}).then(function(token) {
var responseString = "https://www.google.com/recaptcha/api/siteverify?secret=6Ldrpu4cAAAAAPZKr0DPTh6qxGPuTYnXFCLY-fOr&response="+token;
            $.ajax({
            url:responseString,
            success: function (ReCaptchaRes) {
              console.log("ReCaptchaRes: " + ReCaptchaRes);
             }
            });
          });
     });
// end recaptcha //

// check ad refresh //
if(r == 1){
// ad refresh //
setInterval(myTimer, 30000);
function myTimer() {
googletag.cmd.push(function() { googletag.pubads().refresh(); });
}
}else{
  // no ad refresh //
} // end else //
