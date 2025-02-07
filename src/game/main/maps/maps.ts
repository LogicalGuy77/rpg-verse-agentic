import { RpgPlayer } from "@rpgjs/server";
import { MapData, RpgMap } from "@rpgjs/server";

@MapData({
  id: "map",
  file: require("../worlds/maps/map.tmx"),
  syncProperties: true, // Add this line
})
export default class TownMap extends RpgMap {
  onInit() {
    console.log("Map loaded");
  }

  onJoin(player: RpgPlayer) {
    console.log("enter", player.id);
  }

  onLeave(player: RpgPlayer) {
    super.onLeave(player);
    console.log("leave", player.id);
  }
}
