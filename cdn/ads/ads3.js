document.writeln('<script data-ad-client="ca-pub-3547058605891393" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3547058605891393" crossorigin="anonymous"></script>');


var scripta = document.createElement('script');
scripta.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3547058605891393';
scripta.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scripta);


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
interstitialSlot = googletag.defineOutOfPageSlot( '/22649732511/'+ w, googletag.enums.OutOfPageFormat.INTERSTITIAL);
      if (interstitialSlot) {
          interstitialSlot.addService(googletag.pubads());
          googletag.pubads().addEventListener('slotOnload', function(event) {
            if (interstitialSlot === event.slot) {
            //
            }
          });
         console.log(interstitialSlot);
        }
        staticSlot = googletag.defineSlot('/22649732511/'+ w, [[300, 250], [336, 280]], 'static-ad-1').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });

// end lord media interstitial ads //

var elemDiv3 = document.createElement("div");
elemDiv3.id= "static-ad-1";
elemDiv3.style= "width: 100px; height: 100px;";
document.getElementsByTagName("body")[0].appendChild(elemDiv3);



document.writeln('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-66661717-19"></script>');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-66661717-19');

googletag.cmd.push(function() {
          googletag.display(staticSlot);
});
