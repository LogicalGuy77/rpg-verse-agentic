import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-2",
  hitbox: {
    width: 32,
    height: 16,
  },
  // Set the property directly in the decorator
  properties: {
    npcId: "npc_002",
  },
})
export default class VillagerEvent extends RpgEvent {
  onInit() {
    this.setGraphic("female");
    // Log the properties to verify they're set
    console.log("Event2 initialized:", {
      properties: this.properties,
      npcId: this.properties?.npcId,
    });
  }

  async onAction(player: RpgPlayer) {
    // Log properties on interaction
    console.log("Event2 interaction:", {
      properties: this.properties,
      npcId: this.properties?.npcId,
    });

    await player.showText("Hi, I am an Event 2 Resolver", {
      talkWith: this,
    });
  }
}
