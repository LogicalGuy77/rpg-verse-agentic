<template>
  <div class="input-box" v-if="show">
    <div class="chat-history" v-if="messages.length">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'message',
          message.type === 'user' ? 'user-message' : 'bot-message',
        ]"
      >
        {{ message.text }}
      </div>
    </div>
    <div class="input-area">
      <input
        v-model="userInput"
        type="text"
        placeholder="Enter text..."
        @keyup.enter="handleSubmit"
      />
      <button @click="handleSubmit" :disabled="isLoading">
        {{ isLoading ? "..." : "Submit" }}
      </button>
    </div>
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
      messages: [],
      isLoading: false,
    };
  },

  mounted() {
    const sprite = this.rpgScene().getSprite(this.spriteData.id);
    const npcId = sprite?.data?.data?.npcId;

    this.spriteInfo = {
      id: this.spriteData.id,
      name: sprite?.data?.name,
      npcId: npcId,
    };

    this.show = true;
  },

  methods: {
    async handleSubmit() {
      if (!this.userInput.trim() || this.isLoading) return;

      const sprite = this.rpgScene().getSprite(this.spriteData.id);
      const spriteName = sprite?.data?.name;
      const timestamp = new Date().toISOString();

      this.isLoading = true;

      // Store user message
      this.messages.push({
        text: this.userInput,
        type: "user",
        timestamp,
      });

      try {
        let response = null;

        // Handle API calls based on sprite name
        switch (spriteName) {
          case "UNISWAP_AGENT":
            response = await this.sendToUniswapAPI(this.userInput);
            break;
          case "LIDO_AGENT":
            response = await this.sendToLidoAPI(this.userInput);
            break;
          case "AAVE_AGENT":
            response = await this.sendToAaveAPI(this.userInput);
            break;
          // this is Eigen DA agent
          case "INTENT_AGENT":
            response = await this.sendToEigenAPI(this.userInput);
            break;
        }

        // Store bot response if we got one
        if (response) {
          this.messages.push({
            text: response,
            type: "bot",
            timestamp: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error("API Error:", error);
        this.messages.push({
          text: "Sorry, an error occurred. Please try again.",
          type: "bot",
          timestamp: new Date().toISOString(),
        });
      } finally {
        this.isLoading = false;
        this.userInput = "";
      }
    },

    async sendToAaveAPI(message) {
      const response = await fetch("https://aave-agent.vercel.app/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      return (
        data.data.data.agentMessages[0] ||
        data.message ||
        "Received response from bot"
      );
    },

    async sendToUniswapAPI(message) {
      const response = await fetch("http://localhost:8080/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      return (
        data.data.data.agentMessages[0] ||
        data.message ||
        "Received response from bot"
      );
    },

    async sendToLidoAPI(message) {
      console.log("Lido API call with message:", message);
      return "This is a dummy response from Lido Agent. Replace with actual API implementation.";
    },

    async sendToEigenAPI(message) {
      try {
        // First, hash the message using SHA-256
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashedMessage = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");

        // Then take first 16 characters of the hash
        const truncatedHash = hashedMessage.slice(0, 15);

        const response = await fetch("http://localhost:3000/api/store", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: truncatedHash }),
        });

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        // Format the response to include original message, hashed message, headerhash and blobindex
        return `Original Message: ${message}\nHashed (truncated): ${truncatedHash}\nHeader Hash: ${data.data.headerhash}\nBlob Index: ${data.data.blobindex}`;
      } catch (error) {
        console.error("Eigen API Error:", error);
        throw error;
      }
    },
  },
};
</script>

<style scoped>
/* RPG-Style Chat Box */
.input-box {
  position: absolute;
  background: radial-gradient(circle, #f5e1b3 0%, #e3c48e 50%, #c9a66b 100%);
  padding: 15px;
  border: 3px solid #5c4033;
  border-radius: 8px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
  width: 300px;
  font-family: "Georgia", serif;
  color: #3e2723;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.3);
}

/* Chat History */
.chat-history {
  max-height: 220px;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 8px;
  border: 2px solid #5c4033;
  border-radius: 5px;
  background: rgba(255, 255, 240, 0.6);
}

/* Message Styles */
.message {
  font-family: "Georgia", serif;
  font-size: 14px;
  color: #3e2723;
  padding: 8px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.user-message {
  background: rgba(250, 250, 210, 0.7);
  border-left: 4px solid #5c4033;
}

.bot-message {
  background: rgba(230, 200, 150, 0.7);
  border-right: 4px solid #5c4033;
}

/* Input Area */
.input-area {
  display: flex;
  gap: 6px;
}

/* Input Field */
.input-area input {
  flex-grow: 1;
  padding: 6px;
  border: 2px solid #5c4033;
  border-radius: 5px;
  background: rgba(255, 255, 240, 0.8);
  color: #3e2723;
  font-size: 14px;
}

/* RPG-Style Button */
button {
  padding: 7px 12px;
  background: linear-gradient(to bottom, #a67c52, #6e4f31);
  color: white;
  font-weight: bold;
  border: 2px solid #5c4033;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-size: 14px;
}

button:hover {
  background: linear-gradient(to bottom, #b3825a, #7f5a3a);
}

button:disabled {
  background: #a9a9a9;
  border-color: #777;
  cursor: not-allowed;
}
</style>
