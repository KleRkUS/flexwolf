import InGame from "../dist/in_game/in_game.js";

function start() {

  overwolf.games.events.onInfoUpdates2.addListener(function(info) {
    console.log("Info UPDATE: " + JSON.stringify(info));
  });

}