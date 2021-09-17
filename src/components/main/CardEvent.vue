<template>
  <div class="container event-info">
    <div class="row justify-content-between py-4">
      <div class="col-6 ps-4">
        <div class="event-place mb-1">
          <i class="far fa-user"></i> {{ event.place }}
        </div>
        <h6>{{ event.title }}</h6>
      </div>
      <div class="col-4 text-center">
        <div class="day">{{ event.date.day }}</div>
        <div class="month mb-2">{{ event.date.month }}</div>
        <Button>Get ticket</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "CardEvent",
  components: {
    Button,
  },
  props: {
    event: Object,
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_vars.scss";

.event-info {
  background-color: $bg-primary-color;
}
.event-place {
  font-size: 10px;
  color: $text-secondary-color;
}
.day {
  font-size: 35px;
  line-height: 35px;
  color: $text-primary-color;
}
.month {
  font-size: 12px;
  font-weight: bold;
}
</style>