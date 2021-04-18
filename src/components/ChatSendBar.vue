<template>
  <div class="send-bar">
    <BaseChatInput
      v-model="text"
      ref="chatInput"
      :textAbleToSend="textAbleToSend"
      @sendMessage="getClicked"
      @restoreMessage="restoreMessage"
    />
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
    restoreMessage() {
      this.text = this.text ? this.text.trim() : undefined;
    },

    setFocusOnInput() {
      this.$refs.chatInput.$el.focus();
    },

    getClicked() {
      if (this.textAbleToSend) {
        this.$emit("newMessage", this.textSanitized);
        this.text = "";
        this.setFocusOnInput();
      }
    },
  },
};
</script>

<style lang="scss">
.send-bar {
  display: flex;
  flex-wrap: nowrap;

  border: 1px solid $grey;
}
</style>
