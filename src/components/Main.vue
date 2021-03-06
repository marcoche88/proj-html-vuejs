<template>
  <main>
    <!-- menu right fixed -->
    <section
      id="menu-right"
      class="
        d-flex
        flex-column
        align-items-center
        position-fixed
        rounded-2
        shadow
      "
    >
      <i class="fas fa-ruler-combined p-2 pointer"></i>
      <i class="fas fa-info-circle p-2 pointer"></i>
      <i class="fas fa-book p-2 pointer"></i>
      <i class="fas fa-shopping-cart p-2 pointer"></i>
    </section>

    <!-- jumbotron -->
    <MainHero />

    <!-- section coding language -->
    <section id="coding-languages" class="my-5">
      <p class="text-center text-uppercase subtitle-section">
        Start learning coding languages
      </p>
      <h2 class="text-center title-section">
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
            <ImageShape
              image="about-us-03-image-01.png"
              shape="underlay-shape-lilla.svg"
            />
          </div>
          <div class="col-6">
            <div class="p-5">
              <p class="text-uppercase subtitle-section">
                Dream with <span class="fw-bold">maxcoach</span>
              </p>
              <h2 class="mt-2 mb-5 title-section">
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
    <section id="numbers" class="my-5">
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
      <p class="text-center text-uppercase subtitle-section">
        Choose where you'd like to begin
      </p>
      <h2 class="text-center title-section">
        Latest Featured <span class="fw-light">courses</span>
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
      <div class="curved"></div>
    </section>

    <!-- section get start free-->
    <section id="start-free" class="my-5">
      <div class="my-container container">
        <div class="row">
          <div class="col-6">
            <div class="p-5">
              <p class="text-uppercase subtitle-section">
                Why hesitate to register?
              </p>
              <h2 class="title-section">
                Learn At Your <br />Own
                <span class="fw-light">Pace</span>
              </h2>
              <ul class="mb-4">
                <li>Select & customize courses to your preferences</li>
                <li>Change the tutor and make arrangements</li>
                <li>Partecipate in events to join others</li>
                <li>Get the desired certificate delivered at house</li>
              </ul>
              <Button>Get started for free</Button>
            </div>
          </div>
          <div class="col-6 position-relative">
            <ImageShape
              image="home-5-image-01.png"
              shape="underlay-shape-grey.svg"
            >
              <img
                src="../assets/images/maxcoach-shape-05-150x150.png"
                alt="shape"
                class="shape position-absolute"
              />
            </ImageShape>
          </div>
        </div>
      </div>
    </section>

    <!-- section mobile app -->
    <section id="mobile-app" class="my-5">
      <div class="my-container container">
        <div class="row">
          <div class="col-6 position-relative">
            <ImageShape
              image="home-5-image-02.png"
              shape="underlay-shape-grey.svg"
            >
              <img
                src="../assets/images/maxcoach-shape-07-150x150.png"
                alt="shape"
                class="shape position-absolute"
              />
              <img
                src="../assets/images/maxcoach-shape-01.png"
                alt="linear-shape"
                class="linear-shape position-absolute"
              />
            </ImageShape>

            <i class="far fa-circle fa-3x position-absolute"></i>
          </div>
          <div class="col-6 align-self-center">
            <div class="p-5">
              <p class="text-uppercase subtitle-section">
                What are you looking for?
              </p>
              <h2 class="title-section">
                Learn on your
                <span class="fw-light">mobile</span>
                anytime!
              </h2>
              <p class="my-4 subtitle-section">
                Save lessons for later and revise or write notes at any time and
                on multiple devices on your way. Never interfere with activities
                of enjoyment or other precious moments.
              </p>
              <Button>Download Our App</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section events -->
    <section id="events" class="my-5 position-relative">
      <p class="text-center text-uppercase subtitle-section">
        Get in contact now
      </p>
      <h2 class="text-center title-section">
        Upcoming <span class="fw-light">Events</span>
      </h2>
      <div class="my-container container my-5">
        <div class="row g-4">
          <div class="col-6" v-for="(event, index) in events" :key="index">
            <CardEvent :event="event" />
          </div>
        </div>
      </div>
      <p class="text-center subtitle-section m-0">
        Excited about our event?
        <a href="#">
          <span>View all events </span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </p>
      <div class="layer-container position-absolute">
        <div class="layer"></div>
      </div>
    </section>

    <!-- section testimonial -->
    <section id="testimonial" class="mt-5 pb-5">
      <div class="title-testimonial pt-5">
        <p class="text-center text-uppercase subtitle-section">
          People are praising maxcoach
        </p>
        <h2 class="text-center title-section">
          What make they <span class="fw-light">love us?</span>
        </h2>
        <div class="slider py-5">
          <div class="my-container container">
            <div class="row g-5">
              <div
                class="col-4"
                v-for="(testimonial, index) in testimonials"
                :key="index"
              >
                <CardTestimonial :testimonial="testimonial" />
              </div>
            </div>
          </div>
          <div
            class="
              slider-circle
              d-flex
              align-items-center
              justify-content-center
              pt-5
            "
          >
            <div class="circle active pointer"></div>
            <div class="circle pointer"></div>
            <div class="circle pointer"></div>
            <div class="circle pointer"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- section start now -->
    <section id="start-now" class="mb-5 pb-5 text-center position-relative">
      <p class="title-section fw-bold fs-5 my-0">
        Start today for getting
        <span class="fw-normal">Online Certification</span>
      </p>
      <h3 class="mb-4">You can be your own guiding star with our help!</h3>
      <Button>Get started now</Button>
      <img
        src="../assets/images/maxcoach-shape-02.png"
        class="circle-shape position-absolute"
        alt="shape circle"
      />
      <img
        src="../assets/images/maxcoach-shape-01.png"
        class="linear-shape position-absolute"
        alt="shape linear"
      />
      <i class="far fa-circle fa-3x position-absolute"></i>
    </section>
  </main>
