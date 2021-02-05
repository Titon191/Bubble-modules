// musicPlayer module

const { Player } = require("discord-music-player");

// musicPlayer - Odtwarza muzykę
musicPlayer = new Player(client, {
  leaveOnEmpty: false, 
})
