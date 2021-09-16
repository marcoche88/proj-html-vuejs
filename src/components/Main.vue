<template>
  <main>
    <!-- jumbotron -->
    <MainHero />

    <!-- section coding language -->
    <section id="coding-languages" class="my-5">
      <p class="text-center text-uppercase">Start learning coding languages</p>
      <h2 class="text-center">
        Build Your Dream <span class="text-uppercase fw-light">today</span>
      </h2>
      <div class="my-container container mt-5">
        <div class="row">
          <div class="col-3" v-for="box in boxes" :key="box.img">
            <Box :box="box" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import MainHero from "./main/MainHero.vue";
import Box from "./main/Box.vue";
export default {
  name: "Main",
  components: {
    MainHero,
    Box,
  },
  data() {
    return {
      boxes: [
        {
          img: "01",
          title: "Idea Discussion",
          text: "Get teamed up with the specialists who work and teach coding for years at famous universities.",
          link: "#",
        },
        {
          img: "02",
          title: "Web Development",
          text: "Learn to start building a webpage from scratch. You decide your own pace, course and speed.",
          link: "#",
        },
        {
          img: "03",
          title: "System Administration",
          text: "Learners are encouraged to study the mechanism and structure of system administration.",
          link: "#",
        },
        {
          img: "04",
          title: "Graphic Design",
          text: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

#coding-languages {
  p {
    font-size: 11px;
    color: $text-secondary-color;
  }
  h2 {
    color: $text-tertiary-color;
    span {
      color: $text-primary-color;
    }
  }
}
</style>