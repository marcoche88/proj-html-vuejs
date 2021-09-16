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

    <!-- section maxcoach -->
    <section id="max-coach" class="my-5">
      <div class="my-container container">
        <div class="row">
          <div class="col-6 position-relative">
            <img
              src="../assets/images/about-us-03-image-01.png"
              class="p-5"
              alt="about"
            />
            <img
              src="../assets/images/underlay-shape-lilla.svg"
              alt="underlay"
              class="underlay position-absolute"
            />
          </div>
          <div class="col-6">
            <div class="p-5">
              <p class="text-uppercase">
                Dream with <span class="fw-bold">maxcoach</span>
              </p>
              <h2 class="mt-2 mb-5">
                Construct A
                <span class="fw-light">Stunning</span>
                Career Perspective
              </h2>
              <div class="card mb-4 shadow">
                <div
                  class="
                    card-header
                    active
                    fw-bold
                    py-3
                    pointer
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <span
                    >Multiple Platforms Supported for Teaching & Studying</span
                  >
                  <i class="fas fa-minus-circle"></i>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    MaxCoach supports the act of teaching and learning on
                    multiple platforms like online or offline via material
                    downloads. We konw things aren't supposed to be devoured in
                    a short time, you can always access our knowledge base from
                    any device.
                  </p>
                </div>
              </div>
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
                >
                  <span>Multiple Course Participation at the Same Time</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>
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
                >
                  <span>Track Study Progress & Deliver Prompt Feedback</span>
                  <i class="fas fa-plus-circle"></i>
                </div>
              </div>
            </div>
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

#max-coach {
  .underlay {
    width: 380px;
    right: 40%;
    bottom: 15%;
    z-index: -1;
  }
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
}
</style>