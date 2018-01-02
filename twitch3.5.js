function connect(success, error) {
// async await api requests begins
        function delay(urlArray) {
            return new Promise(resolve => setTimeout(resolve, 1000));
        }
        async function delayedReq(url) {
            await delay();
            console.log('await delay ' + url);
            let get = new XMLHttpRequest();
            get.open("GET", encodeURI(url[i]), true),
                get.setRequestHeader('Client-ID', 'iy25o25wjejp9dg0g446t3dnnsu8aw'),
                get.send();
            get.onload = function () {
               // return new Promise(function (resolve, reject) { // handle responses
                if (get.readyState === XMLHttpRequest.DONE && get.status === 200) {
                    resolve(get.response);
                    success(JSON.parse(get.responseText));
                } else {
                    reject(Error(get.statusText));
                    error(error);
                }
                //});

        }
        async function requests(urlArray) {
            for (const url of urlArray) {
                await delayedReq(url);
                console.log('await delayedReq ' + url);
            }
        }
        requests(["https://api.twitch.tv/kraken/videos/top?limit=5&sort=time&language=en",
            "https://api.twitch.tv/kraken/games/top?limit=5",
            "https://api.twitch.tv/kraken/streams/featured?limit=5"]);

    }
}

connect(
    function success(data) {
        if (data.hasOwnProperty("videos") === true) {
            let videos = [];
            videos.push(data);
            console.log(videos);
        } else if (data.hasOwnProperty("top") === true) {
            let games = [];
            games.push(data);
            console.log(games);
        } else if (data.hasOwnProperty("featured") === true) {
            let stream = [];
            stream.push(data);
            console.log(stream);
        }
    },
    function error(error) {

    }

);

    /*             for (i = 0; i < videos.length; i++) {
                    console.log(videos[0].videos[0].channel.name);
                    html += '<div id="' + videos[0].videos[0].channel.name + '" class="feature-box">';
                    html += '<ul class="box-item"><li><img src="' + videos[0].videos[0].preview + '"><h1>' + videos[0].videos[0].title + '</h1></li>';
                    html += '<ul class="box-item"><li>' + videos[0].videos[0].channel.name + '</li></ul>';
                    document.getElementById('videos').innerHTML += html;
                }
     */

    /*             for (i = 0; i < games.length; i++) {
                    console.log(games[0].top[0].game.name);
                    html += '<div id="' + games[0].top[0].game.name + '" class="feature-box">';
                    html += '<ul class="box-item"><li><img src="' + games[0].top[0].game.logo.large + '"><h1>' + games[0].top[0].game.name + '</h1></li>';
                    html += '<ul class="box-item"><li><img src="' + games[0].top[0].game.box.large + '"></li></ul>';
                    document.getElementById('games').innerHTML += html;
                }
     */
    /*             for (i = 0; i < stream.length; i++) {
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

                let html = '';
                    html += '<h2 class="feature-box">Unable to reach TwitchTV</h2>';
                    document.getElementById('twitchDash').innerHTML += html;
                    return;
     */

