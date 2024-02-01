<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-12 col-lg-6 d-flex align-items-center content-area"
        >
          <div class="content">
            <span class="text-white fs-6">Hello, i'm</span>
            <h2 class="fw-bold fs-1 dev-name text-gradient-gold">
              Ariyibi Baseet A.
            </h2>
            <p class="text-white fs-5 animate__animated animate__bounce">
              Result-Driven Frontend Engineer. I create seamless web experiences
              for end-users.
            </p>
            <div class="button-group">
              <a href="#about">
                <button class="btn btn-block fs-5 get-started-btn">
                  Get Started
                </button>
              </a>

              <a :href="myResume" download>
                <button class="btn btn-block fs-5 ms-2 dwn-resume-btn">
                  Download my CV/Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-end d-none d-md-none d-lg-flex"
        >
          <div class="image">
            <img
              :src="headerImg"
              alt=""
              class="animate__animated animate__fadeInRight"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  setup() {
    const headerImg = "/img/undraw_web_developer_re_h7ie.svg";
    const myResume = "/resources/Ariyibi-Baseet-Resume.pdf";

    return { headerImg, myResume };
  },
};
</script>

<style>
#header {
  position: relative;
}
#header,
.content-area {
  min-height: 100vh;
}
.dev-name {
  font-family: var(--playfair);
  letter-spacing: 2px;
}
.get-started-btn,
.dwn-resume-btn {
  color: #ad8425;
  background-color: transparent;
  border: 2px solid hsla(42, 65%, 41%, 1);
  transition: all 300ms ease-in;
}
.get-started-btn:hover,
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
</style>
