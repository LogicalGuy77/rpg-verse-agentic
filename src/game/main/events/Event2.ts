import { RpgEvent, EventData, RpgPlayer } from "@rpgjs/server";

@EventData({
  name: "EV-2",
  hitbox: {
    width: 32,
    height: 16,
  },
  properties: {
    npcId: "npc_002",
  },
})
export default class VillagerEvent extends RpgEvent {
  onInit() {
    this.setGraphic("female");
  }

  async onAction(player: RpgPlayer) {
    // Initial greeting
    await player.showText("Hi, I am an Event 2 Resolver", {
      talkWith: this,
    });

    // Create multiple choice options
    const choices = [
      { text: "Hello!", value: "hello" },
      { text: "How are you?", value: "how_are_you" },
      { text: "Nice to meet you!", value: "greet" },
      { text: "Goodbye", value: "bye" },
    ];

    // Get input through choices
    const response = await player.showChoices(
      "What would you like to say?",
      choices,
      {
        talkWith: this,
      }
    );

    // Show different responses based on choice
    let replyText = "";
    switch (response) {
      case "hello":
        replyText = "Hello to you too!";
        break;
      case "how_are_you":
        replyText = "I'm doing great, thank you for asking!";
        break;
      case "greet":
        replyText = "Nice to meet you as well!";
        break;
      case "bye":
        replyText = "Goodbye! Have a great day!";
        break;
      default:
        replyText = "Wecome to SuriVerse!";
    }

    // Show the response with timestamp
    const timestamp = new Date().toISOString();
    await player.showText(
      `You said: ${choices.find((c) => c.value === response)?.text}\n` +
        `My response: ${replyText}\n` +
        `Time: ${timestamp}`,
      {
        talkWith: this,
      }
    );
  }
}
