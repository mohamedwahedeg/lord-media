var scripta = document.createElement('script');
scripta.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
scripta.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scripta);

    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
        window.googletag.pubads().enableSingleRequest();
    });

var scripta2 = document.createElement('script');
scripta2.src = 'https://protagcdn.com/s/world-trips.net/site.js';
scripta2.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(scripta2);

    window.protag = window.protag || { cmd: [] };
    window.protag.config = { s:'world-trips.net', childADM: '22561025441', l: 'FbM3ys2m' };
    window.protag.cmd.push(function () {
        window.protag.pageInit();
    });

    window.googletag = window.googletag || { cmd: [] };
    window.protag = window.protag || { cmd: [] };
    window.protag.cmd.push(function () {
        window.protag.display("protag-sticky-bottom");
    });
