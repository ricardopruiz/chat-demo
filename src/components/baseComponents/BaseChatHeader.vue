<template>
  <div class="chat-header">
    {{headerTitle}}
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
      default: "FrontEnd"
    }
  }

}
</script>

<style style="scss">
  .chat-header {
    display: flex;
    background-color: #3e76ff;
    color: white;
    font-weight: bolder;
    padding: 10px;
  }
</style>