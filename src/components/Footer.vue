<template>
  <footer class="pt-5 position-relative">
    <div class="container">
      <!-- footer top -->
      <div id="footer-top" class="row">
        <div class="col-6">
          <address v-for="(contact, index) in contactLists" :key="index">
            <List :list="contact" />
          </address>
          <Social />
        </div>
        <div class="col-6">
          <div class="row">
            <div
              class="col-4"
              v-for="(list, index) in lists"
              :key="index + list.title"
            >
              <List :list="list" />
            </div>
          </div>
        </div>
      </div>

      <!-- footer bottom -->
      <div id="footer-bottom" class="row my-4">
        <div class="col-12 text-center">
          &copy; Maxcoach. All Rights Reserved
        </div>
      </div>
    </div>
    <div class="arrow-up position-absolute">
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
      contactLists: [
        {
          title: "Address",
          items: [
            "382 NE 191st St # 87394 Miami, FL 33179-3899",
            "+1(305)547-9909 (9am - 5pm EST, Monday - Friday)",
            "support@maxcoach.com",
          ],
          opacity: false,
        },
      ],
      lists: [
        {
          title: "Explore",
          items: ["Start here", "Blog", "About us"],
          opacity: false,
        },
        {
          title: "Explore",
          items: ["Start here", "Blog", "About us"],
          opacity: true,
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