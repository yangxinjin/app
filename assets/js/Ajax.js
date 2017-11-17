/*
 * $param string url:请求的URL地址
 * @param string|object data:请求的数据
 * @param function cb:回调函数：处理返回的结果
 * @param string dataType:设置返回数据的类型(string|json)
 */
function get(url, data, cb, dataType) {
    // 传递的是字符串参数
    if (typeof data === 'string') {
        // url = url + '?' + data;
        url += '?' + data;
    } else if (typeof data === 'object') {
        // 将 一个数组或者一个对象转换为规则的字符串 - 循环
        // {username:'jeff',age:20,sex:'nan'}	
        // username=jeff&age=20&sex=nan
        var str = '';
        for (var i in data) {
            // console.log(i,data[i]);
            str += i + '=' + data[i] + '&';
        }
        // slice(start,end):从start位置开始，到end位置结束（不包含end位置）
        // 将对象的data转换字符串str
        url += '?' + str.slice(0, str.length - 1);
    } else if (typeof data === 'function') {
        // data不传递参数，实际上给get函数传值的第二个参数是回调函数
        // 就认为用户现在不需要给服务器传递参数
        dataType = cb;
        cb = data;
    }

    var xhr = new XMLHttpRequest();

    // ready:准备 state：状态 change：改变
    xhr.onreadystatechange = function() {
        // 当请求状态为4和响应状态为200的时候，表示此次请求成功
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 浏览器接收响应的结果
            // if中获取返回的结果，在这里做判断
            if (dataType == 'json') {
                var obj = JSON.parse(xhr.responseText);
                cb(obj);
            } else {
                // 调用cb函数处理返回的结果
                cb(xhr.responseText);
            }
        }
    }

    // 3.2 发起请求前配置
    xhr.open('GET', url, true);

    // 3.3 发送
    xhr.send();
}


/*
 * $param string url:请求的URL地址
 * @param string|object data:请求的数据
 * @param function cb:回调函数：处理返回的结果
 * @param string dataType:设置返回数据的类型(string|json)
 */
function post(url, data, cb, dataType) {
    // 查询参数:格式：username=jeff&age=20
    var querystring = '';

    // 传递的是字符串参数
    if (typeof data === 'string') {
        querystring = data;
    } else if (typeof data === 'object') {
        for (var i in data) {
            // console.log(i,data[i]);
            querystring += i + '=' + data[i] + '&';
        }

        // 去除最后一个&
        querystring = querystring.slice(0, querystring.length - 1);
    } else if (typeof data === 'function') {
        // data不传递参数，实际上给get函数传值的第二个参数是回调函数
        // 就认为用户现在不需要给服务器传递参数
        dataType = cb;
        cb = data;
    }

    var xhr = new XMLHttpRequest();

    // ready:准备 state：状态 change：改变
    xhr.onreadystatechange = function() {
        // 当请求状态为4和响应状态为200的时候，表示此次请求成功
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 浏览器接收响应的结果
            // if中获取返回的结果，在这里做判断
            if (dataType == 'json') {
                var obj = JSON.parse(xhr.responseText);
                cb(obj);
            } else {
                // 调用cb函数处理返回的结果
                cb(xhr.responseText);
            }
        }
    }

    // 3.2 发起请求前配置
    xhr.open('POST', url, true);

    // 3.3 发送
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(querystring);
}