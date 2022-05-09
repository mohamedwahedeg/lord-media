var div = document.getElementById("'+ vs +'");
var pimg = "https://i.ibb.co/pWRvzwF/274086898-105002632117387-3534707542950503606-n.jpg";
var vidurl = "https://www.googleapis.com/drive/v3/files/1_XbNp0VHGpfBw4BEYSbUr_Cakd2TH2_7?alt=media&key=AIzaSyAdbnd1P5YrJS5PGYeINl5aDUi-_ee0Idc";
div.innerHTML = '<div id="videoContainer" class="videoContainer"> <div id="closevideox" style="display:none;bottom: 250px;right: 10px;position: absolute;" onclick="document.getElementById(&quot;videoContainer&quot;).style.display=&quot;none&quot;"> X </div> <video style="width:100%; height:100%;" id="mediaElement'+ vs +'" controls playsinline poster="'+ pimg +'" preload="none" muted="muted"> <source type="video/mp4" src="'+ vidurl +'"></video> <div id="adContainer'+ vs +'" style="position:absolute; left:0; top:0;"></div> </div>';
var adsRenderingSettings+vs = new google.ima.AdsRenderingSettings();
      var playAdsRequest+vs = new google.ima.AdsRequest();
      playAdsRequest+vs.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/22649732511/adserver1.lord-media.com&description_url=https%3A%2F%2Fegy4ever.com&tfcd=0&npa=0&sz=400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';      var imaPlayer+vs = new vastImaPlayer.Player(
        google.ima,
        document.getElementById('mediaElement'+ vs +''),
        document.getElementById('adContainer'+ vs +''),
        adsRenderingSettings+vs
      );
window.onload = function() {
imaPlayer+vs.playAds(playAdsRequest+vs);

}
