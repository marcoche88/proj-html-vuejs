<template>
  <div class="card border-0 m-3 rounded-2 overflow-hidden position-relative">
    <img :src="courseImgUrl" :alt="course.title" />
    <div class="price position-absolute top-0 fw-bold py-2 text-center">
      {{ course.price }}
    </div>
    <div class="card-body px-4">
      <div class="author mb-2">
        <img
          class="rounded-circle"
          :src="authorImgUrl"
          :alt="course.author.name"
        />
        <span class="ms-3">{{ course.author.name }}</span>
      </div>
      <h6 class="card-title mb-3">{{ course.title }}</h6>
      <div class="info d-flex">
        <div class="lessons">
          <i class="far fa-file-alt"></i> {{ course.lessons }} Lessons
        </div>
        <div class="students ms-4">
          <i class="far fa-user"></i> {{ course.students }} Students
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    course: Object,
  },
  computed: {
    courseImgUrl() {
      return require(`../../assets/images/${this.course.courseImg}`);
    },
    authorImgUrl() {
      return require(`../../assets/images/${this.course.author.img}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

.price {
  background-color: $text-primary-color;
  color: white;
  font-size: 11px;
  width: 60px;
  right: 0;
  border-bottom-left-radius: 0.25rem;
}

.author {
  img {
    width: 25px;
    vertical-align: middle;
  }
  span {
    font-size: 11px;
    color: $text-secondary-color;
  }
}

.info {
  font-size: 10px;
  color: $text-secondary-color;
}
</style>