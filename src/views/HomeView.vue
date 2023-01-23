<template>
  <NavBar />
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center content-area">
          <div class="content">
            <span class="text-white fs-6">Hello, i'm</span>
            <h2 class="fw-bold fs-1 dev-name text-gradient-gold">Ariyibi Baseet A.</h2>
            <p class="text-white fs-5">
              Result-Driven Frontend Engineer. I create seamless web experiences for
              end-users.
            </p>
            <div class="button-group">
              <button class="btn btn-block fs-5 about-me-btn">About me</button>
              <button class="btn btn-block fs-5 ms-2 dwn-resume-btn">
                Download my CV/Resume
              </button>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 d-flex align-items-center justify-content-end d-none d-md-flex"
        >
          <div class="image">
            <img :src="headerImg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
  <section id="about">
    <div class="container"></div>
  </section>
  <FooterArea />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/Nav.vue";
import FooterArea from "@/components/Footer.vue";

export default {
  name: "HomeView",
  data() {
    return {
      headerImg: "/img/undraw_web_developer_re_h7ie.svg",
    };
  },
  components: {
    NavBar,
    FooterArea,
  },
};
</script>

<style scoped>
#header,
.content-area {
  min-height: 90vh;
}
.dev-name {
  font-family: var(--playfair);
  letter-spacing: 2px;
}
.about-me-btn,
.dwn-resume-btn {
  color: #ad8425;
  background-color: transparent;
  border: 2px solid hsla(42, 65%, 41%, 1);
  transition: all 300ms ease-in;
}
.about-me-btn:hover,
.dwn-resume-btn:hover {
  color: var(--dark-color);
  background: hsla(42, 65%, 41%, 1);
  background: linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  background: -moz-linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  background: -webkit-linear-gradient(
    135deg,
    hsla(42, 65%, 41%, 1) 0%,
    hsla(56, 87%, 75%, 1) 94%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#AE8625", endColorstr="#F7EF8A", GradientType=1 );
}
.image > img {
  width: 500px;
}
@media screen and (max-width: 767px) {
  .content-area {
    border: 2px solid white;
  }
}
</style>
