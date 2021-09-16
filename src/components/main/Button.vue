<template>
  <button type="button" class="btn px-4 py-2">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

button {
  font-size: 11px;
  font-weight: bold;
  color: white;
  background-color: $text-primary-color;
}
</style>