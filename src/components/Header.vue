<template>
  <header>
    <nav class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-2">
          <img
            class="img-fluid w-75 p-3"
            src="../assets/images/dark-logo.png"
            alt="logo"
          />
        </div>
        <div class="col-10 h-100">
          <ul class="h-100">
            <li>Home <i class="fas fa-chevron-down fa-xs"></i></li>
            <li>Pages <i class="fas fa-chevron-down fa-xs"></i></li>
            <li>Courses <i class="fas fa-chevron-down fa-xs"></i></li>
            <li>Features <i class="fas fa-chevron-down fa-xs"></i></li>
            <li>Blog <i class="fas fa-chevron-down fa-xs"></i></li>
            <li>
              <span>Shop</span>
              <i class="fas fa-chevron-down fa-xs"></i>
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
            <li>
              <div class="user rounded-circle text-center">
                <i class="far fa-user fa-md"></i>
              </div>
            </li>
            <li>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <button type="button" class="input-group-text">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

header {
  background-color: $bg-primary-color;
  height: 55px;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  margin-left: 200px;
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
  margin-left: 10px;
  .bi-cart3 {
    font-size: 18px;
  }
  span {
    font-size: 10px;
    background-color: $text-primary-color;
  }
}

input {
  border-right: transparent;
}

button {
  background-color: white;
  border-left: transparent;
  color: $text-primary-color;
}
</style>