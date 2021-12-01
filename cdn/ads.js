let url_string = window.location;
let url = new URL(url_string);
let w = url.searchParams.get("w");
console.log(w);

var scriptGPT = document.createElement('script');scriptGPT.setAttribute("async", "async");
scriptGPT.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
scriptGPT.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scriptGPT);

document.writeln('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>');
document.writeln('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/mohamedwahedeg/lord-media/cdn/lord-media-click-protection.js"></script>');

// start lord media interstitial ads //
      window.googletag = window.googletag || {cmd: []};
      var interstitialSlot, staticSlot;
      googletag.cmd.push(function() {
interstitialSlot = googletag.defineOutOfPageSlot( '/22649732511/'+ w +', googletag.enums.OutOfPageFormat.INTERSTITIAL);
      if (interstitialSlot) {
          interstitialSlot.addService(googletag.pubads());
          googletag.pubads().addEventListener('slotOnload', function(event) {
            if (interstitialSlot === event.slot) {
            //
            }
          });
         console.log(interstitialSlot);
        }
        staticSlot = googletag.defineSlot('/22649732511/'+ w +', [[300, 250], [336, 280]], 'static-ad-1').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });

// end lord media interstitial ads //

// start lord media anchor sticky buttom ad //

var onscrollv = false;
window.onload = function() {

var elemDiv3 = document.createElement("div");
elemDiv3.id= "static-ad-1";
elemDiv3.style= "width: 100px; height: 100px;";
document.getElementsByTagName("body")[0].appendChild(elemDiv3);

var elemDiv = document.createElement("div");
elemDiv.id= "lord-media-anchor-sticky-top";
document.getElementsByTagName("body")[0].appendChild(elemDiv);

var elemDiv2 = document.createElement("div");
elemDiv2.id= "lord-media-anchor-sticky-buttom";
document.getElementsByTagName("body")[0].appendChild(elemDiv2);

document.getElementById('lord-media-anchor-sticky-top').innerHTML = "<div class='sticky-ads-close' style='display: none;' onclick='document.getElementById(&quot;lord-media-anchor-sticky-top&quot;).style.display=&quot;none&quot;'><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'/></svg></div> <div id='gpt-passback-lord-media-anchor-sticky-top'></div>";

document.getElementById('lord-media-anchor-sticky-buttom').innerHTML = "<div class='sticky-ads-close' style='display: none;' onclick='document.getElementById(&quot;lord-media-anchor-sticky-buttom&quot;).style.display=&quot;none&quot;'><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z'/></svg></div> <div id='gpt-passback-lord-media-anchor-sticky-buttom'></div>";

googletag.cmd.push(function() {
          googletag.display(staticSlot);
});

//

window.onscroll = function(event) {

if(onscrollv == false){
onscrollv = true;
document.getElementsByClassName("sticky-ads-close")[0].style.display = "block";
document.getElementsByClassName("sticky-ads-close")[1].style.display = "block";

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
console.log("in mobile");

window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
    googletag.defineSlot('/22649732511/'+ w +', [468, 60], 'gpt-passback-lord-media-anchor-sticky-top').addService(googletag.pubads());
    googletag.enableServices();
    googletag.display('gpt-passback-lord-media-anchor-sticky-top');
    });

window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
    googletag.defineSlot('/22649732511/'+ w +', [468, 60], 'gpt-passback-lord-media-anchor-sticky-buttom').addService(googletag.pubads());
    googletag.enableServices();
    googletag.display('gpt-passback-lord-media-anchor-sticky-buttom');
    });
    
}else{
console.log("in web");

window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
    googletag.defineSlot('/22649732511/'+ w +', [[728, 90], [468, 60]], 'gpt-passback-lord-media-anchor-sticky-top').addService(googletag.pubads());
    googletag.enableServices();
    googletag.display('gpt-passback-lord-media-anchor-sticky-top');
    });

window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
    googletag.defineSlot('/22649732511/'+ w +', [[728, 90], [468, 60]], 'gpt-passback-lord-media-anchor-sticky-buttom').addService(googletag.pubads());
    googletag.enableServices();
    googletag.display('gpt-passback-lord-media-anchor-sticky-buttom');
    });
} //end if mobile

}else{
// do not do any thing //
}
}; //end scrolling//


//      
};

// End lord media anchor sticky buttom ad //
