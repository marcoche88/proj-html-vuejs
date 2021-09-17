<template>
  <div class="card-testimonial text-center p-5 pb-3 shadow position-relative">
    <img
      class="img-fluid rounded-circle shadow position-absolute"
      :src="imgUrl"
      :alt="testimonial.name"
    />
    <p class="testimonial-text pt-5">{{ testimonial.post }}</p>
    <p class="testimonial-name text-uppercase">{{ testimonial.name }}</p>
    <p class="testimonial-job">{{ testimonial.job }}</p>
  </div>
</template>

<script>
export default {
  name: "CardTestimonial",
  props: {
    testimonial: Object,
  },
  computed: {
    imgUrl() {
      return require(`../../assets/images/testimonial-avata-${this.testimonial.img}.jpg`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

.card-testimonial {
  background-color: white;
  height: 100%;
  img {
    height: 100px;
    bottom: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
  .testimonial-text {
    font-size: 12px;
    color: $text-tertiary-color;
  }
  .testimonial-name {
    font-size: 11px;
    font-weight: bold;
  }
  .testimonial-job {
    font-size: 10px;
    color: $text-secondary-color;
  }
}
</style>