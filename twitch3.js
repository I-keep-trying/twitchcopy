//let channelArray = ["ESL_SC2", "OgamingSC2", "MOONMOON_OW", "themexicanrunner", "as2pik", "pixelpuppe"];
function connect() {
    let url = ["https://api.twitch.tv/kraken/videos/top?limit=5&sort=time&language=en",
        "https://api.twitch.tv/kraken/games/top?limit=5",
        "https://api.twitch.tv/kraken/streams/featured?limit=5"];
    for (let i = 0; i < url.length; i++) {
        let get = new XMLHttpRequest();
        get.open("GET", encodeURI(url[i]), true),
            get.setRequestHeader('Client-ID', 'iy25o25wjejp9dg0g446t3dnnsu8aw'),
            get.send();
        get.onreadystatechange = function () {
            let videos = [], games = [], stream = [];
            if (get.status >= 400) {
                let html = '';
                html += '<h2 class="feature-box">Unable to reach TwitchTV</h2>';
                document.getElementById('twitchDash').innerHTML += html;
                return;
            }
            if (get.readyState === 4) {
                let data = JSON.parse(get.responseText);
                let html = '';
                if (data.hasOwnProperty("_links") === true) {
                            games.push(data);
                            console.log(data);
                } else if (data.hasOwnProperty("stream") === true) {
                        games.push(data);
                        let views = (data.stream.channel.views).toLocaleString("en");
                        let followers = (data.stream.channel.followers).toLocaleString("en");
                        html += '<div id="' + data.channel.display_name + '" class="feature-box"><a href="';
                        html += data.stream.channel.url + '" target="_blank"><ul class="box-item"><li><img src="' + data.stream.channel.logo + '"></li></ul>';
                        html += '<ul class="box-item"><li><h1>' + data.stream.channel.display_name + '</h1></li>';
                        html += '<li><h2>' + data.stream.game + ' - ' + data.stream.stream_type + '!</h2></li>';
                        html += '<li><h3>' + data.stream.channel.status + '</h3></li>';
                        html += '<li><h3>Views: ' + views + '</h3></li>';
                        html += '<li><h3>Followers: ' + followers + '</h3></li></ul></div></div>';
                        html += '<img class="feature-box" src="' + data.stream.preview.large + '"></a></div><canvas id="canvas-webgl"></canvas>';
                        document.getElementById('twitchDash').innerHTML += html;
/*                     } else if (data.hasOwnProperty("stream.channel") === false) {
                        html += '<div class="feature-box offline">' + channels[i] + ' is Offline</div>';
                        document.getElementById('twitchDash').innerHTML += html;
 */                     } else if (data.hasOwnProperty("_total") === true) {
                            games.push(data);
                            console.log(data);
                    }
                }
            }
        }
    }
            connect();
    