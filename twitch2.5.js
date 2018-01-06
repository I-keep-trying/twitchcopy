function connect(url, success, error) {
    return new Promise(function (resolve, reject) { // handle responses
        for (let i = 0; i < url.length; i++) {
            let get = new XMLHttpRequest();
            get.open("GET", encodeURI(url[i]), true),
                get.setRequestHeader('Client-ID', 'iy25o25wjejp9dg0g446t3dnnsu8aw'),
                get.send();
            get.onload = function () {
                if (get.readyState === XMLHttpRequest.DONE && get.status === 200) {
                    resolve(get.response);
                    success(JSON.parse(get.responseText));
                } else {
                    reject(Error(get.statusText));
                    error(error);
                }

            }

        }
    });
}


connect(
    ["https://api.twitch.tv/kraken/videos/top?limit=5&sort=time&language=en",
        "https://api.twitch.tv/kraken/games/top?limit=5",
        "https://api.twitch.tv/kraken/streams/featured?limit=5"],
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