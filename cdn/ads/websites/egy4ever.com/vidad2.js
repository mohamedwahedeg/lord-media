var div = document.getElementById("lord-media-video-ads");
div.innerHTML = '<div id="videoContainer" class="videoContainer"> <div id="closevideox" style="display:none;bottom: 150px;right: 10px;position: absolute;" onclick='document.getElementById(&quot;videoContainer&quot;).style.display=&quot;none&quot;'> X </div> <video style="width:100%; height:100%;" id="mediaElement" controls playsinline poster="https://glomex.github.io/vast-ima-player/big-buck-bunny.png" preload="none" muted="muted"> <source type="video/mp4" src="https://www.googleapis.com/drive/v3/files/1_XbNp0VHGpfBw4BEYSbUr_Cakd2TH2_7?alt=media&key=AIzaSyAdbnd1P5YrJS5PGYeINl5aDUi-_ee0Idc"></video> <div id="adContainer" style="position:absolute; left:0; top:0;"></div> </div>';


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
