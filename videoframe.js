
        var options = {
        width: <width>,
		height: <height>,
 		channel: "<channel ID>",
 		video: "<video ID>",
		collection: "<collection ID>",
	};
	var player = new Twitch.Player("<player div ID>", options);
	player.setVolume(0.5);