<template>
  <footer class="pt-5 position-relative">
    <div class="container">
      <!-- footer top -->
      <div id="footer-top" class="row">
        <div class="col-6">
          <address>
            <div class="title">Address</div>
            <ul>
              <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
              <li>+1(305)547-9909 (9am - 5pm EST, Monday - Friday)</li>
              <li>support@maxcoach.com</li>
              <li>
                <a href="#" class="me-4"
                  ><i class="fab fa-facebook-square fa-2x"></i
                ></a>
                <a href="#" class="me-4"
                  ><i class="fab fa-twitter fa-2x"></i
                ></a>
                <a href="#" class="me-4"
                  ><i class="fab fa-instagram fa-2x"></i
                ></a>
                <a href="#" class="me-4"
                  ><i class="fab fa-linkedin fa-2x"></i
                ></a>
              </li>
            </ul>
          </address>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-4">
              <div class="title">Explore</div>
              <ul>
                <li><a href="#">Start here</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About us</a></li>
              </ul>
            </div>
            <div class="col-4">
              <div class="title opacity-0">Explore</div>
              <ul>
                <li><a href="#">Success story</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div class="col-4">
              <div class="title">Information</div>
              <ul>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Purchase guide</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms of services</a></li>
              </ul>
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
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
@import "../scss/_vars.scss";

footer {
  color: $text-secondary-color;
}

.title {
  color: black;
  font-size: 14px;
  font-weight: bold;
}

ul {
  padding-left: 0;
  font-size: 12px;
  li {
    list-style-type: none;
    padding: 5px 0;
    a {
      display: inline-block;
      color: $text-secondary-color;
      text-decoration: none;
    }
  }
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