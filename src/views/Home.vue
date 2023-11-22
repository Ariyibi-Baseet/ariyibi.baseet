<template>
  <NavBar />
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
              <button class="btn btn-block fs-5 get-started-btn">
                Get Started
              </button>
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

  <!-- ABOUT SECTION STARTS HERE -->
  <!-- About component from components folder -->
  <About />
  <!-- ENDS HERE -->

  <section id="projects" class="pt-5">
    <div class="container">
      <div class="col-12">
        <h2 class="project-head text-gradient-gold fw-bold">
          Featured projects:
        </h2>
        <p class="text-white">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </p>
        <!-- skills section -->
        <!-- <div class="row">
          <div class="col-12 col-md-6 col-lg-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img :src="portfolioImg" alt="" class="rounded" />
              </div>
              <p
                class="project-title fw-bolder text-gradient-gold text-uppercase mt-2"
              >
                my portfolio
              </p>
              <p class="project-description text-white">
                This is my portfolio site, here you can contact me, hire me for
                a project, and find link to my live project.
              </p>
              <div class="btn-wrapper">
                <a href="https://ariyibi-baseet-online-portfolio.netlify.app/"
                  ><button
                    class="btn btn-block live-demo-btn btn-gradient-gold"
                  >
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <a href="https://github.com/Ariyibi-Baseet/ariyibi.baseet"
                  ><button class="btn btn-block github-link-btn ms-2">
                    Github Link
                  </button></a
                >
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon
                  icon="fa-brands fa-html5"
                  class="fs-3 html-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-css3"
                  class="fs-3 ms-2 css-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-vuejs"
                  class="fs-3 ms-2 vue-logo"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img :src="greonImg" alt="" class="rounded" />
              </div>
              <p
                class="project-title fw-bolder text-gradient-gold text-uppercase mt-2"
              >
                greon
              </p>
              <p class="project-description text-white">
                I buiild a working site for Grasscutter and Rabbit Empire of
                Nigeria to manage all about Rabbitry
              </p>
              <div class="btn-wrapper">
                <a href="https://greon.netlify.app/"
                  ><button
                    class="btn btn-block live-demo-btn btn-gradient-gold"
                  >
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <a href="https://github.com/Ariyibi-Baseet/Greon"
                  ><button class="btn btn-block github-link-btn ms-2">
                    Github Link
                  </button></a
                >
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon
                  icon="fa-brands fa-html5"
                  class="fs-3 html-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-css3"
                  class="fs-3 ms-2 css-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-vuejs"
                  class="fs-3 ms-2 vue-logo"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img :src="GithubRepoListImg" alt="" class="rounded" />
              </div>
              <p
                class="project-title fw-bolder text-gradient-gold text-uppercase mt-2"
              >
                github repositories list
              </p>
              <p class="project-description text-white">
                I created Github Repositories list, here github users input
                their github username to see all their created repositories
              </p>
              <div class="btn-wrapper">
                <a href="https://github-repository-list.netlify.app/"
                  ><button
                    class="btn btn-block live-demo-btn btn-gradient-gold"
                  >
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <a
                  href="https://github.com/Ariyibi-Baseet/github-repository-list"
                  ><button class="btn btn-block github-link-btn ms-2">
                    Github Link
                  </button></a
                >
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon
                  icon="fa-brands fa-html5"
                  class="fs-3 html-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-css3"
                  class="fs-3 ms-2 css-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-vuejs"
                  class="fs-3 ms-2 vue-logo"
                />
              </div>
            </div>
          </div>
        </div> -->

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700259249439/eac8730e-5c06-4bb3-bddf-6351956b6b01.png"
                  alt=""
                  class="rounded"
                />
              </div>
              <p
                class="project-title fw-bolder text-gradient-gold text-uppercase mt-2"
              >
                TIIDELab website
              </p>
              <p class="project-description text-white">
                I was a member of the development team that contributed to
                building the Tiidelab website, Click on Live demo to know more
                about TIIDELab
              </p>
              <div class="btn-wrapper">
                <a href="https://tiidelab.com"
                  ><button
                    class="btn btn-block live-demo-btn btn-gradient-gold"
                  >
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <button class="btn btn-block github-link-btn ms-2" disabled>
                  Github Link
                </button>
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon
                  icon="fa-brands fa-html5"
                  class="fs-3 html-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-css3"
                  class="fs-3 ms-2 css-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-react"
                  class="fs-3 ms-2"
                  style="color: #61dbfb"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  style="fill: #61dbfb; transform: ; msfilter;margin-top:-10px; "
                >
                  <path
                    d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700664676687/8c46246e-46cf-4547-a668-f27bcf106ee9.png"
                  alt=""
                  class="rounded"
                  style="background-color: #000"
                />
              </div>
              <p
                class="project-title fw-bolder text-gradient-gold text-uppercase mt-2"
              >
                LANDSHOP NG
              </p>
              <p class="project-description text-white">
                I was one of the sole developers who worked on the Landshop
                website, an estate management platform.
              </p>
              <div class="btn-wrapper">
                <a href="https://www.landshop.ng/"
                  ><button
                    class="btn btn-block live-demo-btn btn-gradient-gold"
                  >
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <button class="btn btn-block github-link-btn ms-2" disabled>
                  Github Link
                </button>
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon
                  icon="fa-brands fa-html5"
                  class="fs-3 html-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-css3"
                  class="fs-3 ms-2 css-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-vuejs"
                  class="fs-3 ms-2 vue-logo"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700664871318/13250d70-e3ab-4de7-a693-5b319b8f62ee.png"
                  alt=""
                  class="rounded"
                  style="background-color: #000"
                />
              </div>
              <p
                class="project-title fw-bolder text-gradient-gold text-uppercase mt-2"
              >
                afro verified
              </p>
              <p class="project-description text-white">
                I was opportuned to the part of team that worked on Afro
                verified an online ticketing platform that keep track of your
                event
              </p>
              <div class="btn-wrapper">
                <a href="https://avf-frontend.vercel.app/"
                  ><button
                    class="btn btn-block live-demo-btn btn-gradient-gold"
                  >
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <button class="btn btn-block github-link-btn ms-2" disabled>
                  Github Link
                </button>
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon
                  icon="fa-brands fa-html5"
                  class="fs-3 html-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-css3"
                  class="fs-3 ms-2 css-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-vuejs"
                  class="fs-3 ms-2 vue-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION STARTS HERE -->
  <!-- Contact component from components folder -->
  <Contact />
  <!-- ENDS HERE -->

  <FooterArea />
