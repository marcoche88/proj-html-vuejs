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
              <CardVertical
                v-for="(card, index) in cards"
                :key="index"
                :card="card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section numbers -->
    <section id="numbers">
      <div class="my-container container py-5">
        <div class="row align-items-center">
          <div
            class="col-3 text-center"
            v-for="(number, index) in numbers"
            :key="index"
          >
            <h2>{{ number.data }}</h2>
            <p class="text-uppercase fw-bold">{{ number.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- section courses -->
    <section id="courses" class="my-5">
      <p class="text-center text-uppercase">Choose where you'd like to begin</p>
      <h2 class="text-center">
        Latest Featured <span class="text-uppercase fw-light">courses</span>
      </h2>
      <div class="my-container container mt-5">
        <div class="row">
          <div class="col-4" v-for="(course, index) in courses" :key="index">
            <Card :course="course" />
          </div>
        </div>
        <div class="all-courses text-center">
          <Button> View all courses <i class="fas fa-arrow-right"></i></Button>
        </div>
      </div>
    </section>

    <!-- section get start free-->
    <section id="start-free" class="my-5">
      <div class="my-container container">
        <div class="row">
          <div class="col-6">
            <div class="p-5">
              <p class="text-uppercase">Why hesitate to register?</p>
              <h2>
                Learn At Your <br />Own
                <span class="fw-light">Pace</span>
              </h2>
              <ul>
                <li>Select & customize courses to your preferences</li>
                <li>Change the tutor and make arrangements</li>
                <li>Partecipate in events to join others</li>
                <li>Get the desired certificate delivered at house</li>
              </ul>
              <Button>Get started for free</Button>
            </div>
          </div>
          <div class="col-6 position-relative">
            <img
              src="../assets/images/home-5-image-01.png"
              class="p-5"
              alt="about"
            />
            <img
              src="../assets/images/underlay-shape-grey.svg"
              alt="underlay"
              class="underlay position-absolute"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import MainHero from "./main/MainHero.vue";
import Box from "./main/Box.vue";
import CardVertical from "./main/CardVertical.vue";
import Card from "./main/Card.vue";
import Button from "./main/Button.vue";
export default {
  name: "Main",
  components: {
    MainHero,
    Box,
    CardVertical,
    Card,
    Button,
  },
  data() {
    return {
      // section coding language
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
      // section maxcoach
      cards: [
        {
          title: "Multiple Platforms Supported for Teaching & Studying",
          text: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We konw things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device.",
          active: true,
        },
        {
          title: "Multiple Course Participation at the Same Time",
          text: "",
          active: false,
        },
        {
          title: "Track Study Progress & Deliver Prompt Feedback",
          text: "",
          active: false,
        },
      ],
      // section numbers
      numbers: [
        {
          data: "1.926",
          description: "Finished sessions",
        },
        {
          data: "3.092+",
          description: "Enrolled learners",
        },
        {
          data: "200",
          description: "Online instructors",
        },
        {
          data: "100%",
          description: "Satisfaction rate",
        },
      ],
      // section courses
      courses: [
        {
          courseImg: "course-02-480x298.jpg",
          price: "$40.00",
          author: {
            img: "author1.jpeg",
            name: "Blanche Fields",
          },
          title: "Learning to Write as a Professional Author",
          lessons: 20,
          students: 50,
        },
        {
          courseImg: "stock-full-hd-03-480x298.jpg",
          price: "Free",
          author: {
            img: "author2.jpeg",
            name: "Maggie Strickland",
          },
          title: "Customer-centric Info-Tech Strategies",
          lessons: 24,
          students: 769,
        },
        {
          courseImg: "stock-full-hd-04-480x298.jpg",
          price: "$19.00",
          author: {
            img: "author2.jpeg",
            name: "Maggie Strickland",
          },
          title: "Open Programming Courses for Everyone: Python",
          lessons: 17,
          students: 62,
        },
        {
          courseImg: "stock-full-hd-06-480x298.jpg",
          price: "$26.00",
          author: {
            img: "author1.jpeg",
            name: "Blanche Fields",
          },
          title: "Academic Listening and Note-taking",
          lessons: 14,
          students: 67,
        },
        {
          courseImg: "course-featured-image-01-480x298.jpg",
          price: "$39.00",
          author: {
            img: "author1.jpeg",
            name: "Blanche Fields",
          },
          title: "Master jQuery in a Short Period of Time",
          lessons: 6,
          students: 51,
        },
        {
          courseImg: "stock-full-hd-05-480x298.jpg",
          price: "$59.00",
          author: {
            img: "author1.jpeg",
            name: "Blanche Fields",
          },
          title: "Introduction to Javascript for Beginners",
          lessons: 14,
          students: 76,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

// section coding language and courses
#coding-languages,
#courses,
#start-free {
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

// section maxcoach
#max-coach {
  .underlay {
    width: 380px;
    right: 30%;
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
}

// section numbers
#numbers {
  background-color: $bg-primary-color;
  h2 {
    color: $text-primary-color;
    font-weight: bolder;
  }
  p {
    font-size: 11px;
  }
}

// section start-free
#start-free {
  ul {
    padding-left: 1rem;
    li {
      font-size: 11px;
      color: $text-secondary-color;
      line-height: 25px;
    }
  }
  .underlay {
    width: 380px;
    right: 30%;
    bottom: 15%;
    z-index: -1;
  }
}
</style>