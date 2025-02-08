import { Components, RpgPlayer, RpgPlayerHooks } from "@rpgjs/server";

export const player: RpgPlayerHooks = {
  onConnected(player: RpgPlayer) {
    player.name = player.web3.walletAdress;
    player.setComponentsTop(Components.text(player.web3.walletAdress));
  },

  async onJoinMap(player: RpgPlayer) {
    await player.gui("my-tooltip").open();
    player.showAttachedGui();
    // you can hide with player.hideAttachedGui()
  },
};

export default player;
