<template>
  <button :disabled="disabled" class="button-decoration" @click="sendClick">
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    sendClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style lang="scss">
.button-decoration {
  outline: none;
  background-color: $primary;
  border: none;

  transition: all 0.1s ease-out;

  &:active {
    @include selected-button-style;
  }

  .button-icon {
    color: $white;
    font-size: 1.5rem;
    padding: 15px;
  }

  &[disabled] {
    background-color: lighten($primary, 15);
    cursor: not-allowed;

    &:active {
      background-color: lighten($primary, 15);
      transform: unset;
    }
  }
}
</style>
