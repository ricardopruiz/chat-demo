<template>
  <div class="send-bar">
    <BaseChatInput v-model="text" />
    <BaseChatButton
      class="send-button"
      :disabled="disableSendButton"
      fontAwesomeIcon="paper-plane"
      @click="getClicked"
    />
  </div>
</template>

<script>
import BaseChatInput from "./baseComponents/BaseChatInput";
import BaseChatButton from "./baseComponents/BaseChatButton";
export default {
  components: {
    BaseChatInput,
    BaseChatButton,
  },

  data() {
    return {
      text: undefined,
    };
  },

  computed: {
    textSanitized() {
      return typeof this.text !== "undefined" ? this.text.trim() : "";
    },

    disableSendButton() {
      return !this.textAbleToSend;
    },

    textAbleToSend() {
      return this.textSanitized !== "";
    },
  },

  methods: {
    getClicked() {
      this.$emit("newMessage", this.textSanitized)
      this.text = "";
    },
  },
};
</script>

<style lang="scss">
.send-bar {
  display: flex;
  flex-wrap: nowrap;

  border: 1px solid lightgray;
}
</style>
