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
};
</script>

<style lang="scss">
.message-log {
  overflow: hidden;
  padding: 30px;
}
</style>
