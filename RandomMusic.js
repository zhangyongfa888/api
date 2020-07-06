(function () {

    var ids = [1459980094, 29717271, 30814948, 863481092, 485612576, 31517407, 424995317, 38592976, 427419509, 1328382004, 1305365717, 25706282, 416389005, 490602642, 26494530, 1451141290, 1434356520, 1356367833, 1395338980, 1390519535, 1379517878, 1449871979, 1441777485];

    var mid = ids[Math.floor(Math.random() * ids.length)];

    var element = document.getElementById("music");

    element.innerHTML = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% src="//music.163.com/outchain/player?type=2&id='+mid+'&auto=1&height=86"></iframe>';


})();