<template>
  <div class="chat-body">
    <BaseChatHeader />
    <ChatMessageLog :conversationMessages="messageList" />
    <ChatSendBar @newMessage="appendNewMessage" />
  </div>
</template>

<script>
import BaseChatHeader from "./baseComponents/BaseChatHeader";
import ChatMessageLog from "./ChatMessageLog";
import ChatSendBar from "./ChatSendBar";

export default {
  components: {
    BaseChatHeader,
    ChatSendBar,
    ChatMessageLog,
  },
  data() {
    return {
      text: "undefined",
      messageList: [],
      user: "Alex",
      targetUser: "Alberto",
    };
  },

  methods: {
    createNewMessage(user, text, isReceived = false) {
      const newMessage = {
        id: this.messageList.length + 1,
        user,
        text,
        isReceived,
      };

      this.messageList.push(newMessage);
    },

    appendFirstMessage() {
      this.createNewMessage(
        this.targetUser,
        `Buenos días, ${this.user}. ¿Qué tal todo?`,
        true
      );
    },

    appendNewMessage(message) {
      this.createNewMessage(this.user, message);
    },
  },

  mounted() {
    this.appendFirstMessage();
  },
};
</script>

<style lang="scss">
.chat-body {
  display: grid;
  grid-template-rows: min-content auto min-content;

  height: 100%;
  width: 100%;
}
</style>
