<template>
  <button class="button-decoration" @click="sendClick">
    <font-awesome-icon :icon="fontAwesomeIcon" class="button-icon" />
  </button>
</template>

<script>
export default {
  props: {
    fontAwesomeIcon: {
      type: String,
      default: "",
    },
  },

  methods: {
    sendClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.button-decoration {
  outline: none;
  background-color: #3e76ff;
  border: none;

  transition: all 0.5s ease-out;

  &:active {
    background-color: darken(#3e76ff, 30);
    color: darken(white, 30);

    transform: scale(0.95);
  }

  .button-icon {
    color: white;
    font-size: 1.5rem;
    padding: 15px;
  }
}
</style>
