function request(url, success, error) {
    for (let i = 0; i < url.length; i++) {
        setTimeout(function () {
            let get = new XMLHttpRequest();
            get.open("GET", encodeURI(url[i]), true),
                get.send();
            get.onreadystatechange = function () {
                if (get.readyState === 4 && get.status === 200) {
                    success(JSON.parse(get.responseText));
                } else if (get.status >= 400) {
                    reject(Error(get.statusText));
                }
            }
        }, 2000 * i)
    }

}

request(
    ["https://api.twitch.tv/kraken/videos/top?limit=5&sort=time&language=en",
        "https://api.twitch.tv/kraken/games/top?limit=5",
        "https://api.twitch.tv/kraken/streams/featured?limit=5"],
    function success(data) {
        if (data.hasOwnProperty("videos") === true) {
            let html = '';
            let videos = [];
            videos.push(data);
            for (i = 0; i < videos.length; i++) {
                console.log(videos[0].videos[0].channel.name);
                html += '<div id="' + videos[0].videos[0].channel.name + '" class="feature-box">';
                html += '<ul class="box-item"><li><img src="' + videos[0].videos[0].preview + '"><h1>' + videos[0].videos[0].title + '</h1></li>';
                html += '<ul class="box-item"><li>' + videos[0].videos[0].channel.name + '</li></ul>';
                document.getElementById('videos').innerHTML += html;
            }
        } else if (data.hasOwnProperty("top") === true) {
            let html = '';
            let games = [];
            games.push(data);
            for (i = 0; i < games.length; i++) {
                console.log(games[0].top[0].game.name);
                html += '<div id="' + games[0].top[0].game.name + '" class="feature-box">';
                html += '<ul class="box-item"><li><img src="' + games[0].top[0].game.logo.large + '"><h1>' + games[0].top[0].game.name + '</h1></li>';
                html += '<ul class="box-item"><li><img src="' + games[0].top[0].game.box.large + '"></li></ul>';
                document.getElementById('games').innerHTML += html;
            }
        } else if (data.hasOwnProperty("featured") === true) {
            let html = '';
            let stream = [];
            stream.push(data);
            for (i = 0; i < stream.length; i++) {
                console.log(stream[0].featured[0].stream.channel.name);
                let views = (stream[0].featured[0].stream.channel.views).toLocaleString("en");
                let followers = (stream[0].featured[0].stream.channel.followers).toLocaleString("en");
                html += '<div id="' + stream[0].featured[0].stream.channel.name + '" class="feature-box"><a href="';
                html += stream[0].featured[0].stream.channel.url + '" target="_blank"><ul class="box-item"><li><img src="' + stream[0].featured[0].stream.channel.logo + '"></li></ul>';
                html += '<ul class="box-item"><li><h1>' + stream[0].featured[0].stream.channel.display_name + '</h1></li>';
                html += '<li><h2>' + stream[0].featured[0].stream.game + ' - ' + stream[0].featured[0].stream.stream_type + '!</h2></li>';
                html += '<li><h3>' + stream[0].featured[0].stream.channel.status + '</h3></li>';
                html += '<li><h3>Views: ' + views + '</h3></li>';
                html += '<li><h3>Followers: ' + followers + '</h3></li></ul></div></div>';
                html += '<img class="feature-box" src="' + stream[0].featured[0].stream.preview.large + '"></a></div><canvas id="canvas-webgl"></canvas>';
                document.getElementById('twitchDash').innerHTML += html;
            }
        }
    },
    function error(error) {
        let html = '';
        html += '<h2 class="feature-box">' + error + '</h2>';
        document.getElementById('twitchDash').innerHTML += html;
        return;
    }

);

