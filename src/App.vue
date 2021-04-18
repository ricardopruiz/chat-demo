<template>
  <div id="app">
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

    <BaseChatButton fontAwesomeIcon="paper-plane" @click="gotClicked" />

    
  </div>
</template>

<script>
import BaseChatMessage from "./components/baseComponents/BaseChatMessage";
import BaseChatButton from "./components/baseComponents/BaseChatButton";

export default {
  name: "ChatApp",
  components: {
    BaseChatMessage,
    BaseChatButton
  },
  data() {
    return {
      text: "undefined",
    };
  },
  methods: {
    gotClicked() {
      alert("button is clicked");
    }
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
