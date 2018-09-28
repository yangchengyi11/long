var chart = (function () {
    var $btn = document.querySelector('.chart_send');
    var $txt = document.querySelector('.chart_content');
    var $rigth = document.querySelector('.main__right');
    var chartBox = document.querySelector('.chart-box__main');
    return {
        init: function () {
            this.event()
        },
        event: function () {
            var _this = this;
            $btn.onclick = function () {
                // 获取文本框的值
                var val = $txt.value.trim();
                if (val) {
                    // 如果文本框有内容
                    _this.chartdom(val);
                    // 聊天内容加入以后在计算高度
                    
                    // 清空文本
                    $.ajax({
                        type: "POST",
                        url: "http://www.tuling123.com/openapi/api?",
                        data: `key=944be6f685594a02827004b759d70a85&info=${val}&userid=123456`,
                        success: fn,
                    })
                    // var params = {
                    //     method: 'post',
                    //     data: {
                    //         'key': 'c326e6779e6648a7afc16246fe3852c1',
                    //         'info': val,
                    //         'userid': '123456',
                    //     },
                    //     success: fn,
                    // }
                    // console.log(params.data.info)
                    // sendAjax('http://www.tuling123.com/openapi/api?key=c326e6779e6648a7afc16246fe3852c1', params)
                    function fn(data) {
                        data = data.text
                        _this.chartbom(data);
                        chartBox.scrollTop = chartBox.scrollHeight - chartBox.clientHeight;
                    }
                    $txt.value = '';
                    

                }
            }
            $txt.onkeydown = function (ev) {
                ev = ev || window.event;
                var keyCode = ev.keyCode || ev.which;
                if (ev.ctrlKey) {
                    if (keyCode == 13) {
                        $btn.click();
                    }
                }
            }
        },
        chartdom(val, imgAvter) {
            imgAvter = imgAvter || 'img/xiaolan.jpg'
            var $li = document.createElement('li');
            $li.className = 'main__right';
            var span = document.createElement('span');
            span.className = 'main_bg';
            var $text = document.createTextNode(val);
            span.appendChild($text);
            $li.appendChild(span);
            span = document.createElement('span');
            span.className = 'main_avater';
            var $img = document.createElement('img');
            $img.src = imgAvter;
            span.appendChild($img);
            $li.appendChild(span);
            chartBox.appendChild($li);
        },
        chartbom(val, imgAvter) {
            imgAvter = imgAvter || 'img/xiaoming.jpg'
            var $li = document.createElement('li');
            $li.className = 'main__left';
            var span = document.createElement('span');
            span.className = 'main_avater';
            var $img = document.createElement('img');
            $img.src = imgAvter;
            span.appendChild($img);
            $li.appendChild(span);
            span = document.createElement('span');
            span.className = 'main_bg';
            var $text = document.createTextNode(val);
            span.appendChild($text);
            $li.appendChild(span);
            chartBox.appendChild($li);
        }
    }
}())