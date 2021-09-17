<template>
  <header id="header">
    <nav class="my-container container h-100">
      <div class="row align-items-center h-100">
        <!-- navbar-left logo -->
        <div class="col-2">
          <img
            class="img-fluid w-75 py-3 pe-3"
            src="../assets/images/dark-logo.png"
            alt="logo"
          />
        </div>

        <!-- navbar-right menu -->
        <div class="col-10 h-100">
          <ul class="h-100">
            <li v-for="(menu, index) in menus" :key="index" class="pointer">
              {{ menu }} <i class="fas fa-chevron-down fa-xs"></i>
            </li>
            <li class="pointer">
              <div class="cart position-relative">
                <i class="bi bi-cart3"></i>
                <span
                  class="
                    position-absolute
                    top-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                  "
                >
                  <span>0</span>
                </span>
              </div>
            </li>
            <li class="pointer">
              <div class="user rounded-circle text-center">
                <i class="far fa-user fa-md"></i>
              </div>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "Header",
  components: {
    Search,
  },
  data() {
    return {
      menus: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

header {
  background-color: $bg-primary-color;
  color: $text-tertiary-color;
  height: 55px;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
}

li {
  list-style-type: none;
  .user {
    height: 20px;
    width: 20px;
    line-height: 20px;
    border: 1px solid black;
    overflow: hidden;
  }
}

.cart {
  display: inline-block;
  .bi-cart3 {
    font-size: 18px;
  }
  span {
    font-size: 10px;
    background-color: $text-primary-color;
  }
}
</style>