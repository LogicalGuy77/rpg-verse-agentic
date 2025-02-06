import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-2",
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
    await player.showText("Hi, I am an Event 2 Resolver", {
      talkWith: this,
    });
  }
}
