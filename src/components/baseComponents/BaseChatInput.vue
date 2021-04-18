<template>
  <textarea
    class="input-element"
    :placeholder="placeHolder"
    @input="handleInput"
    :value="value"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      placeHolder: "Escribe un mensaje",
    };
  },

  methods: {
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
  padding: 15px;
  width: 100%;
  resize: none;
}
</style>
