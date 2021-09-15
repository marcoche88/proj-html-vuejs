<template>
  <div>
    <a href="#" class="me-4" v-for="(social, index) in socials" :key="index"
      ><i :class="`fab fa-${social} fa-2x`"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      socials: ["facebook-square", "twitter", "instagram", "linkedin"],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

a {
  display: inline-block;
  color: $text-secondary-color;
  text-decoration: none;
  font-size: 12px;
}
</style>