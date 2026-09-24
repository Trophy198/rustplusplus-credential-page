---
title: "Commands"
pageTitle: "Commands Documentation"
description: "Commands can be executed via Discord or In-Game Team Chat. To be able to run Slash Commands in Discord, you need to be part of the designated Discord Role "
order: 9
upstream: "https://github.com/alexemanuelol/rustplusplus/blob/8f7300e4e3dd68392f2b01ead5d711697f63ac63/docs/commands.md"
upstreamPath: "docs/commands.md"
upstreamSha: "8f7300e4e3dd68392f2b01ead5d711697f63ac63"
syncedAt: "2026-09-24T02:27:31.680Z"
license: GPL-3.0
ads: false
---
> Commands can be executed via Discord or In-Game Team Chat. To be able to run Slash Commands in Discord, you need to be part of the designated Discord Role for the bot. If no role is set for the bot then everyone should be able to use the Slash Commands by default. To be able to run In-Game Commands, you need to be in the same In-Game Team as the hoster. In-Game Commands can only be run from Team Chat, not global chat. You can also run In-Game commands from the Discord Text-Channel `commands`.

- [Discord Slash Commands](/docs/commands#discord-slash-commands)
- [In-Game Commands](/docs/commands#in-game-commands)

# Discord Slash Commands

Slash Command | Description
------------- | -----------
[**/alarm**](/docs/commands#alarm) | Operations on Smart Alarms.
[**/alias**](/docs/commands#alias) | Create an alias for a command/sequence of characters.
[**/blacklist**](/docs/commands#blacklist) | Blacklist a user from using the bot.
[**/cctv**](/docs/commands#cctv) | Posts CCTV codes for a monument.
[**/craft**](/docs/commands#craft) | Display the cost to craft an item.
[**/credentials**](/docs/commands#credentials) | Set/Clear the Credentials for the user account.
[**/decay**](/docs/commands#decay) | Display the decay time of an item.
[**/help**](/docs/commands#help) | Display help message.
[**/item**](/docs/commands#item) | Get the details of an item.
[**/leader**](/docs/commands#leader) | Give or take the leadership from/to a team member.
[**/map**](/docs/commands#map) | Get the currently connected server map image.
[**/market**](/docs/commands#market) | Operations for In-Game Vending Machines.
[**/players**](/docs/commands#players) | Get player/players information based on battlemetrics.
[**/recycle**](/docs/commands#recycle) | Display the output of recycling an item.
[**/research**](/docs/commands#research) | Display the cost to research an item.
[**/reset**](/docs/commands#reset) | Reset Discord channels.
[**/role**](/docs/commands#role) | Set/Clear a specific role that will be able to see the rustplusplus category content.
[**/storagemonitor**](/docs/commands#storagemonitors) | Operations on Storage Monitors.
[**/switch**](/docs/commands#switch) | Operations on Smart Switches.
[**/upkeep**](/docs/commands#upkeep) | Get the upkeep cost of an item.
[**/uptime**](/docs/commands#uptime) | Display uptime of the bot and server.
[**/voice**](/docs/commands#voice) | Operations on Voice Feature.


## **/alarm**

> **Operations on Smart Alarms.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`edit` | &nbsp; | Edit the properties of a Smart Alarm. | &nbsp;
&nbsp; | `id` | The ID of the Smart Alarm. | `True`
&nbsp; | `image` | Set the image that best represent the Smart Alarm. | `True`

![Discord Slash Command alarm Image](/images/upstream/slash_commands/alarms_edit.png)


## **/alias**

> **Create an alias for a command/sequence of characters.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`add` | &nbsp; | Add an alias. | &nbsp;
&nbsp; | `alias` | The alias to use. | `True`
&nbsp; | `value` | The command/sequence of characters. | `True`
`remove` | &nbsp; | Remove an alias. | &nbsp;
&nbsp; | `index` | The index of the alias to remove. | `True`
`show` | &nbsp; | Show all registered aliases. | &nbsp;

![Discord Slash Command alias Image](/images/upstream/slash_commands/alias.png)


## **/blacklist**

> **Blacklist a user from using the bot.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`add` | &nbsp; | Add user to the blacklist. | &nbsp;
&nbsp; | `discord_user` | The discord user. | `False`
&nbsp; | `steamid` | The steamid of the user. | `False`
`remove` | &nbsp; | Remove user from the blacklist. | &nbsp;
&nbsp; | `discord_user` | The discord user. | `False`
&nbsp; | `steamid` | The steamid of the user. | `False`
`show` | &nbsp; | Show blacklisted users. | &nbsp;

![Discord Slash Command blacklist Image](/images/upstream/slash_commands/blacklist.png)


## **/cctv**

> **Posts CCTV codes for a monument.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `monument` | Rust monument. | `True`

![Discord Slash Command monument Image](/images/upstream/slash_commands/cctv.png)


## **/craft**

> **Display the cost to craft an item.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `name` | The name of the item to craft. | `False`
&nbsp; | `id` | The id of the item to craft. | `False`
&nbsp; | `quantity` | The quantity of items to craft. | `False`

![Discord Slash Command craft Image](/images/upstream/slash_commands/craft.png)


## **/credentials**

> **Add/Remove the Credentials for the user account.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`add` | &nbsp; | Add Credentials. | &nbsp;
&nbsp; | `gcm_android_id` | GCM Android ID. | `True`
&nbsp; | `gcm_security_token` | GCM Security Token. | `True`
&nbsp; | `steam_id` | Steam ID. | `True`
&nbsp; | `issued_date` | Issued date of the credentials. | `True`
&nbsp; | `expire_date` | Expire date of the credentials. | `True`
&nbsp; | `hoster` | Should be hoster. | `False`
`remove` | &nbsp; | Remove Credentials. | &nbsp;
&nbsp; | `steam_id` | Steam ID. | `False`
`show` | &nbsp; | Show all registered Credentials. | &nbsp;
`set_hoster` | &nbsp; | Set the hoster. | &nbsp;
&nbsp; | `steam_id` | Steam ID. | `False`

![Discord Slash Command credentials Image](/images/upstream/slash_commands/credentials.png)


## **/decay**

> **Display the decay time of an item.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `name` | The name of the item. | `False`
&nbsp; | `id` | The id of the item. | `False`
&nbsp; | `hp` | THe current HP of the item. | `False`

![Discord Slash Command decay Image](/images/upstream/slash_commands/decay.png)


## **/help**

> Display help message.

![Discord Slash Command help Image](/images/upstream/slash_commands/help.png)


## **/item**

> **Get the details of an item.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `name` | The name of the item. | `False`
&nbsp; | `id` | The id of the item. | `False`

![Discord Slash Command item Image](/images/upstream/slash_commands/item.png)


## **/leader**

> **Give or take the leadership from/to a team member.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `member` | The name of the team member. | `True`

![Discord Slash Command leader Image](/images/upstream/slash_commands/leader.png)


## **/map**

> **Get the currently connected server map image.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`all` | &nbsp; | Get the map including both monument names and markers. | &nbsp;
`clean` | &nbsp; | Get the clean map. | &nbsp;
`monuments`| &nbsp; | Get the map including monument names. | &nbsp;
`markers` | &nbsp; | Get the map including markers. | &nbsp;

![Discord Slash Command map Image](/images/upstream/slash_commands/map.png)


## **/market**

> **Operations for In-Game Vending Machines.**.

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`search` | &nbsp; | Search for an item in Vending Machines. | &nbsp;
&nbsp; | `order` | The order type to search for (all, buy, sell). | `True`
&nbsp; | `name` | The name of the item to search for. | `False`
&nbsp; | `id` | The ID of the item to search for. | `False`
`subscribe` | &nbsp; | Subscribe to an item in Vending Machines. | &nbsp;
&nbsp; | `order` | The order type (all, buy, sell). | `True`
&nbsp; | `name` | The name of the item to subscribe to. | `False`
&nbsp; | `id` | The ID of the item to subscribe to. | `False`
`unsubscribe` | &nbsp; | Unsubscribe to an item in Vending Machines. | &nbsp;
&nbsp; | `order` | The order type (all, buy, sell). | `True`
&nbsp; | `name` | The name of the item to unsubscribe to. | `False`
&nbsp; | `id` | The ID of the item to unsubscribe to. | `False`
`list` | &nbsp; | Display the subscription list. | &nbsp;

![Discord Slash Command market Image](/images/upstream/slash_commands/market.png)


## **/players**

> **Get player/players information based on Battlemetrics.** Calling the subcommand name without the name option will display all players depending on status option. By calling the subcommand playerid, you will get more specific information about a single player.

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`name` | &nbsp; | Search for a player on Battlemetrics based on player name. | &nbsp;
&nbsp; | `status` | Search for players that are online/offline/any. | `True`
&nbsp; | `name` | The name of the player. | `False`
&nbsp; | `battlemetricsid` | The Battlemetrics ID of the server (default: The connected server). | `False`
`playerid` | &nbsp; | Search for a player on Battlemetrics based on player id. | &nbsp;
&nbsp; | `playerid` | The player id of the player. | `True`
&nbsp; | `battlemetricsid` | The Battlemetrics ID of the server (default: The connected server). | `False`

![Discord Slash Command players Image](/images/upstream/slash_commands/players.png)
![Discord Slash Command players all players Image](/images/upstream/slash_commands/players_all_players.png)
![Discord Slash Command players specific user Image](/images/upstream/slash_commands/players_specific_user.png)


## **/recycle**

> **Display the output of recycling an item.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `name` | The name of the item to recycle. | `False`
&nbsp; | `id` | The id of the item to recycle. | `False`
&nbsp; | `quantity` | The quantity of items to recycle. | `False`

![Discord Slash Command recycle Image](/images/upstream/slash_commands/recycle.png)


## **/research**

> **Display the cost to research an item.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `name` | The name of the item to research. | `False`
&nbsp; | `id` | The id of the item to research. | `False`

![Discord Slash Command research Image](/images/upstream/slash_commands/research.png)


## **/reset**

> **Reset Discord channels.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`discord` | &nbsp; | Reset discord channels. | &nbsp;
`information` | &nbsp; | Reset information channel. | &nbsp;
`servers` | &nbsp; | Reset servers channel. | &nbsp;
`settings` | &nbsp; | Reset settings channel. | &nbsp;
`switches` | &nbsp; | Reset switches channels. | &nbsp;
`alarms` | &nbsp; | Reset alarms channel. | &nbsp;
`storagemonitors` | &nbsp; | Reset storagemonitors channel. | &nbsp;
`trackers` | &nbsp; | Reset trackers channel. | &nbsp;

![Discord Slash Command reset Image](/images/upstream/slash_commands/reset.png)


## **/role**

> **Set/Clear a specific role that will be able to see the rustplusplus category content.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`set` | &nbsp; | Set the role. | &nbsp;
&nbsp; | `role` | The role rustplusplus channels will be visible to. | `True`
`clear` | &nbsp; | Clear the role (to allow everyone to see the rustplusplus channels). | &nbsp;

![Discord Slash Command role Image](/images/upstream/slash_commands/role.png)


## **/storagemonitors**

> **Operations on Storage Monitors.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`edit` | &nbsp; | Edit the properties of a Storage Monitor. | &nbsp;
&nbsp; | `id` | The ID of the Storage Monitor. | `True`
&nbsp; | `image` | Set the image that best represent the Storage Monitor. | `True`

![Discord Slash Command storagemonitor Image](/images/upstream/slash_commands/storagemonitor.png)


## **/switch**

> **Operations on Smart Switches.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`edit` | &nbsp; | Edit the properties of a Smart Switch. | &nbsp;
&nbsp; | `id` | The ID of the Smart Switch. | `True`
&nbsp; | `image` | Set the image that best represent the Smart Switch. | `True`

![Discord Slash Command switch Image](/images/upstream/slash_commands/switch.png)


## **/upkeep**

> **Get the upkeep cost of an item.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
&nbsp; | `name` | The name of the item. | `False`
&nbsp; | `id` | The id of the item. | `False`

![Discord Slash Command upkeep Image](/images/upstream/slash_commands/upkeep.png)


## **/uptime**

> **Display uptime of the bot and server.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`bot` | &nbsp; | Display uptime of bot. | &nbsp;
`server` | &nbsp; | Display uptime of server. | &nbsp;

![Discord Slash Command uptime Image](/images/upstream/slash_commands/uptime.png)

## **/voice**

> **Operations on Voice Feature.**

Subcommand | Options | Description | Required
---------- | ------- | ----------- | --------
`join` | &nbsp; | Bot Joins a Voicechannel. | &nbsp;
`leave` | &nbsp; | Bot Leaves a Voicechannel. | &nbsp;

![Discord Slash Command uptime Image](/images/upstream/slash_commands/voice.png)


# In-Game Commands

In-Game Command | Description
--------------- | -----------
[**afk**](/docs/commands#afk) | Get the currently afk players in your team.
[**alive**](/docs/commands#alive) | Get the player with the longest time alive.
[**cargo**](/docs/commands#cargo) | Get information about CargoShip (Location, time till enters egress stage, time since last on map).
[**chinook**](/docs/commands#chinook) | Get information about Chinook 47 (Location, time since last on map).
[**connection/connections**](/docs/commands#connectionconnections) | Get recent connection events.
[**craft**](/docs/commands#craft-ingame) | Display the cost to craft an item.
[**death/deaths**](/docs/commands#deathdeaths) | Get recent death events.
[**decay**](/docs/commands#decay-ingame) | Display the decay time of an item.
[**events**](/docs/commands#events) | Get recent events.
[**heli**](/docs/commands#heli) | Get information about Patrol Helicopter (Location, time since last downed, time since last on map).
[**large**](/docs/commands#large) | Get information about Large Oil Rig (Time till crate unlocks, time since last trigger).
[**leader**](/docs/commands#leader-1) | Give/Take the Team Leadership.
[**marker**](/docs/commands#marker) | Set custom markers anywhere on the map.
[**market**](/docs/commands#market-ingame) | Search for items in vending machines or subscribe/unsubscribe to items.
[**mute**](/docs/commands#mute) | Mute the bot from the In-Game Team Chat.
[**note/notes**](/docs/commands#notenotes) | Create notes about meaningful things.
[**offline**](/docs/commands#offline) | Get the currently offline players in your team.
[**online**](/docs/commands#online) | Get the currently online players in your team.
[**player/players**](/docs/commands#playerplayers) | Get the names and playtime of the currently online players on the server (Based on Battlemetrics).
[**pop**](/docs/commands#pop) | Get the current population of the server including queue size and max population.
[**prox**](/docs/commands#prox) | Get the distance to the three closest teammates.
[**recycle**](/docs/commands#recycle-ingame) | Display the output of recycling an item.
[**research**](/docs/commands#research-ingame) | Display the cost to research an item.
[**send**](/docs/commands#send) | Send a message to a discord user.
[**small**](/docs/commands#small) | Get information about Small Oil Rig (Time till crate unlocks, time since last trigger).
[**steamid**](/docs/commands#steamid) | Get the steamid of a teammate.
[**team**](/docs/commands#team) | Get the names of all members in the team.
[**time**](/docs/commands#time) | Get the current time In-Game and time till day/night.
[**timer**](/docs/commands#timer) | Set custom timers that will notify whenever the timer have expired.
[**tr**](/docs/commands#tr) | Translate a text to another language.
[**trf**](/docs/commands#trf) | Translate a text from one language to another.
[**tts**](/docs/commands#tts) | Send a Text-To-Speech message to the Discord teamchat channel.
[**unmute**](/docs/commands#unmute) | Unmute the bot from the In-Game Team Chat.
[**upkeep**](/docs/commands#upkeep) | Get the upkeep time of all connected tool cupboard monitors.
[**uptime**](/docs/commands#uptime-ingame) | Display uptime of the bot and server.
[**vendor**](/docs/commands#vendor) | Get information about the Traveling Vendor (Current Location, Time since last vendor)
[**wipe**](/docs/commands#wipe) | Get the time since it was wiped.



## **afk**

> **Get the currently afk players in your team.** Definition of AFK for this command is inactivity (No change in XY-coordinate) for more than 5 minutes.
<br>Command: `!afk`

![In-Game Command afk Image](/images/upstream/ingame_commands/afk_ingame.png)


## **alive**

> **Get the player with the longest time alive or the alive time of a teammate.**
<br>Command: `!alive`
<br>Command: `!alive Alle`

![In-Game Command alive Image](/images/upstream/ingame_commands/alive_ingame.png)


## **cargo**

> **Get information about CargoShip (Location, time till enters egress stage, time since last on map).**
<br>Command: `!cargo`

![In-Game Command cargo Image](/images/upstream/ingame_commands/cargo_ingame.png)


## **chinook**

> **Get information about Chinook 47 (Location, time since last on map).**
<br>Command: `!chinook`

![In-Game Command chinook Image](/images/upstream/ingame_commands/chinook_ingame.png)


## **connection/connections**

> **Get recent connection events of the team or from a specific teammate.**
<br>Command: `!connections`
<br>Command: `!connection Alle`

![In-Game Command connection Image](/images/upstream/ingame_commands/connection_ingame.png)


## **craft ingame**

> **Display the cost to craft an item (Quantity is optional).**
<br>Command: `!craft <item-name> <quantity>`
<br>Command: `!craft Assault Rifle 10`
<br>Command: `!craft rocket 100`

![In-Game Command craft Image](/images/upstream/ingame_commands/craft_ingame.png)


## **death/deaths**

> **Get recent death events of the team or from a specific teammate.**
<br>Command: `!deaths`
<br>Command: `!death Alle`

![In-Game Command death Image](/images/upstream/ingame_commands/death_ingame.png)


## **decay ingame**

> **Display the decay time of an item.**
<br>Command: `!decay`
<br>Command: `!decay Sheet Metal Door`
<br>Command: `!decay Tug Boat 100`
<br>Command: `!decay armored wall 450`

![In-Game Command decay Image](/images/upstream/ingame_commands/decay_ingame.png)


## **events**

> **Get recent In-Game events.** Available events are cargo, heli, small, large, chinook
<br>Command: `!events` - Get last 5 events
<br>Command: `!events 3` - Get last 3 events
<br>Command: `!events cargo` - Get last 5 events from cargo
<br>Command: `!events cargo 2` - Get last 2 events from cargo

![In-Game Command events Image](/images/upstream/ingame_commands/events_ingame.png)


## **heli**

> **Get information about Patrol Helicopter (Location, time since last downed, time since last on map).**
<br>Command: `!heli`

![In-Game Command heli Image](/images/upstream/ingame_commands/heli_ingame.png)


## **large**

> **Get information about Large Oil Rig (Time till crate unlocks, time since last trigger).**
<br>Command: `!large`

![In-Game Command large Image](/images/upstream/ingame_commands/large_ingame.png)


## **leader**

> **Give/Take the Team Leadership.** Calling the leader command alone will give the caller leadership. You can also give the leadership to a team member by writing the name or part of the name after the command.
<br>`This command only works if the current leader is the person that setup the bot.`

Subcommand | Description | Required
---------- | ----------- | --------
`<team_member_name>` | The name or part of the name of a team member (`!leader <name>`). | `False`

![In-Game Command leader Image](/images/upstream/ingame_commands/leader_ingame.png)


## **marker**

> **Set custom markers anywhere on the map.** This command can be very useful for small stash locations. Place down a small stash, create a marker on that spot and be able to navigate back to that exact place at a later stage. To list all registered markers, run `!markers`.

Subcommand | Description | Required
---------- | ----------- | --------
`add` | Add a custom marker (`!marker add <name>`). | `False`
`remove` | Remove a custom marker (`!marker remove <id>`). | `False`
`<marker_name>` | Calling with the name of the marker will let you navigate to that marker (`!marker <name>`). | `False`

![In-Game Command marker Image](/images/upstream/ingame_commands/marker_ingame.png)


## **market ingame**

> **Search for items in vending machines or subscribe/unsubscribe to items.**
<br>Command: `!market search sell Thompson`
<br>Command: `!market sub sell m249`
<br>Command: `!market sub all Scrap`
<br>Command: `!market unsub sell m249`
<br>Command: `!market list`

Subcommand | Description | Required
---------- | ----------- | --------
`search` | Search for an item in Vending Machines (`!market search sell thompson`). | `False`
`sub` | Subscribe to an item in Vending Machines (`!market sub all thompson`). | `False`
`unsub` | Unsubscribe to an item in Vending Machines (`!market unsub sell thompson`). | `False`
`list` | Display the subscription list (`!market list`). | `False`

![In-Game Command market Image](/images/upstream/ingame_commands/market_ingame.png)


## **mute**

> **Mute the bot from the In-Game Team Chat.** This will mute everything the bot would normally say in Team Chat such as command response, event notifications, timers, Smart Device notifications.
<br>Command: `!mute`

![In-Game Command mute Image](/images/upstream/ingame_commands/mute_ingame.png)


## **note/notes**

> **Create notes about meaningful things.** To list all registered notes run `!notes`, all note ids will be presented as well.

Subcommand | Description | Required
---------- | ----------- | --------
`add` | Add a note (`!note add <text>`). | `False`
`remove` | Remove a note (`!note remove <id>`). | `False`

![In-Game Command notes Image](/images/upstream/ingame_commands/notes_ingame.png)


## **offline**

> **Get the currently offline players in your team.**
<br>Command: `!offline`

![In-Game Command offline Image](/images/upstream/ingame_commands/offline_ingame.png)


## **online**

> **Get the currently online players in your team.**
<br>Command: `!online`

![In-Game Command online Image](/images/upstream/ingame_commands/online_ingame.png)


## **player/players**

> **Get the names and playtime of the currently online players on the server (Based on Battlemetrics).** To get all the currently online players on the server run `!players`. To get the information from a certain player run `!player <name or part of name>`.

![In-Game Command players Image](/images/upstream/ingame_commands/players_ingame.png)
![In-Game Command player Image](/images/upstream/ingame_commands/player_ingame.png)


## **pop**

> **Get the current population of the server including queue size and max population.**
<br>Command: `!pop`

![In-Game Command pop Image](/images/upstream/ingame_commands/pop_ingame.png)


## **prox**

> **Get the distance to the three closest teammates.** To get the three closest teammates run `!prox`. To get the distance to a team member run `!prox <name or part of name>`.

![In-Game Command prox Image](/images/upstream/ingame_commands/prox_ingame.png)


## **recycle ingame**

> **Display the output of recycling an item (Quantity is optional).**
<br>Command: `!recycle <item-name> <quantity>`
<br>Command: `!recycle Assault Rifle 10`
<br>Command: `!recycle rocket 100`

![In-Game Command recycle Image](/images/upstream/ingame_commands/recycle_ingame.png)


## **research ingame**

> **Display the cost to research an item.**
<br>Command: `!research <item-name>`
<br>Command: `!research Assault Rifle`
<br>Command: `!research rocket`

![In-Game Command research Image](/images/upstream/ingame_commands/research_ingame.png)


## **send**

> **Send a message to a discord user.**
<br>Command: `!send Alle Hello my friend!`

![In-Game Command send Image](/images/upstream/ingame_commands/send_ingame.png)


## **small**

> **Get information about Small Oil Rig (Time till crate unlocks, time since last trigger).**
<br>Command: `!small`

![In-Game Command small Image](/images/upstream/ingame_commands/small_ingame.png)


## **steamid**

> **Get the steamid of a teammate.**

Subcommand | Description | Required
---------- | ----------- | --------
`<team_member_name>` | The name or part of the name of a team member (`!steamid <name>`). | `False`

![In-Game Command steamid Image](/images/upstream/ingame_commands/steamid_ingame.png)


## **team**

> **Get the names of all members in the team.**
<br>Command: `!team`

![In-Game Command team Image](/images/upstream/ingame_commands/team_ingame.png)


## **time**

> **Get the current time In-Game and time till day/night.**
<br>Command: `!time`

![In-Game Command time Image](/images/upstream/ingame_commands/time_ingame.png)


## **timer**

> **Set custom timers that will notify whenever the timer have expired.** To list all registered timers run `!timers`.
<br>`The argument <time> is used to set time in the format: 2h15m or 15m10s etc... (not space between d/h/m/s).`

Subcommand | Description | Required
---------- | ----------- | --------
`add` | Add a custom timer (`!timer add <time> <text>`). | `False`
`remove` | Remove a custom timer (`!timer remove <id>`). | `False`

![In-Game Command timer Image](/images/upstream/ingame_commands/timer_ingame.png)


## **tr**

> **Translate a text from English to another language.**
<br>Command: `!tr <language-code> <Text>`

Subcommand | Description | Required
---------- | ----------- | --------
`language` | Get the language code (`!tr language <language>`). | `False`
`<language-code>` | Translate the text to this language (`!tr <language> <text>`). | `False`

![In-Game Command get language code Image](/images/upstream/ingame_commands/language_code_ingame.png)
![In-Game Command translateTo Image](/images/upstream/ingame_commands/translateTo_ingame.png)


## **trf**

> **Translate a text from a language to another language.**
<br>Command: `!trf <language-code-from> <language-code-to> <Text>`

![In-Game Command translateFrom Image](/images/upstream/ingame_commands/translateFrom_ingame.png)

## **tts**

> **Send a Text-To-Speech message to the Discord teamchat channel.** To execute a Text-To-Speech command run `!tts <text>`.
<br>Command: `!tts <text>`

![In-Game Command tts Image](/images/upstream/ingame_commands/tts_ingame.png)


## **unmute**

> **Unmute the bot from the In-Game Team Chat.**
<br>Command: `!unmute`

![In-Game Command unmute Image](/images/upstream/ingame_commands/unmute_ingame.png)


## **upkeep**

> **Get the upkeep time of all connected tool cupboard monitors.**
<br>Command: `!upkeep`

![In-Game Command upkeep Image](/images/upstream/ingame_commands/upkeep_ingame.png)


## **uptime ingame**

> **Display the uptime of the bot and server.**
<br>Command: `!uptime`

![In-Game Command uptime Image](/images/upstream/ingame_commands/uptime_ingame.png)


## **vendor**

> **Get information about the Traveling Vendor (Current Location, Time since last Traveling Vendor).**
<br>Command: `!vendor`

![In-Game Command vendor Image](/images/upstream/ingame_commands/vendor_ingame.png)


## **wipe**

> **Get the time since it was wiped.**
<br>Command: `!wipe`

![In-Game Command wipe Image](/images/upstream/ingame_commands/wipe_ingame.png)
