module.exports = {
	/* The token of your Discord Bot */
	token: "NjYzMTI2MTAxMTQwMzA4MDA4.XhEKHw.8ua7F94eT3yD2v3Ly3jHmUFWw-U",
	/* For the support server */
	support: {
		id: "663021532741894155", // The ID of the support server
		logs: "663023178666344498", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Atlanta | Open Source" // And the default footer for the embeds
	},
	defaultLanguage: "english", // The default language for the new servers
	botname: "Atlanta", // The name of the bot
	/* Bot's owner informations */
	owner: {
		id: "324631677861232640", // The ID of the bot's owner
		name: "Esael#5278" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// SIMPLE YOUTUBE API: https://console.developers.google.com/
		simpleYoutube: "AIzaSyBXZGITRf0qqfqWlsxhsU5oO6qXHMfTup0",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX"
	},
	/* The emojis that are required for certain commands */
	emojis: {
		error: "https://cdn.discordapp.com/emojis/565212755804684318.png",
		// RE: https://cdn.discordapp.com/emojis/565212755804684318.png
		success: "https://cdn.discordapp.com/emojis/565212755804684318.png",
		// RE: https://cdn.discordapp.com/emojis/565212709591973896.png
		loading: "https://cdn.discordapp.com/emojis/565214530121105418.gif",
		// RE: https://cdn.discordapp.com/emojis/565214530121105418.gif
		stats: "https://img.icons8.com/flat_round/64/000000/bar-chart-isometric.png",
		// RE: https://img.icons8.com/flat_round/64/000000/bar-chart-isometric.png
		ram: "https://img.icons8.com/color/96/000000/processor.png",
		// RE: https://img.icons8.com/color/96/000000/processor.png
		version: "https://img.icons8.com/color/96/000000/installing-updates.png",
		// RE: https://img.icons8.com/color/96/000000/installing-updates.png
		link: "https://img.icons8.com/color/96/000000/link.png",
		// RE: https://img.icons8.com/color/96/000000/link.png
		voice: "https://img.icons8.com/color/96/000000/speaker.png",
		// RE: https://img.icons8.com/color/96/000000/speaker.png
		add: "https://img.icons8.com/flat_round/64/000000/plus.png",
		// RE: https://img.icons8.com/flat_round/64/000000/plus.png
		vote: "https://img.icons8.com/flat_round/96/vote-button.png ",
		// RE: https://img.icons8.com/flat_round/96/vote-button.png 
		help: "https://img.icons8.com/color/96/000000/help.png",
		// RE: https://img.icons8.com/color/96/000000/help.png
		warn: "https://img.icons8.com/flat_round/64/000000/error--v1.png",
		// RE: https://img.icons8.com/flat_round/64/000000/error--v1.png
		games: "https://img.icons8.com/color/96/000000/computer.png",
		// RE: https://img.icons8.com/color/96/000000/computer.png
		crown: "https://img.icons8.com/flat_round/96/000000/crown.png",
		// RE: https://img.icons8.com/flat_round/96/000000/crown.png
		discriminator: "https://img.icons8.com/color/96/000000/hashtag-2.png",
		// RE: https://img.icons8.com/color/96/000000/hashtag-2.png
		bot: "https://img.icons8.com/color/96/000000/bot.png",
		// RE: https://img.icons8.com/color/96/000000/bot.png
		avatar: "https://img.icons8.com/color/96/000000/picture.png",
		// RE: https://img.icons8.com/color/96/000000/picture.png
		calendar: "https://img.icons8.com/color/96/000000/calendar.png",
		// RE: https://img.icons8.com/color/96/000000/calendar.png
		calendar2: "https://img.icons8.com/color/96/000000/calendar-2.png",
		// RE: https://img.icons8.com/color/96/000000/calendar-2.png
		up: "https://img.icons8.com/cotton/64/000000/circled-up--v2.png",
		// RE: https://img.icons8.com/cotton/64/000000/circled-up--v2.png
		pencil: "https://img.icons8.com/color/96/000000/pencil.png",
		// RE: https://img.icons8.com/color/96/000000/pencil.png
		roles: "https://img.icons8.com/color/96/000000/admin-settings-male.png",
		// RE: https://img.icons8.com/color/96/000000/admin-settings-male.png
		color: "https://img.icons8.com/color/96/000000/color-palette.png",
		// RE: https://img.icons8.com/color/96/000000/color-palette.png
		minecraft: "https://img.icons8.com/color/96/000000/minecraft-sword.png ",
		// RE: https://img.icons8.com/color/96/000000/minecraft-sword.png 
		users: "https://img.icons8.com/color/96/000000/group.png",
		// RE: https://img.icons8.com/color/96/000000/group.png
		title: "https://img.icons8.com/color/96/000000/tag-window.png",
		// RE: https://img.icons8.com/color/96/000000/tag-window.png
		singer: "https://img.icons8.com/ios-filled/96/000000/rap.png",
		// RE: https://img.icons8.com/ios-filled/96/000000/rap.png
		time: "https://img.icons8.com/color/96/000000/future.png",
		// RE: https://img.icons8.com/color/96/000000/future.png
		search: "https://img.icons8.com/cotton/96/000000/search--v2.png",
		// RE: https://img.icons8.com/cotton/96/000000/search--v2.png
		desc: "https://img.icons8.com/color/96/000000/text-box.png",
		// RE: https://img.icons8.com/color/96/000000/text-box.png
		playlist: "https://img.icons8.com/color/96/000000/smart-playlist.png",
		// RE: https://img.icons8.com/color/96/000000/smart-playlist.png
		channels: "https://img.icons8.com/color/96/000000/filled-chat.png",
		// RE: https://img.icons8.com/color/96/000000/filled-chat.png
		afk: "https://img.icons8.com/color/96/000000/no-microphone.png",
		// RE: https://img.icons8.com/color/96/000000/no-microphone.png
		id: "https://img.icons8.com/color/96/000000/id-verified.png",
		// RE: https://img.icons8.com/color/96/000000/id-verified.png
		ip: "https://img.icons8.com/color/96/000000/ip-address.png",
		// RE: https://img.icons8.com/color/96/000000/ip-address.png
		folder: "https://img.icons8.com/color/344/opened-folder.png",
		// RE: https://img.icons8.com/color/344/opened-folder.png
		desc2: "https://img.icons8.com/color/344/edit-property.png",
		// RE: https://img.icons8.com/color/344/edit-property.png
		patreon: "https://cdn6.aptoide.com/imgs/2/8/e/28e759bcb1e00ad978afdf443e60c11e_icon.png",
		// RE: https://cdn6.aptoide.com/imgs/2/8/e/28e759bcb1e00ad978afdf443e60c11e_icon.png
		server: "https://img.icons8.com/color/96/000000/root-server.png",
		// RE: https://img.icons8.com/color/96/000000/root-server.png
		boost: "https://i.goopics.net/w7LAR.png",
		// RE: https://i.goopics.net/w7LAR.png
		status: {
			idle: "https://i.goopics.net/bRVWW.png",
			// RE: https://i.goopics.net/bRVWW.png
			dnd: "https://i.goopics.net/lWN3A.png",
			// RE: https://i.goopics.net/lWN3A.png
			offline: "https://i.goopics.net/WRPWl.png",
			// RE: https://i.goopics.net/WRPWl.png
			online: "https://i.goopics.net/QdGW0.png"
			// RE: https://i.goopics.net/QdGW0.png
		},
		letters: {
			a: "https://i.goopics.net/RNemO.png",
			// RE: https://i.goopics.net/RNemO.png
			w: "https://i.goopics.net/AyKOA.png",
			// RE: https://i.goopics.net/AyKOA.png
			r: "https://i.goopics.net/7PKen.png",
			// RE: https://i.goopics.net/7PKen.png
			d: "https://i.goopics.net/vAgj7.png"
			// RE: https://i.goopics.net/vAgj7.png
		},
		categories: {
			administration: "https://img.icons8.com/color/96/000000/horizontal-settings-mixer.png",
			// RE: https://img.icons8.com/color/96/000000/horizontal-settings-mixer.png
			economy: "https://img.icons8.com/color/96/000000/banknotes.png",
			// RE: https://img.icons8.com/color/96/000000/banknotes.png
			fun: "https://img.icons8.com/color/96/000000/smiling.png",
			// RE: https://img.icons8.com/color/96/000000/smiling.png
			general: "https://i.goopics.net/3X5oq.png",
			// RE: https://i.goopics.net/3X5oq.png
			images: "https://img.icons8.com/color/96/000000/picture.png",
			// RE: https://img.icons8.com/color/96/000000/picture.png
			moderation: "https://img.icons8.com/color/96/000000/police-badge.png",
			// RE: https://img.icons8.com/color/96/000000/police-badge.png
			music: "https://img.icons8.com/color/96/000000/musically.png",
			// RE: https://img.icons8.com/color/96/000000/musically.png
			owner: "https://img.icons8.com/color/96/000000/queen-uk.png",
			// RE: https://img.icons8.com/color/96/000000/queen-uk.png
			custom: "https://img.icons8.com/color/96/000000/request-service.png"
			// RE: https://img.icons8.com/color/96/000000/request-service.png
		}
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Androz2091", // Founder's github account
		donate: "https://paypal.me/UserBot" // Donate link
	},
	/* The badges for the badges command */
	badges: {
		games: [
			{ name: "Minecraft", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "GTA", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "Fortnite", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "Mario", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name: "LOL", emoji: "XXXXXXXXXXX", price: 1200 }
		],
		flags: [
			{ name: "France", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Canada", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Swiss", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "Great Britain", emoji: "XXXXXXXXXXX", price: 1500 },
			{ name: "USA", emoji: "XXXXXXXXXXX", price: 1500 }
		],
		others: [
			{ name:"Rich", emoji: "XXXXXXXXXXX", price: 18000 },
			{ name:"Troll", emoji: "XXXXXXXXXXX", price: 3000 },
			{ name:"Atlanta", emoji: "XXXXXXXXXXX", price: 1200 },
			{ name:"IAMABOT", emoji: "XXXXXXXXXXX", price: 1000 },
			{ name:"Discordien", emoji: "XXXXXXXXXXX", price: 500 }
		]
	},
	/* The Bot status */
	status: [
		{
			name: "*help",
			type: "LISTENING"
		},
		{
			name: "http://esabot.ml",
			type: "PLAYING"
		}
	],
	proMode: false, // Whether the bot is in pro mode (only users in the proUsers array will be able to invite the bot)
	/* The pro users */
	proUsers: [
		"DiscordUser ID",
		"Another DiscordUser ID"
	]
}
