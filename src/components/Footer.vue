<template>
  <footer class="pt-5 position-relative">
    <div class="my-container container">
      <!-- footer top -->
      <div id="footer-top" class="row">
        <div
          :class="list.col"
          v-for="(list, index) in lists"
          :key="index + list.title"
        >
          <List :list="list" />
        </div>
        <Social />
      </div>

      <!-- footer bottom -->
      <div id="footer-bottom" class="row my-4">
        <div class="col-12 text-center">
          &copy; Maxcoach. All Rights Reserved
        </div>
      </div>
    </div>
    <div class="arrow-up position-absolute pointer">
      <i class="bi bi-arrow-up-circle-fill"></i>
    </div>
  </footer>
</template>

<script>
import List from "./List.vue";
import Social from "./Social.vue";

export default {
  name: "Footer",
  components: {
    List,
    Social,
  },
  data() {
    return {
      lists: [
        {
          title: "Address",
          items: [
            "382 NE 191st St # 87394 Miami, FL 33179-3899",
            "+1(305)547-9909 (9am - 5pm EST, Monday - Friday)",
            "support@maxcoach.com",
          ],
          opacity: false,
          col: "col-6",
        },
        {
          title: "Explore",
          items: ["Start here", "Blog", "About us"],
          opacity: false,
          col: "col-2",
        },
        {
          title: "Explore",
          items: ["Start here", "Blog", "About us"],
          opacity: true,
          col: "col-2",
        },
        {
          title: "Information",
          items: [
            "Membership",
            "Purchase guide",
            "Privacy policy",
            "Terms of services",
          ],
          opacity: false,
          col: "col-2",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

footer {
  color: $text-secondary-color;
}

#footer-bottom {
  font-size: 11px;
}

.arrow-up {
  bottom: 0;
  right: 15px;
  font-size: 40px;
  color: $text-primary-color;
  i {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  }
}
</style>