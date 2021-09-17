<template>
  <div class="image-shape">
    <img :src="imageUrl" class="p-5" alt="about" />
    <img :src="shapeUrl" alt="underlay" class="underlay position-absolute" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ImageShape",
  props: {
    image: String,
    shape: String,
  },
  computed: {
    imageUrl() {
      return require(`../../assets/images/${this.image}`);
    },
    shapeUrl() {
      return require(`../../assets/images/${this.shape}`);
    },
  },
};
</script>

<style scoped lang="scss">
.underlay {
  width: 380px;
  right: 30%;
  bottom: 15%;
  z-index: -1;
}

.shape {
  bottom: 30%;
  left: 72%;
  z-index: -1;
}

.linear-shape {
  bottom: 50%;
  right: 100%;
}
</style>