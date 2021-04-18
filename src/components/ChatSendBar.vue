<template>
  <div class="send-bar">
    <BaseChatInput v-model="text" />
    <BaseChatButton class="send-button" fontAwesomeIcon="paper-plane" @click="getClicked"/>
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

  data(){
    return {
      text: undefined
    }
  },
  methods: {
    getClicked() {
      console.log("click event");
    }
  }
};
</script>

<style lang="scss">
.send-bar {
  display: flex;
  flex-wrap: nowrap;
  
  border: 1px solid lightgray;
}
</style>
