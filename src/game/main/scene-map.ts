import { RpgGui } from "@rpgjs/client";

export default {
  onAfterLoading() {
    RpgGui.display("my-tooltip");
  },
};
