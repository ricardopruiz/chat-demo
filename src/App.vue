<template>
  <div id="app">
    <BaseChatHeader />

    <ChatMessageLog :conversationMessages="messageList" />

    <ChatSendBar @newMessage="appendNewMessage" />
  </div>
</template>

<script>
import BaseChatHeader from "./components/baseComponents/BaseChatHeader";
import ChatMessageLog from "./components/ChatMessageLog";
import ChatSendBar from "./components/ChatSendBar";

export default {
  name: "ChatApp",
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
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
