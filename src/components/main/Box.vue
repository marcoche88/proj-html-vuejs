<template>
  <div class="card border-0">
    <img :src="ImgUrl" class="img-fluid px-5" :alt="box.title" />
    <div class="card-body text-center">
      <h6 class="card-title mb-3">{{ box.title }}</h6>
      <p class="card-text">{{ box.text }}</p>
      <a :href="box.link">Start now <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: {
    box: Object,
  },
  computed: {
    ImgUrl() {
      return require(`../../assets/images/home-5-image-box-${this.box.img}.png`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

img {
  max-height: 130px;
}

p {
  font-size: 11px;
  color: $text-secondary-color;
}

a {
  display: block;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  color: $text-tertiary-color;
}
</style>