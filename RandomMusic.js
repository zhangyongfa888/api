(function () {

    var ids = [1339031165,29717271,30814948,863481092,485612576,31517407,25706282,416389005,490602642,26494530,1434356520];

    var mid = ids[Math.floor(Math.random() * ids.length)];

    var element = document.getElementById("music");

    element.innerHTML = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% src="//music.163.com/outchain/player?type=2&id='+mid+'&auto=1&height=86"></iframe>';


})();
