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
    <BaseChatInput v-model="text"/>
  </div>
</template>

<script>
import BaseChatMessage from "./components/baseComponents/BaseChatMessage";
import BaseChatInput from "./components/baseComponents/BaseChatInput";

export default {
  name: "ChatApp",
  components: {
    BaseChatMessage,
    BaseChatInput,
  },
  data(){
    return {
      text:"undefined"
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
