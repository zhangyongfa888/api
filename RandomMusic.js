(function () {
    var names=['美人画卷(DJ版)','千鸟与目黑 - 叶里','刚烈女子 - 锦零','大风吹','星辰大海','后来'];

    var ids = [1838517951,1339031165,1343283719,1826179038,1811921555,254574];
    var mid = ids[Math.floor(Math.random() * ids.length)];

    var element = document.getElementById("music");

    element.innerHTML = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% src="//music.163.com/outchain/player?type=2&id='+mid+'&auto=1&height=86"></iframe>';


})();
