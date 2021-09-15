<template>
  <div>
    <div class="title" :class="list.opacity ? 'opacity-0' : null">
      {{ list.title }}
    </div>
    <ul>
      <li v-for="(item, index) in list.items" :key="index">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lsit",
  props: {
    list: Object,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

.title {
  color: black;
  font-size: 14px;
  font-weight: bold;
}

ul {
  padding-left: 0;
  font-size: 12px;
  li {
    list-style-type: none;
    padding: 5px 0;
    a {
      display: inline-block;
      color: $text-secondary-color;
      text-decoration: none;
    }
  }
}
</style>