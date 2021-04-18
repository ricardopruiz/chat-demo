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

<style lang="scss">
  .chat-header {
    display: flex;
    background-color: $primary;
    color: $white;
    font-weight: bolder;
    padding: 10px;
  }
</style>