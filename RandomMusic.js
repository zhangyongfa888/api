

(function () {

    var item =
        [
            {id: 1842025914, name: '这世界那么多人'}, {id: 1339031165, name: '千鸟与目黑'},
            {id: 1343283719, name: '刚烈女子'}, {id: 1826179038, name: '大风吹'},
            {id: 1811921555, name: '星辰大海'}, {id: 1330348068, name: '起风了'},
            {id: 1479526505, name: '虞兮叹'}, {id: 202369, name: '画'},
            {id: 29567189, name: '理想'}, {id: 569213220, name: '像我这样的人'}
        ]

    var mid = item[Math.floor(Math.random() * item.length)].id;

    var element = document.getElementById("music");

    element.innerHTML = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% src="//music.163.com/outchain/player?type=2&id=' + mid + '&auto=1&height=86"></iframe>';


})();
