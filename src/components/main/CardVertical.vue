<template>
  <div class="card mb-4 shadow">
    <div
      class="
        card-header
        fw-bold
        py-3
        pointer
        d-flex
        justify-content-between
        align-items-center
      "
      :class="card.active ? 'active' : null"
    >
      <span>{{ card.title }}</span>
      <i
        class="fas"
        :class="card.active ? 'fa-minus-circle' : 'fa-plus-circle'"
      ></i>
    </div>
    <div class="card-body" v-if="card.active">
      <p class="card-text">{{ card.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVertical",
  props: {
    card: Object,
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

p {
  font-size: 11px;
  color: $text-secondary-color;
}

.card-header {
  font-size: 11px;
  background-color: white;
  color: $text-secondary-color;
  i {
    font-size: 14px;
  }
}
.active {
  color: white;
  background-color: $text-primary-color;
}
</style>