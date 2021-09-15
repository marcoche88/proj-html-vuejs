<template>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search..." />
    <button type="button" class="input-group-text">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

input {
  border-right: transparent;
}

button {
  background-color: white;
  border-left: transparent;
  color: $text-primary-color;
}
</style>