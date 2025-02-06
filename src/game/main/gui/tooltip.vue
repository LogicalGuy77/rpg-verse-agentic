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
            userInput: ''
        };
    },
    mounted() {
        const sprite = this.rpgScene().getSprite(this.spriteData.id);
        this.show = true;
    },
    methods: {
        handleSubmit() {
            console.log('User submitted:', {
                spriteId: this.spriteData.id,
                input: this.userInput,
                timestamp: new Date().toISOString()
            });
            this.show = false;
            this.userInput = '';
        }
    }
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