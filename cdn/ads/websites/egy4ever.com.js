var scripta = document.createElement('script');
scripta.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
scripta.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scripta);


        window.googletag = window.googletag || {cmd: []};
      var interstitialSlot, staticSlot;
      googletag.cmd.push(function() {
        interstitialSlot = googletag.defineOutOfPageSlot('/22649732511/egy4ever.com',googletag.enums.OutOfPageFormat.INTERSTITIAL);
        if (interstitialSlot) {
          interstitialSlot.addService(googletag.pubads());
          googletag.pubads().addEventListener('slotOnload', function(event) {
            if (interstitialSlot === event.slot) {
            //
            }
          });
        }
        staticSlot = googletag.defineSlot('/22649732511/egy4ever.com', [100, 100], 'static-ad-1').addService(googletag.pubads());
        //googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
var interstitial0=document.createElement("div");
interstitial0.id="static-ad-1";
document.getElementsByTagName("body")[0].appendChild(interstitial0);

googletag.cmd.push(function() {
googletag.display(staticSlot);
});
