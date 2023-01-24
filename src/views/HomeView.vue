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
    <div class="container">
      <div class="col-12">
        <h2 class="about-me text-gradient-gold fw-bold">About me:</h2>
        <p class="text-white">
          A Technically-astute frontend web developer eager to contribute to team success
          through smart work, attention to details and excellent organizational skills.
          Confident in writing scalable code that are well structured, reliable and also
          user-friendly.
        </p>
        <div class="col-12 d-flex align-items-center experience-wrapper">
          <div class="experience">
            <p class="text-gradient-gold">2+</p>
          </div>
          <p class="text-white">
            Years of experience. Specialised in building websites and web apps, while
            ensuring a seamless web experience for end users.
          </p>
        </div>
      </div>

      <!-- skills section -->
      <div class="row">
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon icon="fa-brands fa-html5" class="html-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">html5</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon icon="fa-brands fa-css3" class="css-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">css3</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded bg-gradient-gold">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon icon="fa-brands fa-js" class="js-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">javascript</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon icon="fa-brands fa-vuejs" class="vue-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">Vuejs</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon icon="fa-brands fa-bootstrap" class="bootstrap-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">Bootstrap</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon
                icon="fa-brands fa-git-alt"
                class="git-icon"
              />&nbsp;&nbsp;
              <font-awesome-icon icon="fa-brands fa-github" class="github-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">git and github</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <!-- <font-awesome-icon icon="fa-brands fa-js" class="js-icon" /> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
              >
                <path
                  d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
                ></path>
              </svg>
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">tailwindcss</span>
            </div>
          </div>
        </div>
        <div class="col-md-3 p-4 skills-card">
          <div class="skills-wrapper p-4 rounded">
            <img :src="skillCardImg" alt="" class="bg-skills" />
            <div class="skills">
              <font-awesome-icon icon="fa-brands fa-laravel" class="laravel-icon" />
              <br />
              <span class="text-uppercase fs-5 text-white fw-bold">Laravel blade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="pt-5">
    <div class="container">
      <div class="col-12">
        <h2 class="project-head text-gradient-gold fw-bold">Featured projects:</h2>
        <p class="text-white">
          I have worked on many projects over the course of being a Web Developer, here
          are a few of my live, real-world projects
        </p>
        <!-- skills section -->
        <div class="row">
          <div class="col-md-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img :src="portfolioImg" alt="" class="rounded" />
              </div>
              <p class="project-title fw-bolder text-gradient-gold text-uppercase mt-2">
                my portfolio
              </p>
              <p class="project-description text-white">
                This is my portfolio site, here you can contact me, hire me for a project,
                and find link to my live project.
              </p>
              <div class="btn-wrapper">
                <a href="https://ariyibi-baseet-online-portfolio.netlify.app/"
                  ><button class="btn btn-block live-demo-btn btn-gradient-gold">
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
                <font-awesome-icon icon="fa-brands fa-html5" class="fs-3 html-logo" />
                <font-awesome-icon icon="fa-brands fa-css3" class="fs-3 ms-2 css-logo" />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon icon="fa-brands fa-vuejs" class="fs-3 ms-2 vue-logo" />
              </div>
            </div>
          </div>
          <div class="col-md-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img :src="greonImg" alt="" class="rounded" />
              </div>
              <p class="project-title fw-bolder text-gradient-gold text-uppercase mt-2">
                greon
              </p>
              <p class="project-description text-white">
                I buiild a working site for Grasscutter and Rabbit Empire of Nigeria to
                manage all about Rabbitry
              </p>
              <div class="btn-wrapper">
                <a href="https://greon.netlify.app/"
                  ><button class="btn btn-block live-demo-btn btn-gradient-gold">
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
                <font-awesome-icon icon="fa-brands fa-html5" class="fs-3 html-logo" />
                <font-awesome-icon icon="fa-brands fa-css3" class="fs-3 ms-2 css-logo" />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon icon="fa-brands fa-vuejs" class="fs-3 ms-2 vue-logo" />
              </div>
            </div>
          </div>
          <div class="col-md-4 p-4 project-card">
            <div class="project-wrapper p-4 rounded">
              <div class="image-area">
                <img :src="GithubRepoListImg" alt="" class="rounded" />
              </div>
              <p class="project-title fw-bolder text-gradient-gold text-uppercase mt-2">
                github repositories list
              </p>
              <p class="project-description text-white">
                I created Github Repositories list, here github users input their github
                username to see all their created repositories
              </p>
              <div class="btn-wrapper">
                <a href="https://github-repository-list.netlify.app/"
                  ><button class="btn btn-block live-demo-btn btn-gradient-gold">
                    Live Demo
                    <font-awesome-icon icon="fa-solid fa-share" /></button
                ></a>
                <a href="https://github.com/Ariyibi-Baseet/github-repository-list"
                  ><button class="btn btn-block github-link-btn ms-2">
                    Github Link
                  </button></a
                >
              </div>
              <div class="stack-used mt-3">
                <font-awesome-icon icon="fa-brands fa-html5" class="fs-3 html-logo" />
                <font-awesome-icon icon="fa-brands fa-css3" class="fs-3 ms-2 css-logo" />
                <font-awesome-icon
                  icon="fa-brands fa-js"
                  class="fs-3 ms-2 javascript-logo"
                />
                <font-awesome-icon
                  icon="fa-brands fa-bootstrap"
                  class="fs-3 ms-2 bootstrap-logo"
                />
                <font-awesome-icon icon="fa-brands fa-vuejs" class="fs-3 ms-2 vue-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="contact-me text-gradient-gold fw-bold">Connect with me:</h2>
          <p class="text-white">Satisfied with me? Please contact me</p>
          <div class="social-icon-wrapper">
            <a class="text-white" href="#"
              ><font-awesome-icon icon="fa-brands fa-square-twitter" class="fs-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon icon="fa-brands fa-square-whatsapp" class="fs-3 ms-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon icon="fa-brands fa-square-github" class="fs-3 ms-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon icon="fa-brands fa-linkedin" class="fs-3 ms-3"
            /></a>
            <a class="text-white" href="#"
              ><font-awesome-icon icon="fa-solid fa-envelope" class="fs-3 ms-3"
            /></a>
          </div>
        </div>
        <div class="col-md-6">
          <p class="fs-4 text-white">Contact me, let’s make magic together</p>
          <form action="#" class="mt-3">
            <div class="mb-3">
              <input type="text" class="form-control shadow-none" placeholder="Name:" />
            </div>
            <div class="mb-3">
              <input type="email" class="form-control shadow-none" placeholder="Email:" />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control shadow-none"
                rows="3"
                placeholder="Message:"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-block text-white w-25 btn-gradient-gold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
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
      skillCardImg: "/img/CurveLine.svg",
      portfolioImg: "/img/portfolio.png",
      greonImg: "/img/greon.png",
      GithubRepoListImg: "/img/interface.png",
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
  min-height: 100vh;
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
/* @media screen and (max-width: 767px) {
} */

#about,
#projects {
  min-height: 100vh;
}
#contact {
  min-height: 70vh;
}
.about-me,
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
/* .skills-card,
.skills-wrapper {
  border: 2px solid white;
} */
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
}

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
  min-height: 200px;
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
