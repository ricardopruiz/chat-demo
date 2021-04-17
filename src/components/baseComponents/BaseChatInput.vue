<template>
  <input
    type="text"
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
      placeHolder: "Escribe un mensaje"
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
  border:0;
  outline: none;
  padding: 30px;
  width: 100%;
  height: 100%;
}
</style>
