<template>
  <textarea
    class="input-element"
    :placeholder="placeHolder"
    @input="handleInput"
    :value="value"
    @keydown.enter.prevent="sendMessage"
  ></textarea>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    textAbleToSend: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      placeHolder: "Escribe un mensaje",
    };
  },

  methods: {
    sendMessage() {
      if (this.textAbleToSend) {
        this.$emit("sendMessage");
      }
    },

    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss">
.input-element {
  border: 0;
  outline: none;
  resize: none;
  box-sizing: border-box;
  padding: 20px 15px 0 15px;
  margin-bottom: 10px;
  width: 100%;

  &::placeholder {
    @include font-information;
    font-size: 1rem;
  }
}
</style>
