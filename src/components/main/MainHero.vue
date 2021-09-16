<template>
  <section id="main-hero" class="py-5 position-relative">
    <div class="my-container container h-100 position-relative">
      <div class="row h-100">
        <div class="col-6">
          <div class="text-hero w-50 mt-5">
            <h2>Complete Your Dreams in JavaS Programming</h2>
            <p class="my-4">
              Learn any coding program in distance and for a reasonable fee. You
              don't have to struggle alone, you've got our assistance and help.
            </p>
            <Button>
              <i class="fas fa-download"></i> Download free E-book
            </Button>
          </div>
        </div>
        <div class="col-6 h-100 text-end">
          <img
            class="h-100"
            src="../../assets/images/home-5-hero-image.png"
            alt="main-hero"
          />
        </div>
      </div>
    </div>
    <div class="wave position-absolute"></div>
  </section>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "MainHero",
  components: {
    Button,
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

#main-hero {
  background-color: $bg-primary-color;
  height: 600px;
  color: $text-tertiary-color;
  .my-container {
    z-index: 1;
  }
  p {
    font-size: 11px;
    line-height: 20px;
  }

  .wave {
    height: 400px;
    background-image: url("../../assets/images/jumbo-overlay.svg");
    transform: rotate(180deg) scaleX(-1);
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>