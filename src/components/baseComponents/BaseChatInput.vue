<template>
  <textarea
    class="input-element"
    :placeholder="placeHolder"
    @input="handleInput"
    :value="value"
  ></textarea>
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
  resize: none;
  box-sizing: border-box;
  padding: 20px 15px 0 15px;
  margin-bottom: 10px;
  width: 100%;
}
</style>
