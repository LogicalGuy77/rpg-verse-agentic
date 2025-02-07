<template>
  <div class="input-box" v-if="show">
    <input v-model="userInput" type="text" placeholder="Enter text..." />
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "my-tooltip",
  rpgAttachToSprite: true,
  props: ["spriteData"],
  inject: ["rpgScene"],
  data() {
    return {
      show: false,
      userInput: "",
      spriteInfo: null,
    };
  },
  mounted() {
    const sprite = this.rpgScene().getSprite(this.spriteData.id);

    // Debug: Log the full sprite object structure
    console.log("Sprite Object Structure:", {
      spriteData: this.spriteData,
      sprite: sprite,
      data: sprite?.data?.data, // Note: checking data.data
      name: sprite?.data?.name,
    });

    // Try to get npcId from the data
    const npcId = sprite?.data?.data?.npcId;

    this.spriteInfo = {
      id: this.spriteData.id,
      name: sprite?.data?.name,
      npcId: npcId,
    };

    // Additional debug log
    console.log("Constructed Sprite Info:", this.spriteInfo);

    this.show = true;
  },
  methods: {
    handleSubmit() {
      const sprite = this.rpgScene().getSprite(this.spriteData.id);
      const spriteName = sprite?.data?.name;
      const timestamp = new Date().toISOString();

      // Different console logs based on agent names
      switch (spriteName) {
        case "UNISWAP_AGENT":
          console.log("Uniswap input:", {
            input: this.userInput,
            timestamp,
          });
          break;
        case "LIDO_AGENT":
          console.log("Lido staking input:", {
            input: this.userInput,
            timestamp,
          });
          break;
        case "AAVE_AGENT":
          console.log("Aave lending input:", {
            input: this.userInput,
            timestamp,
          });
          break;
        case "INTENT_AGENT":
          console.log("Intent resolver input:", {
            input: this.userInput,
            timestamp,
          });
          break;
        case "EV-2":
          console.log("EV-2 Input:", {
            input: this.userInput,
            timestamp,
          });
          break;
      }

      this.show = false;
      this.userInput = "";
    },
  },
};
</script>

<style scoped>
.input-box {
  position: absolute;
  background: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 1000;
}

input {
  margin-right: 5px;
  padding: 5px;
}

button {
  padding: 5px 10px;
}
</style>