</template>

<script>
import MainHero from "./main/MainHero.vue";
import Box from "./main/Box.vue";
import CardVertical from "./main/CardVertical.vue";
import Card from "./main/Card.vue";
import Button from "./main/Button.vue";
import ImageShape from "./main/ImageShape.vue";
import CardEvent from "./main/CardEvent.vue";
import CardTestimonial from "./main/CardTestimonial.vue";

export default {
  name: "Main",
  components: {
    MainHero,
    Box,
    CardVertical,
    Card,
    Button,
    ImageShape,
    CardEvent,
    CardTestimonial,
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
      // section events
      events: [
        {
          place: "Texas, US",
          title: "Storytelling Workshop",
          date: {
            day: "22",
            month: "NOV",
          },
        },
        {
          place: "New York, US",
          title: "Painting Art Contest 2020",
          date: {
            day: "10",
            month: "OCT",
          },
        },
        {
          place: "Hamburg, Germany",
          title: "International Art Fair 2020",
          date: {
            day: "23",
            month: "NOV",
          },
        },
        {
          place: "Illinois, US",
          title: "Street Performance: Call for Artist",
          date: {
            day: "15",
            month: "DEC",
          },
        },
        {
          place: "Illinois, US",
          title: "Consumer Food Safety Education Conference",
          date: {
            day: "22",
            month: "JUL",
          },
        },
        {
          place: "Dubai",
          title: "How meditation improve your mental health?",
          date: {
            day: "12",
            month: "AUG",
          },
        },
      ],
      // section testimonial
      testimonials: [
        {
          img: "02",
          post: "I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.",
          name: "Mina Hollace",
          job: "/ Freelancer",
        },
        {
          img: "04",
          post: "MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
          name: "Madley Pondor",
          job: "/ IT Specialist",
        },
        {
          img: "01",
          post: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.",
          name: "Luvic Dubble",
          job: "/ Private Tutor",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

// menu right fixed
#menu-right {
  background-color: white;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
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

// section courses
#courses {
  .curved {
    height: 150px;
    background: linear-gradient(white, $bg-primary-color);
    clip-path: ellipse(60% 100% at 50% 0%);
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
}

// section mobile app
#mobile-app {
  i {
    font-size: 45px;
    color: #de912a;
    opacity: 0.5;
    top: 20%;
    right: 0;
  }
}

// section events
#events {
  .layer-container {
    background-color: $bg-primary-color;
    top: 60%;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .layer {
    background-color: white;
    height: 360px;
    border-radius: 0% 100% 77% 23% / 100% 0% 100% 0%;
  }
  a {
    text-decoration: none;
    color: $text-primary-color;
    font-weight: bold;
  }
}

// section testimonial
#testimonial {
  background-color: $bg-primary-color;
  .circle {
    padding: 4px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: $text-secondary-color;
    &.active {
      background-color: black;
      padding: 5px;
    }
  }
}

// section start now
#start-now {
  background-color: $bg-primary-color;
  h3 {
    color: $text-tertiary-color;
  }
  i {
    font-size: 45px;
    color: #a08778;
    opacity: 0.4;
    top: 7%;
    left: 18%;
  }
  .linear-shape {
    top: 35%;
    left: 18%;
  }
  .circle-shape {
    top: 12%;
    right: 15%;
  }
}
</style>