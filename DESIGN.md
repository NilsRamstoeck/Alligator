# Design

## Client Functionality

### Creating a Game/Lobby

#### Requirements

- Username

#### Steps

1. generate auth token for user
2. generate game ID
3. respond with game ID and token

### Joining a Game/Lobby

#### Requirements 

- Username
- Game ID

#### Steps

1. generate auth token for user
2. connect to lobby using a websocket

## Server Functionality

### Server Requirements

The Server needs to: 

- authenticate users
- coordinate websockets

## Database

*TODO: Think about how to best abstract database*  

## Implementation

### Classes

- GameSettings
- GameData
- Player
- PlayerData



