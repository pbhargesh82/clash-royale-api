# API Routes Documentation

## Clans Routes

- **Get Clan Information**
  - `GET /clans/${clanTag}`
  - Retrieve information about a single clan by its clan tag.

- **Get Clan War Log**
  - `GET /clans/${clanTag}/warlog`
  - Retrieve a clan's war log. *(temporarily disabled)*

- **Search Clans**
  - `GET /clans?${queryString}`
  - Search for clans using query parameters.
  - **Query Parameters:**
    - `name`
    - `locationId`
    - `minMembers`
    - `maxMembers`
    - `minScore`
    - `limit`
    - `after`
    - `before`

- **Get Clan River Race Log**
  - `GET /clans/${clanTag}/riverracelog?${queryString}`
  - Retrieve a clan's river race log.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **List Clan Members**
  - `GET /clans/${clanTag}/members?${queryString}`
  - List members of a clan.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Current River Race Information**
  - `GET /clans/${clanTag}/currentriverrace`
  - Retrieve information about a clan's current river race.

## Players Routes

- **Get Player Information**
  - `GET /players/${playerTag}`
  - Retrieve information about a single player by player tag.

- **Get Upcoming Chests**
  - `GET /players/${playerTag}/upcomingchests`
  - Get a list of reward chests that the player will receive next in the game.

- **Get Player Battle Log**
  - `GET /players/${playerTag}/battlelog`
  - Get a list of recent battles for a player.

## Cards Routes

- **Get Available Cards**
  - `GET /cards`
  - Retrieve a list of available cards.

## Tournaments Routes

- **Search Tournaments**
  - `GET /tournaments?${queryString}`
  - Search for tournaments using query parameters.
  - **Query Parameters:**
    - `name`
    - `limit`
    - `after`
    - `before`

- **Get Tournament Information**
  - `GET /tournaments/${tournamentTag}`
  - Retrieve information about a single tournament by tournament tag.

## Locations Routes

- **List Locations**
  - `GET /locations?${queryString}`
  - Retrieve a list of locations.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Location Information**
  - `GET /locations/${locationId}`
  - Retrieve information about a specific location.

- **Get Clan Rankings for Location**
  - `GET /locations/${locationId}/rankings/clans?${queryString}`
  - Get clan rankings for a specific location.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Player Rankings for Location**
  - `GET /locations/${locationId}/rankings/players?${queryString}`
  - Get player rankings for a specific location.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Clan Wars Rankings for Location**
  - `GET /locations/${locationId}/rankings/clanwars?${queryString}`
  - Get clan wars rankings for a specific location.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Global Seasons**
  - `GET /global/seasons`
  - List league seasons with unique season IDs and season end times.

- **Get Top Path of Legend Players (Global)**
  - `GET /locations/global/pathoflegend/${seasonId}/rankings/players?${queryString}`
  - Get top Path of Legend players for a given season globally.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Global Tournament Rankings**
  - `GET /locations/global/rankings/tournaments/${tournamentTag}?${queryString}`
  - Get global tournament rankings.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

- **Get Player Rankings in Path of Legend for Location**
  - `GET /locations/${locationId}/pathoflegend/players?${queryString}`
  - Get player rankings in Path of Legend for a specific location.
  - **Query Parameters:**
    - `limit`
    - `after`
    - `before`

## Challenges Routes

- **Get Current and Upcoming Challenges**
  - `GET /challenges`
  - Retrieve current and upcoming challenges.

## Global Tournaments Routes

- **Get List of Global Tournaments**
  - `GET /globaltournaments`
  - Retrieve a list of global tournaments.
