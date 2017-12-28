function loadJSON(path, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    console.log(path);
    //xhr.setRequestHeader('Client-ID', 'iy25o25wjejp9dg0g446t3dnnsu8aw');
    xhr.send();
}

const data = ['./x.json', './y.json', './z.json', 'null.json'];
for (var i = 0; i < data.length; i++) {
    loadJSON(
        data[i],  
        function (data) {
                if (data.stream && data.stream.game) {
                    let html = '';
                    let views = (data.stream.channel.views).toLocaleString("en");
                    let followers = (data.stream.channel.followers).toLocaleString("en");
                    html += '<div id="' + data.stream.channel.display_name + '" class="feature-box"><a href="';
                    html += data.stream.channel.url + '" target="_blank"><img src="' + data.stream.channel.logo + '">';
                    html += '<h1>' + data.stream.channel.display_name + '</h1>';
                    html += '<h2>' + data.stream.game + ' - ' + data.stream.stream_type + '!</h2>';
                    html += '<h3>' + data.stream.channel.status + '</h3>';
                    html += '<h3>Views: ' + views + '</h3>';
                    html += '<h3>Followers: ' + followers + '</h3>';
                    html += '<img src="' + data.stream.preview.large + '"></a></div></div><canvas id="canvas-webgl"></canvas>';
                    document.getElementById('twitchDash').innerHTML += html;
                }
            },
            function (xhr) {
                //console.error(xhr);
                let html = '';
                //html += '<div class="feature-box offline">' + data.stream.channel.display_name + ' is Offline</div>';
                document.getElementById('twitchDash').innerHTML += html;

            }

        );
    }

