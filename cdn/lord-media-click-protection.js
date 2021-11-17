(function() {
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
document.writeln('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>');
document.writeln('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/mohamedwahedeg/lord-media/cdn/iframeTracker-jquery.js"></script>');

$( document ).ready(function() {

$('#gpt-passback,#gpt-passback-top,#gpt-passback-before-content,#gpt-passback-in-content1,#gpt-passback-in-content2,#gpt-passback-after-content,#gpt-passback-sidebar').iframeTracker(function(event) {
// check cookie //
  let cookie0 = getCookie("lordclicked");
  if (cookie0 != "") {
  var integer0 = parseInt(cookie0, 10);
  let lcv1 = integer0 + 1;
const d = new Date();
d.setTime(d.getTime() + (6*60*60*1000));
let expires0 = "expires="+ d.toUTCString();
document.cookie = "lordclicked" + "=" + lcv1 + ";" + expires0 + ";path=/";
  } else {
let lcv = 1;
const d = new Date();
d.setTime(d.getTime() + (6*60*60*1000));
let expires1 = "expires="+ d.toUTCString();
document.cookie = "lordclicked" + "=" + lcv + ";" + expires1 + ";path=/";
  }
  });
    
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

setTimeout(function() {
  let lordcookie0 = getCookie("lordclicked");
  var lordcookie1 = parseInt(lordcookie0, 10);
  if(lordcookie1 >= 5){
    lordhideadunit();
  }
}, 1000);

  function lordhideadunit() {
    $('#gpt-passback,#gpt-passback-top,#gpt-passback-before-content,#gpt-passback-in-content1,#gpt-passback-in-content2,#gpt-passback-after-content,#gpt-passback-sidebar').hide();
	}
    
});

   
})();
