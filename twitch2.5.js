function loadJSON(
    path, success, error
) {
    let promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolve(xhr.response);
                success(JSON.parse(xhr.responseText));
            } else {
                reject(Error(xhr.statusText));
                error(xhr);
            }
        }
        xhr.open("GET", path, true);
        xhr.send();
    });
} 

    loadJSON('./x.json',
        function (data) {
            console.log(data);
            if (data.stream && data.stream.game) {
                let html = '';
                let views = (data.stream.channel.views).toLocaleString("en");
                let followers = (data.stream.channel.followers).toLocaleString("en");
                html += '<div id="' + data.stream.channel.display_name + '" class="feature-box"><a href="';
                html += data.stream.channel.url + '" target="_blank"><ul class="box-item"><li><img src="' + data.stream.channel.logo + '"></li></ul>';
                html += '<ul class="box-item"><li><h1>' + data.stream.channel.display_name + '</h1></li>';
                html += '<li><h2>' + data.stream.game + ' - ' + data.stream.stream_type + '!</h2></li>';
                html += '<li><h3>' + data.stream.channel.status + '</h3></li>';
                html += '<li><h3>Views: ' + views + '</h3></li>';
                html += '<li><h3>Followers: ' + followers + '</h3></li></ul></div></div>';
                html += '<img class="feature-box" src="' + data.stream.preview.large + '"></a></div><canvas id="canvas-webgl"></canvas>';
                document.getElementById('twitchDash').innerHTML += html;
            }
            else {
                html += '<div class="feature-box offline">' + channels[i] + ' is Offline</div>';
                document.getElementById('twitchDash').innerHTML += html;
            }

        },
        function (xhr) {
            console.error(xhr);
            let html = '';
            html += '<div class="feature-box offline">' + channels[i] + ' is Offline</div>';
            document.getElementById('twitchDash').innerHTML += html;

        },
    );
