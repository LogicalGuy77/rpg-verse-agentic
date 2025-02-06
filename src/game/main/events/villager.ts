import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-1",
  hitbox: {
    width: 32,
    height: 16,
  },
})
export default class VillagerEvent extends RpgEvent {
  onInit() {
    this.setGraphic("female");
  }
  async onAction(player: RpgPlayer) {
    await player.showText("Start of the game, 10 Gold ++ ", {
      talkWith: this,
    });
    player.gold += 10;
  }
}
