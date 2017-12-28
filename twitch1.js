// UPDATED 12/17/2017 IT WORKS!!!
let channelArray = ["ESL_SC2", "OgamingSC2", "asmodeegames", "vgbootcamp", "rocketleague", "epicenter_en1"];
function connect(channels) {
    let out = [];
    (function loop(i, length) {
        if (i >= length) {
            return;
        }
        var url = "https://api.twitch.tv/kraken/streams/" + channels[i];
        var get = new XMLHttpRequest();
        get.open("GET", encodeURI(url), true),
            get.setRequestHeader('Client-ID', 'iy25o25wjejp9dg0g446t3dnnsu8aw'),
            get.send();
        get.onreadystatechange = function () {
            if (get.readyState === 4 && get.status === 200) {
                var data = JSON.parse(get.responseText);
                out.push(data);
            }
        }
    
        loop(i + 1, channels.length);
        
        
    })(0, channels.length);
    return out;
}

connect(channelArray);	

function print(html) {
    console.log(out);
    var html = '';
} if (data.stream === null) {
    console.log(channels[i] + ' is offline');
    html += '<div class="feature-box offline">' + channels[i] + ' is Offline</div>';
    document.getElementById('twitchDash').innerHTML += html;
} if (data.stream !== null) {
    console.log(channels[i] + ' is online');
    html += '<div class="feature-box offline">' + channels[i] + ' is Online</div>';
    document.getElementById('twitchDash').innerHTML += html;

}

print(out);