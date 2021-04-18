<template>
  <div id="app">
    <BaseChatHeader />
    <BaseChatMessage
      messageUser="testReceiver"
      messageText="Example received text"
      :messageReceived="true"
    />
    <BaseChatMessage
      messageUser="testSender"
      messageText="Example sended text"
      :messageReceived="false"
    />

    <ChatSendBar />

    
  </div>
</template>

<script>
import BaseChatMessage from "./components/baseComponents/BaseChatMessage";
import BaseChatHeader from "./components/baseComponents/BaseChatHeader";
import ChatSendBar from "./components/ChatSendBar";

export default {
  name: "ChatApp",
  components: {
    BaseChatMessage,
    BaseChatHeader,
    ChatSendBar
  },
  data() {
    return {
      text: "undefined",
    };
  },
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