</template>

<script>
import NavBar from "@/components/Nav.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import FooterArea from "@/components/Footer.vue";

import "animate.css";

export default {
  name: "Home",
  components: {
    NavBar,
    About,
    Contact,
    FooterArea,
  },
  setup() {
    // set image path here
    const headerImg = "/img/undraw_web_developer_re_h7ie.svg";
    const skillCardImg = "/img/CurveLine.svg";

    // resume path here
    const myResume = "/resources/Ariyibi-Baseet-Resume.pdf";

    return {
      headerImg,
      skillCardImg,
      myResume,
    };
  },
};
</script>

<style scoped>
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
/* @media screen and (max-width: 767px) {
} */

#about,
#projects {
  min-height: 100vh;
}
#contact {
  height: 70vh;
}
/* .about-me,
.project-head,
.contact-me {
  font-family: var(--playfair);
  letter-spacing: 2px;
}
.experience-wrapper {
  gap: 2rem;
}
.experience > p {
  font-size: 5rem;
  font-family: var(--playfair);
  font-weight: 700;
}
.skills-card,
.skills-wrapper {
  border: 2px solid white;
}
.skills-wrapper {
  background-color: var(--grayish);
  position: relative;
  min-height: 200px;
  transition: background-color 300ms ease-in;
}
.skills-wrapper:hover {
  cursor: pointer;
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

.skills {
  position: absolute;
  bottom: 0;
}
.bg-skills {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
} */

.html-icon,
.css-icon,
.js-icon,
.vue-icon,
.git-icon,
.github-icon,
.laravel-icon,
.bootstrap-icon {
  color: #fff;
  font-size: 4rem;
}

.project-wrapper {
  background-color: var(--grayish-white);
}
.image-area > img {
  width: 100%;
  height: 200px;
  background-color: #fff;
  /* object-fit: cover; */
  /* position:; */
}
.live-demo-btn,
.github-link-btn {
  color: #fff;
  background-color: transparent;
  border: 2px solid hsla(42, 65%, 41%, 1);
  transition: all 300ms ease-in;
  cursor: pointer;
}
.live-demo-btn {
  background-color: #ad8425;
}
.github-link-btn:hover {
  cursor: pointer;
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
.html-logo {
  color: var(--html);
}
.css-logo {
  color: var(--css);
}
.bootstrap-logo {
  color: var(--bootstrap);
}
.laravel-logo {
  color: var(--laravel);
}
.javascript-logo {
  color: var(--javascript);
}
.vue-logo {
  color: var(--vue);
}
.form-control {
  background-color: var(--grayish-white);
  outline: none;
  border: none;
  color: #fff;
  padding: 10px 15px;
}
::placeholder {
  color: gray;
}
</style>
