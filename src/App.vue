<template>
  <div id="app">
    <ChatBody class="chat-body"/>
  </div>
</template>

<script>

import ChatBody from "./components/ChatBody"

export default {
  components: {
    ChatBody
  }
};
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  width: 100vw;
  padding: 0;
  margin: 0;
}
#app {
  @include font-information;

  display: flex;
  justify-content: center;
  align-items: center;

  .chat-body{
    height: 500px;
    width: 600px;
    border: 10px solid black;

    @media (max-width: $mobile-breakpoint) {
      height: inherit;
      width: inherit;
      border: 0;
    }
  }
}

</style>
