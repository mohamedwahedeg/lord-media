var scriptGPT=document.createElement('script');
scriptGPT.setAttribute("async","async");
scriptGPT.src='https://securepubads.g.doubleclick.net/tag/js/gpt.js';
scriptGPT.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(scriptGPT);

var ima3=document.createElement('script');
ima3.src='https://imasdk.googleapis.com/js/sdkloader/ima3.js';
ima3.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(ima3);

var imported1 = document.createElement('script');
imported1.src = 'https://unpkg.com/@glomex/vast-ima-player@1/dist/vast-ima-player.umd.js';
document.head.appendChild(imported1);

      var adsRenderingSettings = new google.ima.AdsRenderingSettings();
      var playAdsRequest = new google.ima.AdsRequest();
      playAdsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/22649732511/video&description_url=https%3A%2F%2Flord-media.com&tfcd=0&npa=0&sz=400x300%7C640x480&min_ad_duration=5000&max_ad_duration=60000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
      var imaPlayer = new vastImaPlayer.Player(
        google.ima,
        document.getElementById('mediaElement'),
        document.getElementById('adContainer'),
        adsRenderingSettings
      );
        window.onload = function() {
        imaPlayer.playAds(playAdsRequest);
		}
jQuery(document).ready(function() {
var $window = $(window);
var $videoWrap = $('.videoContainer');
var $video = $('.videoContainer');
var videoHeight = $video.outerHeight();
$window.on('scroll',  function() {
var windowScrollTop = $window.scrollTop();
var videoBottom = videoHeight + $videoWrap.offset().top;
if (windowScrollTop > videoBottom) {
    $videoWrap.height(videoHeight);
    $videoWrap.addClass('stuck');
  setTimeout("$('#closevideox').show();", 10000);
  } else {
    //$videoWrap.height('auto');
    //$videoWrap.removeClass('stuck');
  }
});
  });
