<template>
  <div class="message-log">
    <BaseChatMessage
      v-for="message in conversationMessages"
      :key="message.id"
      :messageUser="message.user"
      :messageText="message.text"
      :messageReceived="message.isReceived"
    />
  </div>
</template>

<script>
import BaseChatMessage from "./baseComponents/BaseChatMessage";

export default {
  components: {
    BaseChatMessage,
  },

  props: {
    conversationMessages: {
      type: Array,
      required: true,
    },
  },

  methods: {
    scrollToBottom() {
      const messageLog = document.querySelector(".message-log");
      setTimeout(() => (messageLog.scrollTop = messageLog.scrollHeight), 100);
    },
  },

  watch: {
    conversationMessages: {
      handler() {
        this.scrollToBottom();
      },
    },
  },
};
</script>

<style lang="scss">
.message-log {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 30px;
}
</style>
